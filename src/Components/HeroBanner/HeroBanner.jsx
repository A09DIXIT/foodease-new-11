  import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PromoBanners from "../PromoBanners/PromoBanners";
import PromoBanner from "../PromoBanner/PromoBanner2";
import PromoSection from "../../Pages/PromoSection/PromoSection";
   

export default function HeroBanner() {
  const productSections = [
    {
      title: "Best Sellers",
      color: "yellow-50",
      textColor: "text-red-600",
      items: [
        { name: "Doon Valley Fada Coarse 908g", img: "/DoonValleyFadaCoarse.png" },
        { name: "Doon Valley Coriander Powder 400g", img: "/corianderpowder.png" },
        { name: "Doon Valley Puffed Rice Basmati 400g", img: "/puffed rice basmati.png" },
        { name: "Doon Valley Coriander Seeds 200g", img: "/CORIANDER SEEDS.png" },
        { name: "Doon Valley Corn Flour White 908g", img: "/DoonValleyCornFlourWhite908g.png" },
        { name: "Doon Valley Crispy Chilli Oil 230g", img: "/DV CRISPY CHILLI OIL.png" },
        { name: "Doon Valley Fada Coarse 908g", img: "/DoonValleyFadaCoarse.png" },
        { name: "Coriander Powder.png", img: "/corianderpowder.png" },
        { name: "Doon Valley Fada Coarse 908g", img: "/DoonValleyFadaCoarse.png" },
        { name: "Doon Valley Coriander Powder 400g", img: "/corianderpowder.png" },
        { name: "Doon Valley Puffed Rice Basmati 400g", img: "/puffed rice basmati.png" },
        { name: "Doon Valley Coriander Seeds 200g", img: "/CORIANDER SEEDS.png" },
        { name: "Doon Valley Corn Flour White 908g", img: "/DoonValleyCornFlourWhite908g.png" },
        { name: "Doon Valley Crispy Chilli Oil 230g", img: "/DV CRISPY CHILLI OIL.png" },
        { name: "Doon Valley Fada Coarse 908g", img: "/DoonValleyFadaCoarse.png" },
        { name: "Coriander Powder.png", img: "/corianderpowder.png" },
        { name: "Doon Valley Fada Coarse 908g", img: "/DoonValleyFadaCoarse.png" },
        { name: "Doon Valley Coriander Powder 400g", img: "/corianderpowder.png" },
        { name: "Doon Valley Puffed Rice Basmati 400g", img: "/puffed rice basmati.png" },
        { name: "Doon Valley Coriander Seeds 200g", img: "/CORIANDER SEEDS.png" },
        { name: "Doon Valley Corn Flour White 908g", img: "/DoonValleyCornFlourWhite908g.png" },
        { name: "Doon Valley Crispy Chilli Oil 230g", img: "/DV CRISPY CHILLI OIL.png" },
        { name: "Doon Valley Fada Coarse 908g", img: "/DoonValleyFadaCoarse.png" },
        { name: "Coriander Powder.png", img: "/corianderpowder.png" },
        
      ],
    },
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const currentSection = productSections[0];
  const totalPages = Math.ceil(currentSection.items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = currentSection.items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* ===== Hero Banner Section ===== */}
      <div className="mt-6 px-2 md:px-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
    {/* Left Big Banner */}
    <div className="md:col-span-2 h-[300px] sm:h-[250px] md:h-[400px] relative rounded-xl overflow-hidden shadow-2xl group hover:shadow-green-200 transition duration-300">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={4000}
      >
        {[
          { src: "/B1.jpeg", title: "Cool Off with Ice Creams", desc: "Shop summer treats now" },
          { src: "/water.png", title: "Beat the Heat", desc: "Refresh your cart" },
          { src: "/water.png", title: "Frozen Favorites", desc: "Stock up today" },
        ].map((item, i) => (
          <div key={i} className="relative group">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 text-white">
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold drop-shadow-lg">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>

    {/* Right Small Sliders */}
    <div className="flex flex-col gap-4 md:gap-6">
      {[
        {
          slides: [
            { src: "/juices.png", label: "Fresh Juices" },
            { src: "/product (1).jpg", label: "Mocktails" },
          ],
        },
        {
          slides: [
            { src: "/frutis.jpg", label: "Daily Essentials" },
            { src: "/juices.png", label: "Grocery Picks" },
          ],
        },
      ].map((slider, idx) => (
        <div
          key={idx}
          className="h-[100px] sm:h-[140px] md:h-[190px] relative rounded-xl overflow-hidden shadow-lg group"
        >
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            interval={2500}
          >
            {slider.slides.map((item, i) => (
              <div key={i} className="relative group">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition" />
                <div className="absolute bottom-1 left-2 sm:bottom-2 sm:left-3 text-white">
                  <h3 className="font-semibold text-sm sm:text-base drop-shadow">
                    {item.label}
                  </h3>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* ===== Weekly Specials Slider ===== */}
      <section className="mt-14 px-4 md:px-10">
        <h2 className="text-3xl font-bold text-left mb-6 text-red-600 tracking-tight">Weekly Specials</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
          {["/special.png", "/speacial2.png"].map((src, i) => (
            <div key={i} className="h-[280px] md:h-[380px] rounded-xl overflow-hidden shadow-lg">
              <img src={src} alt={`Special ${i + 1}`} className="w-full h-full object-cover transition duration-300" />
            </div>
          ))}
        </Carousel>
      </section>


      {/* ===== Sweets Corner Swiper ===== */}
      <section className="py-24 px-4 md:px-10 bg-pink-50">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600">Sweets Corner</h2>
          <a href="/products" className="flex items-center space-x-2">
            <span className="text-xl font-medium">View More</span>
          </a>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="!pb-10"
        >
          {[
            { name: "Doon Valley Yellow Mustard Seeds 200g", image: "/YellowMustardSeeds.png" },
            { name: "Doon Valley Red Chilli Powder Ex Hot 400g", image: "/DoonValleyRedChilliPowderExHot400g.png" },
            { name: "Doon Valley Puffed Rice Basmati 400g", image: "/puffed rice basmati.png" },
            { name: "Doon Valley Coriander Seeds 200g", image: "/CORIANDER SEEDS.png" },
            { name: "Doon Valley Corn Flour White 908g", image: "/DoonValleyCornFlourWhite908g.png" },
          ].map((product, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 h-72 flex flex-col justify-center">
                <img src={product.image} alt={product.name} className="rounded-lg mb-4 w-full h-40 object-contain" />
                <h3 className="text-sm font-medium text-center">{product.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <PromoBanner />

      {/* ===== Best Sellers (Paginated) ===== */}
      <section className={`py-24 px-4 md:px-10 bg-${currentSection.color}`}>
        <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${currentSection.textColor} text-left`}>
          {currentSection.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentItems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 h-72 flex flex-col justify-center">
              <img src={item.img} alt={item.name} className="rounded-lg mb-4 h-40 object-contain" />
              <h3 className="text-lg font-semibold text-center">{item.name}</h3>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-full border ${
                currentPage === i + 1 ? "bg-red-600 text-white" : "bg-white text-gray-700"
              } hover:bg-red-400 transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
      <PromoSection />
      <PromoBanners />

      {/* ===== Ways to Shop ===== */}
      <section className="py-16 px-4 md:px-10 bg-gradient-to-r from-green-50  via-green-100 to-green-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-800">Ways to Shop</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-lg font-medium">
          <div className="flex items-center gap-2 hover:scale-105 transition">Home Delivery</div>
          <div className="flex items-center gap-2 hover:scale-105 transition">Pick up in Store</div>
          <div className="flex items-center gap-2 hover:scale-105 transition">
            Free Delivery with <strong>FoodEase +</strong>
          </div>
        </div>
      </section>

      <PromoBanner />

      {/* ===== Loyalty Rewards ===== */}
      <section className="py-16 px-4 md:px-10 bg-yellow-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-700">Loyalty Rewards</h2>
        <p className="text-md md:text-lg max-w-xl mx-auto mb-6 text-gray-700">
          Earn points on every purchase and redeem them for exclusive discounts and gifts!
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105">
          Join Now
        </button>
      </section>
    </div>
  );
}
