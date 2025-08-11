import React from "react";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Doon Valley Red Chilli Powder Ex Hot 400g",
    price: 6.99,
    image: "/DoonValleyRedChilliPowderExHot400g.png",
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    price: 6.99,
    image: "/product (3).jpg",
  },
  {
    id: 3,
    name: "Basmati Rice",
    price: 6.99,
    image: "/product (2).jpg",
  },
  {
    id: 4,
    name: "Cold Pressed Oil",
    price: 6.99,
    image: "/product (4).jpg",
  },
  {
    id: 5,
    name: "Fresh Milk (1L)",
    price: 6.99,
    image: "/product (2).jpg",
  },
  {
    id: 6,
    name: "Organic Bananas",
    price: 6.99,
    image: "/product (4).jpg",
  },
  {
    id: 7,
    name: "Brown Bread",
    price: 6.99,
    image: "/product (2).jpg",
  },
  {
    id: 8,
    name: "Raw Honey",
    price: 6.99,
    image: "/product (4).jpg",
  },
];

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md bg-white hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image container */}
      <div className="w-full h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover" // fills box completely
        />
      </div>

      {/* Product details */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-green-600 font-bold mt-2">$ {product.price}</p>
        <button className="mt-auto w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Product List Component
const ProductList = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl text-center font-bold mb-4">OUR PRODUCT</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
