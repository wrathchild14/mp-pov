export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
      <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
        Photographer portfolio
      </p>
      <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
        Stories told through light and honest moments.
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
        Replace this starter content with the final design. The private client
        portal is already routed through the same deployment.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          className="rounded-full bg-neutral-950 px-6 py-3 text-white transition hover:bg-neutral-700"
          href="/nextcloud/"
        >
          Open client portal
        </a>
        <a
          className="rounded-full border border-neutral-300 px-6 py-3 transition hover:bg-neutral-100"
          href="mailto:hello@example.com"
        >
          Get in touch
        </a>
      </div>
    </main>
  );
}
