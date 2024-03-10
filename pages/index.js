import Main from '../components/Main.jsx'
import About from '../components/About.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';
import Contact from '../components/Contact.jsx';

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Main />
      </ParallaxProvider>

      <About />
      <Contact />
    </div>
  );
}