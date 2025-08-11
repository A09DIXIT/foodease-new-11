import React from "react";

const categories = [
  {
    name: "Fruits",
    image: "/frutis.jpg",
  },
  {
    name: "Vegetables",
    image: "/fresh-pumpkin.jpg",
  },
  {
    name: "Dairy",
     image: "/frutis.jpg",
  },
  {
    name: "Snacks",
    image: "/fresh-pumpkin.jpg",
  },
  {
    name: "Beverages",
    image: "/frutis.jpg",
  },
  {
    name: "Bakery",
   image: "/fresh-pumpkin.jpg",
  },
  {
    name: "Household",
     image: "/frutis.jpg",
  },
  {
    name: "Baby Care",
    image: "/fresh-pumpkin.jpg",
  },
];

const CategorySlider = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-4 flex justify-center gap-20 bg-white shadow">
      {categories.map((cat, i) => (
        <div key={i} className="text-center min-w-[80px]">
          <img
            src={cat.image}
            alt={cat.name}
            className="w-14 h-14 mx-auto rounded-full object-cover border"
          />
          <p className="mt-2 text-sm">{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySlider;
