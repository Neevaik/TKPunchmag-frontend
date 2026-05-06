const FEATURES = [
  {
    icon: "science",
    title: "Lab Tested",
    text: "Every batch is rigorously tested for purity and banned substances. Certified safe for competition.",
  },
  {
    icon: "block",
    title: "Zero Fillers",
    text: "No amino spiking, no proprietary blends, no junk. Just pure, transparent performance fuel.",
  },
  {
    icon: "trophy",
    title: "Pro Approved",
    text: "Trusted by top contenders worldwide. The official nutrition partner of champions.",
  },
];

export default function WhyWeFight() {
  return (
    <section className="bg-background-dark px-4 py-16 md:px-10 lg:px-40">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-white md:text-5xl">
            Why We Fight
          </h2>
          <div className="mt-2 h-1 w-24 rounded-full bg-primary" />
        </div>
        <p className="max-w-md text-left text-base text-text-muted md:text-right">
          Formulated for champions, tested in the ring. We don&apos;t cut
          corners because neither do you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="group flex flex-col gap-4 rounded-xl border border-border-dark bg-card-dark p-6 transition-colors duration-300 hover:border-primary/50"
          >
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
              <span className="material-symbols-outlined text-3xl">{f.icon}</span>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold uppercase tracking-wide text-white">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}