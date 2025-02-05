import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function Product() {
  const [loadedProducts, setLoadedProducts] = useState([]); 

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


//////// Infinit phones 

// import { useEffect, useState } from "react";
// import ProductItem from "./ProductItem";

// export default function Product() {
//   const [loadedProducts, setLoadedProducts] = useState([]); 
//   const [page, setPage] = useState(1); // Track current page
//   const [loading, setLoading] = useState(false); // Track loading state

//   // Function to fetch products
//   async function fetchProducts(currentPage) {
//     setLoading(true);
//     try {
//       let apiUrl;
      
//       // Use first API for the first page, switch to the second API for pagination
//       if (currentPage === 1) {
//         apiUrl = `https://api.digikala.com/v1/categories/mobile-phone/brands/samsung/search/?page=${currentPage}`;
//       } else {
//         apiUrl = `https://api.digikala.com/v1/categories/mobile-phone/search/?q=گوشی%20موبایل%20سامسونگ%20s25%20ultra&sort=21&page=${currentPage}`;
//       }

//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }

//       const data = await response.json();

//       if (data && data.data && Array.isArray(data.data.products)) {
//         setLoadedProducts((prevProducts) => [...prevProducts, ...data.data.products]); // Append new products
//       } else {
//         console.error("Unexpected API response structure", data);
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // Initial fetch on component mount
//   useEffect(() => {
//     fetchProducts(1); // Load first API initially
//   }, []);

//   // Function to detect when user scrolls to bottom
//   useEffect(() => {
//     function handleScroll() {
//       if (
//         window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
//         !loading
//       ) {
//         setPage((prevPage) => prevPage + 1); // Increment page when near bottom
//       }
//     }

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [loading]);

//   // Fetch new page when `page` changes (starting from page 2)
//   useEffect(() => {
//     if (page > 1) {
//       fetchProducts(page);
//     }
//   }, [page]);

//   return (
//     <>
//       <ul className="columns-5 gap-0">
//         {loadedProducts.length > 0 ? (
//           loadedProducts.map((product) => (
//             <ProductItem key={product.id} product={product} />
//           ))
//         ) : (
//           <p>Loading products...</p>
//         )}
//       </ul>
//       {loading && <p>Loading more products...</p>}
//     </>
//   );
// }