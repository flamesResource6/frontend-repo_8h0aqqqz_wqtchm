export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-600">Start free. Upgrade when you need advanced features and collaboration.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">Free</h3>
            <div className="mt-4 text-4xl font-semibold">$0<span className="text-base font-normal text-gray-500">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>Prompt scoring</li>
              <li>Basic rewrite suggestions</li>
              <li>Up to 100 prompts/mo</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50">Get started</a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border-2 border-purple-600 bg-white p-6 shadow-md relative">
            <span className="absolute -top-3 right-4 rounded-full bg-purple-600 px-3 py-1 text-xs text-white">Popular</span>
            <h3 className="text-lg font-medium text-gray-900">Pro</h3>
            <div className="mt-4 text-4xl font-semibold">$19<span className="text-base font-normal text-gray-500">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>All Free features</li>
              <li>Model-aware tuning</li>
              <li>Token & cost analysis</li>
              <li>Unlimited prompts</li>
              <li>Email support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white shadow hover:shadow-md">Upgrade</a>
          </div>

          {/* Team */}
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">Team</h3>
            <div className="mt-4 text-4xl font-semibold">$49<span className="text-base font-normal text-gray-500">/seat/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>All Pro features</li>
              <li>Shared libraries</li>
              <li>Usage analytics</li>
              <li>SAML/SSO</li>
              <li>Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
