'use client';

import React, { useEffect, useRef, useState, ElementType } from 'react';
import { motion } from 'motion/react';

enum Phase {
  TYPING = 'typing',
  DELETING = 'deleting',
  PAUSING = 'pausing',
}

interface ITypingAnimationProps {
  texts: string[];
  typeSpeed?: number;
  pauseTime?: number;
  tag?: ElementType;
  className?: string;
  firstClassName?: string;
  secondClassName?: string;
  caretClassName?: string;
}

export default function TypingAnimation({
  texts = [],
  typeSpeed = 100,
  pauseTime = 2000,
  tag: Tag = 'div',
  className = '',
  firstClassName = '',
  secondClassName = '',
  caretClassName = '',
}: ITypingAnimationProps) {
  const [phase, setPhase] = useState<Phase>(Phase.TYPING);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(performance.now());
  const pauseStartRef = useRef<number>(0);

  const currentText = texts[textIndex] || '';
  const words = currentText.split(' ');

  const fixedWord = words[0] || '';
  const firstDynamicWord = words[1] || '';
  const remainingWords = words.slice(2).join(' ');
  const fullDynamic = [firstDynamicWord, remainingWords].filter(Boolean).join(' ');

  const visibleDynamic = fullDynamic.slice(0, charIndex);

  const animate = (time: number) => {
    const delta = time - lastTimeRef.current;

    switch (phase) {
      case Phase.TYPING:
        if (delta >= typeSpeed && charIndex < fullDynamic.length) {
          setCharIndex((c) => c + 1);
          lastTimeRef.current = time;
        } else if (charIndex >= fullDynamic.length) {
          setPhase(Phase.PAUSING);
          pauseStartRef.current = time;
        }
        break;

      case Phase.DELETING:
        if (delta >= typeSpeed && charIndex > 0) {
          setCharIndex((c) => c - 1);
          lastTimeRef.current = time;
        } else if (charIndex === 0) {
          setPhase(Phase.PAUSING);
          pauseStartRef.current = time;
        }
        break;

      case Phase.PAUSING:
        if (time - pauseStartRef.current >= pauseTime) {
          if (charIndex === 0) {
            setTextIndex((i) => (i + 1) % texts.length);
            setPhase(Phase.TYPING);
          } else {
            setPhase(Phase.DELETING);
          }
          lastTimeRef.current = time;
        }
        break;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [phase, charIndex, textIndex]);

  return (
    <Tag className={className}>
      <span className={firstClassName}>{fixedWord} </span>
      <span className={firstClassName}>{visibleDynamic.slice(0, firstDynamicWord.length)}</span>
      <span className={secondClassName}>{visibleDynamic.slice(firstDynamicWord.length)}</span>
      <motion.span
        className={`ml-1 ${caretClassName}`}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        |
      </motion.span>
    </Tag>
  );
}
