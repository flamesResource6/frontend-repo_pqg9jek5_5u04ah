export default function Contact(){
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact</h1>
          <p className="text-slate-600 mb-6">Reach out for advice or a no‑obligation quote. We usually reply the same day.</p>

          <form onSubmit={(e)=> e.preventDefault()} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Name" required />
              <input type="email" className="w-full rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Email" required />
            </div>
            <input className="w-full rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Phone" />
            <textarea rows="5" className="w-full rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="How can we help?" required />
            <button className="inline-flex items-center px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-sm">Send message</button>
            <p className="text-xs text-slate-500">By sending this form you agree that we may contact you regarding your enquiry.</p>
          </form>

          <div className="mt-8 text-sm text-slate-700 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><p><strong>Phone:</strong> +45 12 34 56 78</p><p><strong>Email:</strong> hello@horsens-energi.dk</p></div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><p><strong>Address:</strong> Examplevej 1</p><p>8700 Horsens</p></div>
          </div>
        </div>

        <div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe 
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2246.9939407377603!2d10.000!3d55.860!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdk!4v1680000000000"
              width="100%"
              height="100%"
              style={{border:0}}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
