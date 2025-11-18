import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-slate-600 mt-2">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="inline-flex items-center mt-6 px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-sm">Back to home</Link>
      </div>
    </section>
  )
}
