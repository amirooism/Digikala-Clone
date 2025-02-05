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
        {/* Check if price exists before displaying */}
        {product.price?.selling_price ? (
          <p className="text-gray-700">
            {product.price.selling_price.toLocaleString()} ریال
          </p>
        ) : (
          <p className="text-red-500">قیمت نامشخص</p> // Show a message if price is missing
        )}
      </li>
    </div>
  );
}
