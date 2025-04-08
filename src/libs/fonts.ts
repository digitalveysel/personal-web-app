import { Montserrat, Montserrat_Alternates, Libre_Barcode_128_Text } from 'next/font/google';

const montserrat = Montserrat({
  display: 'swap',
  variable: '--font-montserrat',
  style: ['normal', 'italic'],
  weight: '700',
  subsets: ['latin'],
});

const montserratAlternates = Montserrat_Alternates({
  display: 'swap',
  variable: '--font-montserrat-alternates',
  style: 'normal',
  weight: ['400', '600', '800'],
  subsets: ['latin'],
});

const libreBarcode128Text = Libre_Barcode_128_Text({
  display: 'swap',
  variable: '--font-libre-barcode-128-text',
  style: 'normal',
  weight: '400',
  subsets: ['latin'],
});

const fontVariables = `${montserrat.variable} ${montserratAlternates.variable} ${libreBarcode128Text.variable}`;

export default fontVariables;
