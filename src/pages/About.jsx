export default function About(){
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-4">About us</h1>
        <p className="text-slate-700">We are a small, dedicated team passionate about comfortable, efficient buildings. From the first site visit to the final handover, we communicate clearly and deliver tidy, reliable installations.</p>

        <div className="mt-10">
          <img src="/about-placeholder.jpg" alt="Team at work" className="w-full rounded-2xl border border-slate-200 shadow-sm" loading="lazy" />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-2">Our story</h2>
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
    </section>
  )
}
