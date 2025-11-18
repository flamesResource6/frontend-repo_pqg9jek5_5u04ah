import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Efficient energy solutions for modern buildings
              </h1>
              <p className="mt-4 text-slate-600 max-w-xl">
                We design, install and maintain heat pumps, ventilation and smart controls that keep your home or business comfortable while cutting energy costs.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Link to="/contact" className="inline-flex items-center px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-sm">Get a quote</Link>
                <Link to="/services" className="inline-flex items-center px-5 py-3 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700">Explore services</Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-slate-600">
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"/><span>Fast response</span></div>
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"/><span>Certified installers</span></div>
                <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"/><span>Warranty included</span></div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 shadow-md overflow-hidden">
                <img src="/hero-placeholder.jpg" alt="Modern energy system" className="w-full h-full object-cover" loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold mb-8">What we do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {title:'Heat pumps', text:'Energy-efficient heating solutions for homes and businesses.'},
              {title:'Ventilation', text:'Healthy indoor climate with demand-controlled systems.'},
              {title:'Cooling', text:'Reliable cooling solutions tailored to your needs.'},
              {title:'Service & maintenance', text:'Proactive care to keep everything running smoothly.'},
            ].map((s,i)=> (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-semibold mb-3">{i+1}</div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Why choose us</h2>
              <p className="text-slate-600">Our team blends craftsmanship with modern engineering. We advise honestly, install neatly, and stand by our work long after handover.</p>
              <ul className="mt-6 space-y-2 text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-sky-600"/><span>Transparent pricing and clear timelines</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-sky-600"/><span>Energy-optimized designs that reduce running costs</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-sky-600"/><span>Trusted by homeowners, builders and businesses</span></li>
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

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-semibold">Ready to cut your energy bill?</h2>
          <p className="text-slate-600 mt-2">Tell us about your project and get a quick, obligation-free estimate.</p>
          <Link to="/contact" className="inline-flex items-center mt-6 px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-sm">Contact us</Link>
        </div>
      </section>
    </div>
  )
}
