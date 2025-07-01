import { categories } from "../data/data";

function CategoryCard({ onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-6 my-4">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => onSelect(category)}
          className="relative group h-38 rounded-lg overflow-hidden cursor-pointer"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
            {category.name}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
