export default function Newsletter() {
    return (
        <section className="py-20 text-center">
            <h2 className="text-3xl font-black uppercase mb-4">
                Join the Ranks
            </h2>

            <p className="text-gray-400 mb-6">
                Get 10% off your first order
            </p>

            <form className="flex max-w-md mx-auto gap-2">
                <input
                    className="flex-1 px-4 py-3 bg-white/5 border rounded"
                    placeholder="Email"
                />
                <button className="bg-primary px-6 font-bold uppercase">
                    Subscribe
                </button>
            </form>
        </section>
    );
}