import { Montserrat, Montserrat_Alternates, Libre_Barcode_128_Text } from 'next/font/google';

export const montserrat = Montserrat({
  display: 'swap',
  variable: '--font-montserrat',
  style: ['normal', 'italic'],
  weight: '700',
  subsets: ['latin'],
});

export const montserratAlternates = Montserrat_Alternates({
  display: 'swap',
  variable: '--font-montserrat-alternates',
  style: 'normal',
  weight: ['400', '600', '800'],
  subsets: ['latin'],
});

export const libreBarcode128Text = Libre_Barcode_128_Text({
  display: 'swap',
  variable: '--font-montserrat-alternates',
  style: 'normal',
  weight: '400',
  subsets: ['latin'],
});

export const fontVariables = `${montserrat.variable} ${montserratAlternates.variable} ${libreBarcode128Text.variable}`;
