import About from './components/About.jsx'
import FindUs from './components/FindUs.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Highlights from './components/Highlights.jsx'
import Menu from './components/Menu.jsx'
import MobileActionBar from './components/MobileActionBar.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Highlights />
        <Menu />
        <Gallery />
        <About />
        <FindUs />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}
