import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-28 sm:py-40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
          Ship better prompts for AI models
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-gray-600">
          A browser extension that analyzes, scores and optimizes your prompts across OpenAI, Claude and more. Get higher quality outputs with fewer tokens.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#pricing" className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white shadow hover:shadow-lg transition-shadow">Try it free</a>
          <a href="#docs" className="inline-flex items-center rounded-md px-6 py-3 border border-gray-300 text-gray-800 hover:bg-gray-50">View docs</a>
        </div>
        <div className="mt-6 text-xs text-gray-500">No signup required • Works on Chrome, Edge & Brave</div>
      </div>
    </section>
  )
}
