import '../styles/global.css'
import { ThemeProvider } from 'next-themes';
import { ManualProvider } from '../contexts/ManualContext';
import Contact from '../components/Contact.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Outfit, Playfair_Display, Truculenta } from 'next/font/google';

const outfit = Outfit({
    subsets: ['latin'],
    weight: ["400"],
    variable: '--font-outfit',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ["400"],
    variable: '--font-playfair',
});

const truculenta = Truculenta({
    subsets: ['latin'],
    weight: ["400"],
    variable: '--font-truculenta',
});

function MyApp({ Component, pageProps }) {
    return (
        <main className={`${outfit.variable} ${playfair.variable} ${truculenta.variable}`}>
            <ThemeProvider enableSystem={true} attribute='class'>
                <ParallaxProvider>
                    <ManualProvider>
                        <Component {...pageProps} />
                    </ManualProvider>
                </ParallaxProvider>
            </ThemeProvider>
        </main>
    )
}

export default MyApp;