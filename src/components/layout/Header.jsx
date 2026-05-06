import Link from "next/link";
import Button from "../ui/ActionButton";

export default function Header() {
  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/feed", label: "Feed" },
    { href: "#", label: "Athletes" },
    { href: "#", label: "Our Story" },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-border-dark bg-background-dark/95 px-4 py-3 backdrop-blur-md md:px-10">
      <div className="flex items-center gap-8">
        <Link href="/" className="group flex items-center gap-3 text-white">
          <span className="material-symbols-outlined text-4xl text-primary transition-transform group-hover:scale-110">
            sports_mma
          </span>
          <span className="hidden text-xl font-black uppercase tracking-tighter md:block">
            TKPunchMag
          </span>
        </Link>

        <nav className="hidden items-center gap-8 border-l border-border-dark pl-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <label className="group hidden h-10 max-w-64 min-w-40 flex-col md:flex">
          <div className="flex h-full w-full items-stretch rounded-lg border border-transparent transition-colors group-focus-within:border-primary/50">
            <div className="flex items-center justify-center rounded-l-lg bg-card-dark pl-4 text-text-muted">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="min-w-0 flex-1 rounded-r-lg border-none bg-card-dark px-4 pl-2 text-sm text-white placeholder:text-text-muted/50 focus:ring-0"
              placeholder="Search supplements..."
              type="search"
            />
          </div>
        </label>

        <Link
          href="/login"
          className="flex size-10 items-center justify-center rounded-lg bg-card-dark text-white hover:bg-primary"
        >
          <span className="material-symbols-outlined">person</span>
        </Link>

        <Link
          href="/shop"
          className="flex size-10 items-center justify-center rounded-lg bg-card-dark text-white hover:bg-primary"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>

        <button className="flex size-10 items-center justify-center rounded-lg bg-card-dark text-white hover:bg-border-dark lg:hidden">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}