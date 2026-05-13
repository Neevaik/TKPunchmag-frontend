export function filterByCategory(products, category) {
  return products.filter(
    (p) => p.category === category
  );
}

export function filterByBrand(products, brand) {
  if (brand === "all") return products;

  return products.filter(
    (p) => p.brand === brand
  );
}

export function sortProducts(products, sortBy) {
  const result = [...products];

  switch (sortBy) {
    case "price-low":
      return result.sort((a, b) => a.price - b.price);

    case "price-high":
      return result.sort((a, b) => b.price - a.price);

    case "rating":
      return result.sort((a, b) => b.rating - a.rating);

    default:
      return result;
  }
}