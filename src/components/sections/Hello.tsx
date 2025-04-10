'use client';

import TypingAnimation from '../features/TypingAnimation';
import Image from 'next/image';

export default function SectionHello() {
  return (
    <section
      id="hello"
      className="relative flex h-[calc(100vh_-_--spacing(22))] flex-col items-start justify-end"
    >
      <div className="relative size-full">
        <Image
          fill
          priority
          src="/images/veysel-demirel.webp"
          alt="Veysel Demirel"
          className="object-cover object-[40%_center]"
          style={{
            clipPath: 'polygon(24% 0%, 100% 10%, 100% 88%, 0 98%)',
          }}
        />
        <Image
          fill
          aria-hidden
          src="/images/veysel-demirel.webp"
          alt="Veysel Demirel ghost"
          className="-translate-x-2 -translate-y-2 object-cover object-[40%_center] opacity-20 blur-sm"
          style={{
            clipPath: 'polygon(24% 0%, 100% 10%, 100% 88%, 0 98%)',
          }}
        />
      </div>
      <div className="space-y-3 px-6 pb-6">
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
