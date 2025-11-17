import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function submit(e) {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      subject: form.get('subject'),
      message: form.get('message'),
    }
    try {
      const res = await fetch(`${BACKEND}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Contact us</h2>
          <p className="mt-4 text-gray-600">Have questions or need a demo? Send us a message.</p>
        </div>
        <form onSubmit={submit} className="mt-10 grid gap-4 rounded-2xl border border-black/5 bg-white p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" />
            <input name="email" type="email" required placeholder="Email" className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" />
          </div>
          <input name="company" placeholder="Company (optional)" className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <input name="subject" required placeholder="Subject" className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <textarea name="message" required rows="5" placeholder="Message" className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <button disabled={status==='loading'} className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white shadow hover:shadow-md disabled:opacity-60">
            {status==='loading' ? 'Sending…' : 'Send message'}
          </button>
          {status==='success' && <p className="text-sm text-green-700">Thanks! We received your message.</p>}
          {status==='error' && <p className="text-sm text-red-700">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
