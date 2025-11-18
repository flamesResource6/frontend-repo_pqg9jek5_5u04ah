import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Friendly local team • Same‑week installs
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Warm in winter. Cool in summer. Kind on the planet.
              </h1>
              <p className="mt-4 text-slate-600 max-w-xl">
                We design, install and maintain heat pumps, ventilation and cooling that make your home or business feel great—without wasting energy.
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">⭐⭐⭐⭐⭐<span className="ml-1">4.9/5</span></div>
                <div>•</div>
                <div>200+ happy customers</div>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <Link to="/contact" className="inline-flex items-center px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-sm">Get a quote</Link>
                <Link to="/services" className="inline-flex items-center px-5 py-3 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700">Explore services</Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 shadow-md overflow-hidden">
                <img src="/hero-placeholder.svg" alt="Technician installing a heat pump" className="w-full h-full object-cover" loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
            <span className="px-3 py-1 rounded-full border border-slate-200 bg-white">Authorized installers</span>
            <span className="px-3 py-1 rounded-full border border-slate-200 bg-white">10+ years experience</span>
            <span className="px-3 py-1 rounded-full border border-slate-200 bg-white">Clear pricing</span>
            <span className="px-3 py-1 rounded-full border border-slate-200 bg-white">Local support</span>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold mb-2">What we do</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">From advice to installation and lifetime service—we make energy upgrades simple, neat and reliable.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {title:'Heat pumps', text:'Energy‑efficient heating for every season.', icon:'🔥'},
              {title:'Ventilation', text:'Fresh, healthy air with heat recovery.', icon:'🌬️'},
              {title:'Cooling', text:'Quiet comfort or critical room cooling.', icon:'❄️'},
              {title:'Service & maintenance', text:'Keep systems running like new.', icon:'🛠️'},
            ].map((s,i)=> (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center text-lg mb-3">{s.icon}</div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-3">How we work</h2>
              <p className="text-slate-600">Friendly experts, tidy installs, no surprises. Here’s what to expect when you contact us.</p>
              <ul className="mt-6 space-y-3">
                {[
                  {t:'1. Quick call', d:'Share your goals and a few details about your building.'},
                  {t:'2. Clear proposal', d:'We visit if needed, then send a fixed, transparent quote.'},
                  {t:'3. Neat installation', d:'Polite technicians, minimal disruption, full walkthrough.'},
                ].map((step,i)=> (
                  <li key={i} className="p-4 rounded-xl border border-slate-200 bg-white flex gap-3">
                    <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-600 text-white text-xs">{i+1}</span>
                    <div>
                      <p className="font-medium">{step.t}</p>
                      <p className="text-sm text-slate-600">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["cert-1.svg","cert-2.svg","cert-3.svg","cert-4.svg"].map((c,i)=> (
                <div key={i} className="rounded-xl border border-slate-200 bg-white h-28 flex items-center justify-center text-slate-500">{c.replace('.svg','').toUpperCase()}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold mb-8">What customers say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {name:'Mette, Horsens', quote:'Super friendly team and a very neat installation. Our home has never felt better.'},
              {name:'Jonas, Brabrand', quote:'Clear advice and no pushy sales. The heat pump is quiet and our bills dropped.'},
              {name:'Sofie, Vejle', quote:'They arrived on time, cleaned up, and explained everything in plain Danish.'},
            ].map((t,i)=> (
              <figure key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-semibold">{t.name[0]}</div>
                  <figcaption className="text-sm text-slate-700">{t.name}</figcaption>
                </div>
                <blockquote className="mt-3 text-slate-700">“{t.quote}”</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-semibold">Ready to cut your energy bill?</h2>
          <p className="text-slate-600 mt-2">Tell us about your project and get a quick, obligation‑free estimate.</p>
          <Link to="/contact" className="inline-flex items-center mt-6 px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-sm">Contact us</Link>
          <p className="text-xs text-slate-500 mt-3">No spam. No pressure. Just helpful advice.</p>
        </div>
      </section>
    </div>
  )
}
