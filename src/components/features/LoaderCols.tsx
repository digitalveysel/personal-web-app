'use client';

import { motion } from 'motion/react';

export default function LoaderColumns() {
  const columns = Array.from({ length: 5 });

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 h-screen w-screen"
      initial={{ zIndex: '9' }}
      animate={{ zIndex: '-1' }}
      transition={{ duration: 1, delay: 2, ease: 'linear' }}
      aria-hidden="true"
    >
      {columns.map((_, i) => (
        <div key={i} className="relative inline-block h-screen w-1/5 align-top">
          {i !== 0 && (
            <motion.span
              className="bg-background-transparent absolute top-0 left-0 w-px"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: i % 2 === 0 ? 0.8 : 0.4,
              }}
            />
          )}
          <motion.span
            className="bg-background-default absolute top-0 left-0 h-full w-full"
            initial={{ height: '100%' }}
            animate={{ height: 0 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: i % 2 === 0 ? 0.4 : 0.8,
            }}
          />
        </div>
      ))}
    </motion.div>
  );
}
