function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover mb-2 rounded"
      />
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-blue-600 font-semibold mt-1">{product.price} ₺</p>
    </div>
  );
}

export default ProductCard;
