import type { Metadata } from 'next'

import Favicon from '@Assets/favicon.ico';
import { DesktopNavbar, MobileNavbar } from '@Components/Navbar';
import Footer from '@Components/Footer';

import '@Styles/layout.css';
import '@Styles/templates/text.css'

export const metadata: Metadata = {
  title: 'Phi Kappa Theta - Beta Delta',
  description: 'Beta Delta Chapter, Illinois',
  icons: [{ rel: 'icon', url: Favicon.src }]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className='content'>
                    <DesktopNavbar />
                    <MobileNavbar />
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
