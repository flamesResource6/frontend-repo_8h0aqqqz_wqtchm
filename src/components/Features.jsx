import { Sparkles, Gauge, SlidersHorizontal, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Prompt rewrite & scoring',
    desc: 'AI refines your prompt, suggests structure and scores quality before you run it.'
  },
  {
    icon: Gauge,
    title: 'Token & cost insights',
    desc: 'See estimated tokens and cost per run, with tips to compress without losing quality.'
  },
  {
    icon: SlidersHorizontal,
    title: 'Model-aware tuning',
    desc: 'Profiles for GPT-4o, Claude, Llama and more so your prompts match each model’s strengths.'
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-first',
    desc: 'Your prompts stay local by default. Nothing is stored without your consent.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-50/40 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Make every prompt count</h2>
          <p className="mt-4 text-gray-600">Designed for product teams, researchers and power users who need reliable, repeatable results.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <f.icon className="h-6 w-6 text-purple-600" />
              <h3 className="mt-4 font-medium text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
