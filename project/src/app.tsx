import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/home/Hero'
import { Portfolio } from './components/portfolio/Portfolio'
import { Contact } from './components/contact/Contact'
import './index.css'

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}