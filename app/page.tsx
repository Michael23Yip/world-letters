export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-xl border border-slate-200 bg-white/90 p-12 shadow-md">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Dear Reader,</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">World Letters</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            A place where individuals speak to the world.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="inline-flex justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900">
              Write a letter
            </button>
            <button className="inline-flex justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200">
              Browse letters
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
