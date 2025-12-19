export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-20">
        <div className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-8 py-12 shadow-sm">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Dear reader,</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-slate-900">World Letters</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            This is a place where people write to the world, and listen in return. I keep the pages open
            for voices that travel farther than any of us can go alone.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Settle in, read slowly, and when the words feel right, add your own to the pile.
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex justify-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100"
              href="#"
            >
              Write a letter
            </a>
            <a
              className="inline-flex justify-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100"
              href="#"
            >
              Read letters
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
