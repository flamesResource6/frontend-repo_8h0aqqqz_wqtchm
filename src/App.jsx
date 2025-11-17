import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Docs from './components/Docs'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Docs />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10 text-center text-sm text-gray-600">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} PromptOpt. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#docs" className="hover:text-gray-900">Docs</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
