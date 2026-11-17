import Header from './components/Header'
import Hero from './components/Hero'
import Places from './components/Places'
import Foods from './components/Foods'
import Course from './components/Course'
import Festivals from './components/Festivals'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Places />
        <Foods />
        <Course />
        <Festivals />
      </main>
      <Footer />
    </>
  )
}
