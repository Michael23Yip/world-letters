export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-20">
        <header className="space-y-4 text-left">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">Dear Reader,</p>
          <h1 className="text-5xl font-semibold leading-tight text-slate-900">World Letters</h1>
          <p className="text-lg leading-relaxed text-slate-700">
            This is a place where people write to the world, and listen in return.
          </p>
        </header>

        <section className="mt-12 space-y-6 text-left text-base leading-relaxed text-slate-800">
          <p>
            I&apos;ve always wondered what we might say if we wrote to everyone at once. Here, each
            letter is an invitation—to share a moment, a thought, or a question—and to hear how the
            world answers back.
          </p>
          <p>
            Take your time. Write something sincere. Or read what others have offered and see where
            their words land. This space is quiet on purpose, made for pauses between sentences and
            the kind of listening that doesn&apos;t rush.
          </p>
        </section>

        <div className="mt-14 flex gap-4">
          <a
            className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:border-slate-300 hover:bg-white"
            href="#"
          >
            Write a letter
          </a>
          <a
            className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:border-slate-300 hover:bg-white"
            href="#"
          >
            Read letters
          </a>
        </div>
      </div>
    </main>
  );
}
