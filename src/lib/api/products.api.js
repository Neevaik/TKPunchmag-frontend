const NEXT_PUBLIC_PRODUCT_API_URL = process.env.NEXT_PUBLIC_PRODUCT_API_URL;
console.log("NEXT_PUBLIC_PRODUCT_API_URL : ", NEXT_PUBLIC_PRODUCT_API_URL)

export async function getTopRatedProducts() {
    try {
        const response = await fetch(`${NEXT_PUBLIC_PRODUCT_API_URL}/top-rated`, { next: { revalidate: 60 }, });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const res = await response.json();
        return {
            products: res.topProducts,
            error: false,
        }

    } catch (error) {
        return {
            products: [],
            error: true,
        };
    }
}

export async function getProductById(id) {
    try {
        if (!id) throw new Error("Missing product id");

        const response = await fetch(`${NEXT_PUBLIC_PRODUCT_API_URL}/id/${id}`, { next: { revalidate: 60 }, });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        return await response.json();

    } catch (error) {
        return {
            product: null,
            error: true,
        };
    }
}

export async function getByCategory(category) {
    try {
        if (!category) throw new Error("Missing category");
        const response = await fetch(`${NEXT_PUBLIC_PRODUCT_API_URL}/category/${category}`, { next: { revalidate: 60 }, });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        return await response.json();

    } catch (error) {
        return {
            product: null,
            error: true,
        };
    }
}