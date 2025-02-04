import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from './components/Navigation';
import { WhatsappButton } from './components/WhatsappButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'WRS - Arquitectura y Servicios',
  description: 'Estudio de arquitectura especializado en diseño innovador y construcción sostenible. Creamos espacios funcionales y estéticamente impactantes para residencias, oficinas y proyectos comerciales.',
  keywords: 'arquitectura, estudio de arquitectura, diseño arquitectónico, arquitectos, construcción, diseño de interiores, planos arquitectónicos, proyectos arquitectónicos, arquitectura moderna, arquitectura sostenible, diseño de casas, arquitectura residencial, arquitectura comercial, remodelaciones, urbanismo',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
