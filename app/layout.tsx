import {montserrat} from './ui/fonts'
import '@/app/ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {children}
        <footer className='py-10 flex justify-center item-center'>
          Hecho con 💙 
           por Javipaur
        </footer>
      </body>
    </html>
  );
}
