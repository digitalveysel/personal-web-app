'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';

export default function LoaderColumns() {
  const columns = Array.from({ length: 5 });

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 flex"
      initial={{ zIndex: '9' }}
      animate={{ zIndex: '-1' }}
      transition={{ duration: 1, delay: 1, ease: 'linear' }}
      aria-hidden
    >
      {columns.map((_, i) => (
        <div
          key={i}
          className={clsx('relative basis-full align-top', {
            'hidden md:block': i === 2,
            'hidden lg:block': i === 3,
            'hidden xl:block': i === 4,
          })}
        >
          {i !== 0 && (
            <motion.span
              className="bg-background-transparent absolute top-0 left-0 w-px"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
                delay: i * 0.2,
              }}
            />
          )}
          <motion.span
            className={`bg-background-medium absolute ${i % 2 === 0 ? 'top-0' : 'bottom-0'} left-0 size-full`}
            initial={{ height: '100%' }}
            animate={{ height: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: i * 0.2,
            }}
          />
        </div>
      ))}
    </motion.div>
  );
}
