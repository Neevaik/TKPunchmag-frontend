import { CATEGORIES } from "@/lib/categories";
import CategoryPage from "@/features/category/CategoryPage";

export default function Page({ params }) {
    const config = CATEGORIES[params.category];


    return <CategoryPage config={config} slug={params.category} />;
}