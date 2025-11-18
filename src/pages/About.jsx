export default function About(){
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">Local, friendly and tidy since 2014</div>
          <h1 className="text-3xl font-bold mt-3">About us</h1>
          <p className="text-slate-700 mt-3">We’re a small, dedicated team who care about comfortable, efficient buildings—and about being nice to work with. From the first call to the final handover, we keep things clear, tidy and respectful of your time and home.</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="text-slate-500">Projects completed</dt>
              <dd className="text-xl font-semibold">200+</dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="text-slate-500">Average rating</dt>
              <dd className="text-xl font-semibold">4.9/5</dd>
            </div>
          </dl>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">Our values</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-sky-600"></span> Honest advice without pushy sales</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-sky-600"></span> Neat, respectful installations</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-sky-600"></span> Clear communication and punctuality</li>
            </ul>
          </div>
        </div>

        <div>
          <img src="/about-placeholder.svg" alt="Our friendly team at work" className="w-full rounded-2xl border border-slate-200 shadow-sm" loading="lazy" />

          <div className="mt-6 p-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 shadow-sm">
            We’re local to the Horsens area. If something isn’t right, we come back and make it right—simple as that.
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Our story</h3>
            <ol className="relative border-l border-slate-200 ml-3 pl-6 space-y-6">
              <li>
                <span className="absolute -left-1.5 mt-1 w-3 h-3 rounded-full bg-sky-600"></span>
                <p className="font-medium">Founded</p>
                <p className="text-slate-600 text-sm">We started with a simple mission: make energy upgrades easy and honest.</p>
              </li>
              <li>
                <span className="absolute -left-1.5 mt-1 w-3 h-3 rounded-full bg-sky-600"></span>
                <p className="font-medium">Growing with purpose</p>
                <p className="text-slate-600 text-sm">Word of mouth grew as we focused on quality, neatness and clear advice.</p>
              </li>
              <li>
                <span className="absolute -left-1.5 mt-1 w-3 h-3 rounded-full bg-sky-600"></span>
                <p className="font-medium">Today</p>
                <p className="text-slate-600 text-sm">We help homeowners and businesses across the region improve comfort and cut costs.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
