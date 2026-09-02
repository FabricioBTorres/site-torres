import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Torres Web & System | Sites, Sistemas e Soluções Digitais', description: 'Desenvolvimento de sites, sistemas, CRM, PDV, portais, dashboards, integrações e soluções digitais sob medida para empresas.', openGraph: { title: 'Torres Web & System', description: 'Tecnologia que move negócios.', type: 'website' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
