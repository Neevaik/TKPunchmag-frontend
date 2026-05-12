import CategoryPage from "@/features/category/CategoryPage";

export default async function Page({ params }) {
    const { category } = await params;

    return <CategoryPage slug={category} />;
}