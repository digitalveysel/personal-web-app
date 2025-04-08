'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'motion/react';

interface IMousePosition {
  x: number;
  y: number;
}

enum VARIANT_KEY {
  Default = 'default',
  Press = 'press',
  OnLink = 'onLink',
}

const targetRefs = 'a, button';

export default function FlareCursor() {
  const [mousePosition, setMousePosition] = useState<IMousePosition>({ x: 0, y: 0 });
  const [variant, setVariant] = useState<string>(VARIANT_KEY.Default);
  const [isMounted, setIsMounted] = useState(false);

  const variants: Variants = {
    [VARIANT_KEY.Default]: {
      ...mousePosition,
      height: 32,
      width: 32,
    },
    [VARIANT_KEY.Press]: {
      ...mousePosition,
      height: 24,
      width: 24,
    },
    [VARIANT_KEY.OnLink]: {
      ...mousePosition,
      width: 64,
      height: 64,
      backgroundColor: 'var(--color-primary-t-2)',
    },
  };

  useEffect(() => {
    const isFinPointer = window.matchMedia('(pointer: fine)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    setIsMounted(isFinPointer && !isTouchDevice);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e?.clientX, y: e?.clientY });
    };

    const mouseDown = () => {
      setVariant(VARIANT_KEY.Press);
    };

    const mouseUp = () => {
      setVariant(VARIANT_KEY.Default);
    };

    const mouseEnter = () => {
      setVariant(VARIANT_KEY.OnLink);
    };

    const mouseLeave = () => {
      setVariant(VARIANT_KEY.Default);
    };

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('mousedown', mouseDown);

    const targetElements = document.querySelectorAll(targetRefs);
    targetElements.forEach((el: Element) => {
      el.addEventListener('mouseenter', mouseEnter);
      el.addEventListener('mouseleave', mouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mousedown', mouseDown);

      targetElements.forEach((el: Element) => {
        el.removeEventListener('mouseenter', mouseEnter);
        el.removeEventListener('mouseleave', mouseLeave);
      });
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="bg-primary-t-4 pointer-events-none fixed top-0 left-0 z-8 -translate-1/2 transform-gpu rounded-full pointer-coarse:hidden"
      style={{
        width: 32,
        height: 32,
        transform: 'translate(-50%, -50%)',
      }}
      variants={variants}
      animate={variant}
    />
  );
}
