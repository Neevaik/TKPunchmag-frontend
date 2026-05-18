import { getProductById } from "@/lib/api/products.api";

export default async function ProductPageDetail({ id }) {
    const { product, error } = await getProductById(id);

    if (error || !product) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-background-dark text-white">
                <h1 className="text-2xl font-bold">
                    Produit introuvable
                </h1>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background-dark px-4 py-10 text-white md:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-8 lg:flex-row">

                    <div className="flex-1">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full rounded-2xl object-cover"
                        />
                    </div>

                    <div className="flex-1 space-y-6">
                        <div>
                            <p className="text-sm uppercase tracking-wide text-primary">
                                {product.brand}
                            </p>

                            <h1 className="mt-2 text-3xl font-bold">
                                {product.name}
                            </h1>
                        </div>

                        <p className="text-3xl font-black">
                            ${product.price.toFixed(2)}
                        </p>

                        <p className="leading-relaxed text-text-muted">
                            {product.description}
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}