import '../styles/global.css'
import { ThemeProvider } from 'next-themes';
import { ManualProvider } from '../contexts/ManualContext';
import Contact from '../components/Contact.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
    subsets: ['latin'],
    weight: ["400"],
    variable: '--font-outfit',
});

function MyApp({ Component, pageProps }) {
    return (
        <main className={`${outfit.variable}`}>
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