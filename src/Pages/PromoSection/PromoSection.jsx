import React from "react";

const promoData = [
  {
    id: 1,
    img: "/promosection.jpg",
    title: "Sales, schmales. Foodease has low prices all the time.",
    buttonText: "Explore our Groceries",
    link: "/groceri"
  },
  {
    id: 2,
    img: "/promosec1.jpg",
    title: "Limited Time Only",
    buttonText: "Explore",
    link: "/offer"
  }
];

const PromoCard = ({ img, title, buttonText, link }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition duration-300 flex flex-col">
      {/* Top Image */}
      <div className="h-68">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Bottom Content */}
      <div className="p-5 flex flex-col flex-grow text-center">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <a
          href={link}
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition inline-block mx-auto"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const PromoSection = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {promoData.map((promo) => (
          <PromoCard key={promo.id} {...promo} />
        ))}
      </div>
    </div>
  );
};

export default PromoSection;
