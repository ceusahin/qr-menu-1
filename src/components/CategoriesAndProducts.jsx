import { useState } from "react";
import { products } from "../data/data";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";

function CategoriesAndProducts() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categoryId === selectedCategory.id)
    : [];

  return (
    <>
      <div className="border-b-2 h-57 mx-6 text-gray-400"></div>
      <div>
        {/* Geri Butonu */}
        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-4 m-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            Geri
          </button>
        )}

        {/* Kategoriler */}
        {!selectedCategory && <CategoryCard onSelect={setSelectedCategory} />}

        {/* Ürünler */}
        {selectedCategory && (
          <div className="grid grid-cols-2 gap-4 m-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CategoriesAndProducts;
