import MainHeader from '@/components/main-header/main-header';
import './globals.css';
import MainHeaderBackground from '@/components/main-header/main-header-background';

export const metadata = {
  title: 'Comidas de otro nivel',
  description: 'Comidas deliciosas, compartidas por una comunidad amante de la comida.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <MainHeader></MainHeader>
        {children}
      </body>
    </html>
  );
}