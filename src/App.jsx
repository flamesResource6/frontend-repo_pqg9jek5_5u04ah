import { NavLink, Outlet, Link } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center font-bold shadow-sm">HE</div>
            <span className="sr-only">Home</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            <NavLink to="/" end className={({isActive}) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>Home</NavLink>
            <NavLink to="/services" className={({isActive}) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>Services</NavLink>
            <NavLink to="/about" className={({isActive}) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>About</NavLink>
            <NavLink to="/faq" className={({isActive}) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>FAQ</NavLink>
            <Link to="/contact" className="ml-2 inline-flex items-center px-3 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-sm">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-slate-600">
          <div>
            <div className="mb-2 font-semibold text-slate-900">Horsens Energiteknik</div>
            <p className="text-slate-600">Modern energy solutions with a focus on efficiency and reliability.</p>
          </div>
          <div>
            <div className="mb-2 font-semibold text-slate-900">Quick links</div>
            <ul className="space-y-1">
              <li><Link className="hover:text-slate-900" to="/services">Services</Link></li>
              <li><Link className="hover:text-slate-900" to="/about">About</Link></li>
              <li><Link className="hover:text-slate-900" to="/faq">FAQ</Link></li>
              <li><Link className="hover:text-slate-900" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-2 font-semibold text-slate-900">Contact</div>
            <p>Phone: +45 12 34 56 78<br/>Email: hello@horsens-energi.dk<br/>Address: Examplevej 1, 8700 Horsens</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Horsens Energiteknik — All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
