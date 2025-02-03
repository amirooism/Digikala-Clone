import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function Product() {
  const [loadedProducts, setLoadedProducts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://api.digikala.com/v1/categories/mobile-phone/brands/samsung/search/?page=1"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        // Ensure the expected structure before setting state

        if (data && data.data && Array.isArray(data.data.products)) {
          setLoadedProducts(data.data.products);
        } else {
          console.error("Unexpected API response structure", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <ul className=" columns-5 gap-0 ">
        {loadedProducts.length > 0 ? (
          loadedProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </ul>
    </>
  );
}
