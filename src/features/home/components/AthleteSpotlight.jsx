import Link from "next/link";

const ATHLETE_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCndpivS3ctAGC2BMD6OUK9ZuwJbifYbFSb_CMzzBgJOx8vz1pP3f1rTVA8gKFY8zLrpUgjIVnsLIykrS6G02xWmcqeCksuDSLpj23uJo5NKvqWreg4sCoPpagmGHZ3nYYjUwi_kxjL67fzpWTKyrGZcjscAyQGSYMmFheTSA6-QAx97UpLp2ZTjqWW2F6AsshMVZfaMy6TnOMKfESz0lFVzNU2gR-NQWhkQFtwwgKEcXlo97e7ZQUir-zmD2iNxc1DZjc0LPjA7VX-";

export default function AthleteSpotlight() {
  return (
    <section className="grid min-h-[500px] grid-cols-1 md:grid-cols-2">
      <div
        className="relative h-[400px] w-full bg-cover bg-center md:h-auto"
        style={{ backgroundImage: `url(${ATHLETE_BG})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent md:bg-gradient-to-r" />
      </div>

      <div className="flex flex-col justify-center bg-background-dark p-10 md:p-16 lg:p-24">
        <span className="mb-4 flex items-center gap-2 font-bold uppercase tracking-widest text-primary">
          <span className="h-[2px] w-8 bg-primary" />
          Athlete Spotlight
        </span>

        <h2 className="mb-6 text-4xl font-black uppercase italic leading-none text-white md:text-5xl">
          &ldquo;The TKPunchMag stack is the only thing that gets me through 12
          rounds.&rdquo;
        </h2>

        <p className="mb-1 text-xl font-bold text-white">
          - Marcus &ldquo;The Anvil&rdquo; Thorne
        </p>
        <p className="mb-8 text-sm uppercase tracking-wide text-text-muted">
          TKPunchMag Champion
        </p>

        <Link
          href="/shop"
          className="group flex w-fit items-center gap-2 font-bold uppercase tracking-wide text-white transition-colors hover:text-primary"
        >
          Shop Marcus&apos;s Stack
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </Link>
      </div>
    </section>
  );
}