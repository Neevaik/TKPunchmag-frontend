"use client";

export default function CategoryPage({ slug }) {

    return (
        <main className="min-h-screen bg-black text-white p-10">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="border border-red-500 rounded-2xl p-6 bg-zinc-900">
                    <h1 className="text-4xl font-bold text-red-500">
                        Category Page Test
                    </h1>

                    <p className="text-zinc-300 mt-2">
                        Cette page fonctionne correctement.
                    </p>
                </div>

                <div className="border border-zinc-700 rounded-2xl p-6 bg-zinc-900">
                    <h2 className="text-2xl font-semibold mb-4">
                        Slug reçu depuis l’URL
                    </h2>

                    <p className="text-lg text-green-400">{slug}</p>
                </div>
            </div>
        </main>
    );
}