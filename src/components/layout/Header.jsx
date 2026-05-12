"use client";

import Link from "next/link";

export default function Header() {
  const categories = [
    {
      name: "Sports de combat",
      items: ["MMA", "Boxe anglaise", "Muay Thai"],
    },
    {
      name: "Fitness",
      items: ["Running", "Cardio", "Crossfit"],
    },
    {
      name: "Équipement",
      items: ["Gants", "Chaussures", "Sacs"],
    },
    {
      name: "Compléments",
      items: ["Protéines", "Vitamines", "Minéraux"],
    },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border-dark bg-background-dark/95 px-4 py-3 backdrop-blur-md md:px-10">

      <div className="flex items-center gap-8">
        <Link href="/" className="group flex items-center gap-3 text-white">
          <span className="material-symbols-outlined text-4xl text-primary transition-transform group-hover:scale-110">sports_mma</span>
          <span className="hidden text-xl font-black uppercase tracking-tighter md:block">TkPunchMag</span>
        </Link>

        <nav className="hidden items-center gap-8 border-l border-border-dark pl-8 lg:flex">
          <Link href="/shop" className="text-sm font-bold uppercase text-white hover:text-primary">Shop</Link>

          <div className="relative group">
            <button className="text-sm font-bold uppercase text-white hover:text-primary">
              Categories
            </button>
            <div className="absolute left-0 top-full z-50 w-[500px] pt-2 opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible">
              <div className="rounded-xl border border-border-dark bg-card-dark p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-6">
                  {categories.map((cat) => (
                    <div key={cat.name}>
                      <p className="mb-2 text-sm font-bold text-white">
                        {cat.name}
                      </p>
                      <ul className="space-y-2">
                        {cat.items.map((item) => (
                          <li key={item}>
                            <Link
                              href={`/category/${item.toLowerCase()}`}
                              className="text-sm text-text-muted hover:text-primary"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <Link href="/social" className="text-sm font-bold uppercase text-white hover:text-primary">Social</Link>
        </nav>
      </div>

      <div className="flex items-center gap-3">

        <label className="group hidden h-10 max-w-64 min-w-40 flex-col md:flex">
          <div className="flex h-full w-full items-stretch rounded-lg border border-transparent transition-colors group-focus-within:border-primary/50">
            <div className="flex items-center justify-center rounded-l-lg bg-card-dark pl-4 text-text-muted">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="flex-1 rounded-r-lg bg-card-dark px-4 pl-2 text-sm text-white placeholder:text-text-muted/50 focus:ring-0"
              placeholder="Search..."
              type="search"
            />
          </div>
        </label>

        <Link href="/login" className="flex size-10 items-center justify-center rounded-lg bg-card-dark text-white hover:bg-primary">
          <span className="material-symbols-outlined">person</span>
        </Link>

        <Link href="/cart" className="flex size-10 items-center justify-center rounded-lg bg-card-dark text-white hover:bg-primary">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>

      </div>
    </header>
  );
}