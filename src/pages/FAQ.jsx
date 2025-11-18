export default function FAQ(){
  const items = [
    {q:'How quickly can you visit?', a:'Most site visits can be scheduled within a few days. For urgent issues we do our best to come the same or next day.'},
    {q:'Which brands do you work with?', a:'We are brand-agnostic and recommend systems that fit your needs and budget. We service most major manufacturers.'},
    {q:'Do you handle grants and paperwork?', a:'Yes, we guide you through available subsidies and provide the documentation needed.'},
    {q:'How do I get a price?', a:'Send us a few details about your property and we will provide a clear, fixed-price quote whenever possible.'},
  ]
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-6">FAQ</h1>
        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white overflow-hidden">
          {items.map((item,i)=> (
            <details key={i} className="group p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-medium text-slate-900">{item.q}</span>
                <span className="text-sky-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
