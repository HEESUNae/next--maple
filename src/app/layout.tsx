import type { Metadata } from 'next';
import './globals.css';
import { ModalConfirm } from '@/shared/ui';
import { Header, Footer } from '@/widgets';

export const metadata: Metadata = {
  title: 'Maple Story',
  description: '메이플스토리 캐릭터 정보를 확인할 수 있습니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <ModalConfirm />
        <Footer />
      </body>
    </html>
  );
}
