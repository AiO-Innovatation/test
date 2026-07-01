export default function Home() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern marketing sites, company websites, and custom web apps built to convert visitors into customers.",
    },
    {
      title: "Software Development",
      description:
        "Practical business software, internal tools, and lightweight systems tailored to how your team works.",
    },
    {
      title: "Courses & Training",
      description:
        "Clear, hands-on training for teams and individuals who want to learn web, software, and digital skills.",
    },
    {
      title: "Online Business Setup",
      description:
        "Launch-ready support for domains, websites, email, lead capture, and the tools needed to get online fast.",
    },
  ];

  const process = [
    "Discovery and planning around your goals, audience, and budget.",
    "Design and build with a clean, fast, mobile-first experience.",
    "Launch on Vercel with support for updates, growth, and maintenance.",
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_35%),linear-gradient(180deg,_#07111f_0%,_#0b1727_45%,_#f7f5ef_45%,_#f7f5ef_100%)] text-slate-900">
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/8 px-5 py-4 text-white shadow-[0_18px_60px_rgba(2,6,23,0.2)] backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-teal-200/80">AiO Innovatation Ltd</p>
            <p className="mt-1 text-sm text-slate-200">Web development, software, courses, and online business setup</p>
          </div>
          <a
            href="mailto:hello@aioinnovatation.com"
            className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
          >
            Start a project
          </a>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-3xl text-white">
            <span className="inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100">
              Modern digital services for ambitious businesses
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Build a stronger online presence with a team that keeps things simple.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              AiO Innovatation Ltd helps businesses launch polished websites, useful software, practical training, and complete online setups that are ready to grow.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@aioinnovatation.com"
                className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-teal-300"
              >
                Talk to us
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                View services
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Fast delivery", "Launch with a clear plan and an efficient build process."],
                ["Clean design", "Modern layouts that work well on desktop and mobile."],
                ["Vercel ready", "Built for easy deployment, scaling, and updates."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <p className="text-base font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 text-white shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-teal-400/20 via-cyan-300/10 to-transparent p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200">What we offer</p>
              <div className="mt-6 space-y-4">
                {services.map((service) => (
                  <div key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-lg font-semibold">{service.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-12 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">How we work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              A simple process that moves from idea to launch without confusion.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We focus on clarity, useful design, and the smallest set of steps needed to get your business online and working.
            </p>

            <div className="mt-8 space-y-4">
              {process.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    0{index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Service</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10 lg:px-12 lg:pb-28">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-[0_24px_80px_rgba(2,6,23,0.3)] sm:px-10 sm:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Ready to begin</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                If you need a website, software support, or a full online setup, we can help you get started.
              </h2>
            </div>
            <a
              href="mailto:hello@aioinnovatation.com"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Email us today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
