const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getTopRatedProducts() {
    try {
        const response = await fetch(
            `${API_URL}/product/top-rated`,
            {
                next: { revalidate: 60 },
            }
        );

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();

        return {
            products: data,
            error: false,
        };
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

        const response = await fetch(
            `${API_URL}/product/id/${id}`,
            {
                next: { revalidate: 60 },
            }
        );

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();

        return {
            product: data,
            error: false,
        };
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

        const response = await fetch(
            `${API_URL}/product/category/${category}`,
            {
                next: { revalidate: 60 },
            }
        );

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();

        return data;

    } catch (error) {
        return {
            product: null,
            error: true,
        };
    }
}