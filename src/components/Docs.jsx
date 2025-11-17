export default function Docs() {
  return (
    <section id="docs" className="py-24 sm:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Documentation</h2>
          <p className="mt-4 text-gray-600">Install the extension, connect your providers, and start optimizing. Here’s a quick overview.</p>
        </div>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="font-medium text-gray-900">1. Install</h3>
            <p className="mt-2 text-sm text-gray-600">Add the extension to your Chromium browser. Pin it to the toolbar for quick access.</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="font-medium text-gray-900">2. Connect providers</h3>
            <p className="mt-2 text-sm text-gray-600">Bring your own API keys for OpenAI, Anthropic or others. Keys are stored locally.</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="font-medium text-gray-900">3. Optimize</h3>
            <p className="mt-2 text-sm text-gray-600">Highlight any prompt, open the panel and apply suggestions. Track scores over time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
