export default function ProductItem({ product }) {
  return (
    
      <div>
        <li key={product.id} className=" bg-transparent border text-end">
          <img
            src={product.images.main.url}
            alt={product.title_fa}
            className=" bg-transparent"
          />
          <h3 className="text-lg font-semibold text-gray-800  p-2">
            {product.title_fa}
          </h3>
          <p className="text-xl font-bold text-gray-900">{product.price}</p>
        </li>
      </div>
    
  );
}
