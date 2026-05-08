export default function Testimonials() {
    const reviews = [
        {
            name: "Marcus 'The Tank' Reed",
            role: "Pro Fighter",
            text: "Gear holds up better than anything I've used.",
        },
        {
            name: "Sarah Chen",
            role: "Muay Thai Champ",
            text: "Heavy bags are rock solid.",
        },
        {
            name: "Viktor Volkov",
            role: "Coach",
            text: "Finally wraps that last.",
        },
    ];

    return (
        <section className="py-20 text-center bg-white/5">
            <h2 className="text-4xl font-black uppercase mb-12">
                Tested in the Trenches
            </h2>

            <div className="grid md:grid-cols-3 gap-10 px-6">
                {reviews.map((r) => (
                    <div key={r.name}>
                        <p className="italic text-gray-300 mb-4">"{r.text}"</p>
                        <p className="font-bold uppercase">{r.name}</p>
                        <p className="text-primary text-xs">{r.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}