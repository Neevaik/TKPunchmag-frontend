const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getTopRatedProducts() {
    try {
        const response = await fetch(`${API_URL}/product/top-rated`,
            {
                next: { revalidate: 60 },
            }
        );

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