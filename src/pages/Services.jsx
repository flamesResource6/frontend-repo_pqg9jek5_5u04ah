import { Link } from 'react-router-dom'

const services = [
  { slug:'heat-pumps', title:'Heat pumps', desc:'High‑efficiency air‑to‑water and ground‑source systems.' },
  { slug:'ventilation', title:'Ventilation', desc:'Balanced, demand‑controlled systems for healthy air.' },
  { slug:'cooling', title:'Cooling', desc:'Quiet comfort or precise, critical room cooling.' },
  { slug:'service', title:'Service & maintenance', desc:'Planned maintenance and fast on‑call support.' },
]

export default function Services(){
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-2">Services</h1>
        <p className="text-slate-600 mb-8 max-w-2xl">Advice, design, installation and lifetime service—delivered by a friendly local team.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s,i)=> (
            <article key={s.slug} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-11 h-11 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center text-lg mb-3">{['🔥','🌬️','❄️','🛠️'][i]}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-1 flex-1">{s.desc}</p>
              <Link to={`/services/${s.slug}`} className="mt-4 inline-flex text-sky-700 hover:text-sky-800">View details →</Link>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-sky-50 p-6 text-slate-800">
          <p className="font-medium">Not sure which system you need?</p>
          <p className="text-sm">Tell us about your building and comfort goals—we’ll recommend a clear, cost‑effective solution.</p>
          <Link to="/contact" className="inline-flex items-center mt-4 px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700">Get friendly advice</Link>
        </div>
      </div>
    </section>
  )
}
