import { useParams, Link } from 'react-router-dom'

const copy = {
  'heat-pumps': {
    title: 'Heat pumps',
    intro: 'We supply and install efficient heat pumps tailored to your building and budget. Our designs prioritize low running costs, quiet operation and long life.',
    bullets: [
      'Air-to-water and ground-source systems',
      'Smart controls and remote monitoring',
      'Neat installation with attention to detail',
    ]
  },
  'ventilation': {
    title: 'Ventilation',
    intro: 'Healthy air, lower humidity and better comfort. We design balanced and demand-controlled ventilation for new builds and retrofits.',
    bullets: [
      'Heat recovery and low energy use',
      'Quiet, discreet installations',
      'Filter service and performance checks',
    ]
  },
  'cooling': {
    title: 'Cooling',
    intro: 'From comfort cooling to server rooms, we deliver reliable systems sized to your needs with clean installations and tidy cable/piping management.',
    bullets: [
      'Split, multi-split and VRF',
      'Commissioning and documentation',
      'Service agreements for uptime',
    ]
  },
  'service': {
    title: 'Service & maintenance',
    intro: 'Proactive care reduces downtime and keeps efficiency high. We service most brands and provide clear reports after each visit.',
    bullets: [
      'Planned maintenance and urgent call-outs',
      'Performance optimization',
      'Friendly technicians who explain clearly',
    ]
  }
}

export default function ServiceDetail(){
  const { slug } = useParams()
  const data = copy[slug]
  if(!data){
    return (
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p>Service not found. <Link to="/services" className="text-sky-700">Back to services</Link></p>
        </div>
      </section>
    )
  }
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link to="/services" className="text-sky-700">← All services</Link>
        <h1 className="text-3xl font-bold mt-2">{data.title}</h1>
        <p className="text-slate-600 mt-3 max-w-2xl">{data.intro}</p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {data.bullets.map((b,i)=> (
            <li key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-sky-600"/> {b}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
