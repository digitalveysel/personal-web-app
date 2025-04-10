'use client';

import TypingAnimation from '../features/TypingAnimation';
import Image from 'next/image';

export default function SectionHello() {
  return (
    <section id="hello" className="flex h-[calc(100vh_-_--spacing(28))] items-end overflow-hidden">
      <div className="pointer-events-none fixed top-24 left-0 h-[calc(100vh_-_--spacing(60))] w-screen">
        <Image
          fill
          priority
          src="/images/veysel-demirel.webp"
          alt="Veysel Demirel"
          className="object-cover object-[40%_center] select-none"
          style={{
            clipPath: 'polygon(24% 0%, 100% 10%, 100% 88%, 0 98%)',
          }}
        />
        <Image
          fill
          priority
          aria-hidden
          src="/images/veysel-demirel.webp"
          alt="Veysel Demirel ghost"
          className="-translate-x-2 -translate-y-2 object-cover object-[40%_center] opacity-20 blur-sm select-none"
          style={{
            clipPath: 'polygon(24% 0%, 100% 10%, 100% 88%, 0 98%)',
          }}
        />
      </div>
      <div className="space-y-3">
        <h1 className="font-montserrat-alternates text-xl">
          hello, i'm <span className="text-primary font-semibold">veysel demirel</span>. as a
          front-end developer and ux/ui designer based in Türkiye.
        </h1>
        <TypingAnimation
          texts={[
            'I develop impressive web apps',
            'I design creative web sites',
            'I create useful design systems',
          ]}
          className="font-montserrat md:font-libre-barcode-128-text text-xl font-bold italic select-none md:text-6xl md:leading-[0.2] md:font-normal md:uppercase md:not-italic"
          firstClassName="text-foreground-default"
          secondClassName="text-primary"
          caretClassName="text-primary md:hidden"
        />
      </div>
    </section>
  );
}
