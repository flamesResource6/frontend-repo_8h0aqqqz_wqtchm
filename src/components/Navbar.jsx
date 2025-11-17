import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#docs', label: 'Documentation' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold text-lg tracking-tight">PromptOpt</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#pricing" className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white shadow hover:shadow-md transition-shadow">Get Started</a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-4 grid gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block text-gray-700" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#pricing" className="inline-flex justify-center items-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white" onClick={() => setOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
