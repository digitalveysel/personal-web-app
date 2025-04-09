'use client';

import TypingAnimation from '../features/TypingAnimation';

export default function SectionHello() {
  return (
    <section id="hello" className="flex size-full items-end">
      <div id="content"></div>
      {/* <TypeAnimation
        sequence={[
          'I develop impressive web apps',
          2000,
          'I design creative web sites',
          2000,
          'I create useful design systems',
          2000,
        ]}
        className="font-montserrat text-primary text-xl font-bold italic"
        wrapper="h2"
        speed={1}
        repeat={Infinity}
        preRenderFirstString={true}
      /> */}

      <TypingAnimation
        texts={[
          'I develop impressive web apps',
          'I design creative web sites',
          'I create useful design systems',
        ]}
        tag="h2"
        className="font-montserrat md:font-libre-barcode-128-text text-xl font-bold italic select-none md:text-6xl md:leading-[0.2] md:font-normal md:uppercase md:not-italic"
        firstClassName="text-foreground-default"
        secondClassName="text-primary"
        caretClassName="text-primary md:hidden"
      />
    </section>
  );
}
