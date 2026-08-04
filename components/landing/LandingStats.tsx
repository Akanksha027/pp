import { mainFont } from "@/lib/fonts";

const STATS = [
  { label: "Helpled Businesses Launch", value: "28+" },
  { label: "Mobile Apps Shipped", value: "10+" },
  { label: "Monthly Revenue Generated for Clients", value: "5L+" },
] as const;

export function LandingStats() {
  return (
    <section className={`border-t border-white/10 bg-transparent text-white ${mainFont.className}`}>
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-10 sm:py-16 md:px-14 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 md:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/45 sm:text-[11px] sm:tracking-[0.18em]">
                {stat.label}
              </p>
              <div className="mt-3 border-t border-white/15 sm:mt-4" />
              <p className="mt-5 text-[clamp(3.25rem,10vw,5.5rem)] font-bold leading-none tracking-[-0.04em] text-white sm:mt-6">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
