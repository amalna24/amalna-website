import '../styles/global.css'
import { ThemeProvider } from 'next-themes';
import { ManualProvider } from '../contexts/ManualContext';
import Contact from '../components/Contact.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider enableSystem={true} attribute='class'>
                <ParallaxProvider>
                    <ManualProvider>
                        <Component {...pageProps} />
                    </ManualProvider>
                </ParallaxProvider>
            </ThemeProvider>
        </>
    )
}

export default MyApp;