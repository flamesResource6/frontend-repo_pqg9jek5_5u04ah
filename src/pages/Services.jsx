import { Link } from 'react-router-dom'

const services = [
  { slug:'heat-pumps', title:'Heat pumps', desc:'High-efficiency air-to-water and ground-source systems.' },
  { slug:'ventilation', title:'Ventilation', desc:'Demand-controlled systems for a healthier indoor climate.' },
  { slug:'cooling', title:'Cooling', desc:'Precision and comfort cooling for homes and businesses.' },
  { slug:'service', title:'Service & maintenance', desc:'Planned maintenance and fast on-call support.' },
]

export default function Services(){
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-6">Services</h1>
        <p className="text-slate-600 mb-8 max-w-2xl">We deliver end-to-end solutions: advice, design, installation and lifetime service. Choose a category to learn more.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s,i)=> (
            <article key={s.slug} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-semibold mb-3">{i+1}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-1 flex-1">{s.desc}</p>
              <Link to={`/services/${s.slug}`} className="mt-4 inline-flex text-sky-700 hover:text-sky-800">View details →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
