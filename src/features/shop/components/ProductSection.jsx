export default function ProductSection() {
    const products = [
        {
            name: "Apex Sparring Gloves",
            price: 89.99,
            image: "/gloves.jpg",
        },
        {
            name: "Iron-Fist Heavy Bag",
            price: 149,
            image: "/bag.jpg",
        },
    ];
    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-black uppercase mb-10">
                Gear for the Grunt
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
                {products.map((p) => (
                    <div key={p.name} className="bg-[#2a1616] p-4 rounded-lg">
                        <div className="h-60 bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
                        <h3 className="mt-4 font-bold">{p.name}</h3>
                        <p className="text-white">${p.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}