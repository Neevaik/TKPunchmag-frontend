import ActionButton from "@/components/ui/ActionButton";
import TopProductCard from "@/components/ui/TopProductCard";
import ErrorState from "@/components/ui/ErrorState";

export default function ProductSection({ topRatedProducts }) {


    return (
        <section className="py-16 px-6 lg:px-20 bg-background-dark">

            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl md:text-5xl font-black uppercase italic text-white">Gear for the Grunt</h2>

                <ActionButton variant="link">
                    View All
                </ActionButton>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topRatedProducts.map((product) => (
                    <TopProductCard
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        brand={product.brand}
                        category={product.category}
                        price={product.price}
                        rating={product.rating}
                        image={product.images?.[0]}
                    />
                ))}
            </div>

        </section>
    );
}