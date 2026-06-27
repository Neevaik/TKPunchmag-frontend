import Image from "next/image";
import { getProductById } from "@/lib/api/products.api";
import AddToCartButton from "../../components/ui/AddToCartButton";

export default async function ProductPageDetail({ id }) {
    const { product, error } = await getProductById(id);

    const cloudinaryBase = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/`;

    if (error || !product) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-background-dark text-white">
                <h1 className="text-2xl font-bold">
                    Produit introuvable
                </h1>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background-dark px-4 py-10 text-white md:px-10">
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-12 lg:grid-cols-2">
                    
                    <div className="overflow-hidden rounded-3xl bg-zinc-900">
                        <Image
                            src={`${cloudinaryBase}${product.images?.[0]}`}
                            alt={product.name}
                            width={700}
                            height={700}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col">

                        {product.attributes?.badge && (
                            <span className="mb-4 w-fit rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                                {product.attributes.badge}
                            </span>
                        )}

                        <p className="text-sm uppercase tracking-widest text-primary">
                            {product.brand}
                        </p>

                        <h1 className="mt-2 text-4xl font-black">
                            {product.name}
                        </h1>

                        {product.attributes?.subtitle && (
                            <p className="mt-2 text-lg text-text-muted">
                                {product.attributes.subtitle}
                            </p>
                        )}

                        <div className="mt-6 flex items-center gap-3">
                            <span className="text-yellow-400">
                                {"★".repeat(product.rating)}
                                {"☆".repeat(5 - product.rating)}
                            </span>

                            <span className="text-sm text-text-muted">
                                {product.rating}/5
                            </span>
                        </div>

                        <div className="mt-8">
                            <p className="text-5xl font-black text-primary">
                                ${product.price.toFixed(2)}
                            </p>
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                            <span
                                className={`h-3 w-3 rounded-full ${product.stock > 0
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                    }`}
                            />

                            <p className="font-medium">
                                {product.stock > 0
                                    ? `En stock (${product.stock} disponibles)`
                                    : "Rupture de stock"}
                            </p>
                        </div>

                        <div className="mt-3">
                            <span className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-text-muted">
                                {product.category}
                            </span>
                        </div>

                        <div className="mt-8 border-t border-zinc-800 pt-8">
                            <h2 className="mb-4 text-xl font-bold">
                                Description
                            </h2>

                            <p className="leading-8 text-text-muted">
                                {product.description}
                            </p>
                        </div>

                        <div className="mt-8">
                            <AddToCartButton productId={product._id} />
                        </div>

                        <div className="mt-10 space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                            <div className="flex justify-between">
                                <span className="text-text-muted">Marque</span>
                                <span className="font-semibold">{product.brand}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-text-muted">Catégorie</span>
                                <span className="font-semibold capitalize">
                                    {product.category}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-text-muted">Disponibilité</span>
                                <span className="font-semibold">
                                    {product.stock > 0 ? "En stock" : "Rupture"}
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
}