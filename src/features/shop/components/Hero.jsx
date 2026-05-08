export default function Hero() {
    return (
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center px-6">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }} />

            <div className="relative z-10 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-black uppercase text-white">
                    Forged for <span className="text-primary">The Fight</span>
                </h1>

                <p className="text-gray-300 mt-4">
                    Premium combat gear built for performance.
                </p>

                <div className="mt-6 flex gap-4 justify-center">
                    <button className="bg-primary px-6 py-3 font-bold uppercase">
                        Shop All Gear
                    </button>
                    <button className="border px-6 py-3 font-bold uppercase">
                        Pro Series
                    </button>
                </div>
            </div>
        </section>
    );
}