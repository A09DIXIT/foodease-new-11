import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

/**************************************
 * Minimal inline icons (SVG)
 **************************************/
const CartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M6 6h15l-1.5 9H8L6 2H2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
  </svg>
);

const HeartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = ({ filled = false, ...props }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
  </svg>
);

/**************************************
 * Dummy base product data (yours)
 **************************************/
const baseProducts = [
  { id: 1, name: "Doon Valley Red Chilli Powder Ex Hot 400g", price: 6.99, image: "/DoonValleyRedChilliPowderExHot400g.png" },
  { id: 2, name: "Fresh Tomatoes", price: 2.49, image: "/product (3).jpg" },
  { id: 3, name: "Basmati Rice", price: 14.99, image: "/product (2).jpg" },
  { id: 4, name: "Cold Pressed Oil", price: 9.5, image: "/product (4).jpg" },
  { id: 5, name: "Fresh Milk (1L)", price: 1.2, image: "/product (2).jpg" },
  { id: 6, name: "Organic Bananas", price: 1.99, image: "/product (4).jpg" },
  { id: 7, name: "Brown Bread", price: 2.15, image: "/product (2).jpg" },
  { id: 8, name: "Raw Honey", price: 12.75, image: "/product (4).jpg" },
];

/**************************************
 * Enriched products with categories, rating, badges, etc.
 **************************************/
const products = baseProducts.map((p) => {
  const metaById = {
    1: { category: "Spices", rating: 4.6, reviews: 118, oldPrice: 7.99, badge: "HOT" },
    2: { category: "Vegetables", rating: 4.3, reviews: 83, oldPrice: 2.99, badge: "FRESH" },
    3: { category: "Grains", rating: 4.8, reviews: 241, oldPrice: 16.99, badge: "BEST" },
    4: { category: "Oils", rating: 4.4, reviews: 64, oldPrice: 10.99, badge: "NEW" },
    5: { category: "Dairy", rating: 4.2, reviews: 156, oldPrice: 1.5, badge: null },
    6: { category: "Fruits", rating: 4.7, reviews: 190, oldPrice: 2.49, badge: "ORGANIC" },
    7: { category: "Bakery", rating: 4.1, reviews: 72, oldPrice: 2.49, badge: null },
    8: { category: "Honey", rating: 4.5, reviews: 98, oldPrice: 14.0, badge: "PURE" },
  }[p.id];
  return { ...p, ...metaById };
});

/**************************************
 * Helpers
 **************************************/
const formatCurrency = (n, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(n);

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

/**************************************
 * ProductCard Component
 **************************************/
const ProductCard = ({ product, onQuickView, onAddToCart }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative border rounded-2xl shadow-sm hover:shadow-xl bg-white/90 backdrop-blur overflow-hidden flex flex-col"
    >
      {/* Badge */}
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 text-[10px] font-bold bg-red-500 text-white px-2 py-1 rounded-full shadow">{product.badge}</span>
      )}

      {/* Image */}
      <div className="w-full h-48 relative overflow-hidden">
        <motion.img
          layoutId={`image-${product.id}`}
          src={product.image}
          alt={product.name}
          onError={(e) => (e.currentTarget.src =
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E")}
          className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
        />
        {/* Quick View overlay */}
        <motion.button
          onClick={() => onQuickView(product)}
          className="absolute inset-x-4 bottom-4 hidden group-hover:flex items-center justify-center bg-black/60 text-white text-xs font-semibold rounded-full py-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          Quick View
        </motion.button>
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">{product.name}</h3>
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? "opacity-100" : "opacity-30"}`} />
          ))}
          <span className="ml-1 text-xs text-gray-500">{product.rating.toFixed(1)} · {product.reviews}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-green-600 font-bold text-lg">{formatCurrency(product.price)}</p>
          {product.oldPrice && (
            <p className="text-gray-400 line-through text-sm">{formatCurrency(product.oldPrice)}</p>
          )}
        </div>
        <div className="mt-auto flex gap-2">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => onAddToCart(product)}
            className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition font-semibold shadow"
          >
            Add to Cart
          </motion.button>
          <button className="px-3 rounded-xl border text-gray-600 hover:bg-gray-50">
            <HeartIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/**************************************
 * Skeleton card while loading
 **************************************/
const SkeletonCard = () => (
  <div className="border rounded-2xl shadow-sm bg-white overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-200" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-200 w-3/4 rounded" />
      <div className="h-3 bg-gray-200 w-1/2 rounded" />
      <div className="h-10 bg-gray-200 w-full rounded" />
    </div>
  </div>
);

/**************************************
 * Quick View Modal
 **************************************/
const QuickViewModal = ({ product, onClose, onAddToCart }) => (
  <AnimatePresence>
    {product && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <motion.div
          layout
          initial={{ y: 20, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 10, scale: 0.98, opacity: 0 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="relative z-10 bg-white rounded-3xl shadow-2xl max-w-3xl w-[92vw] overflow-hidden"
        >
          <button onClick={onClose} className="absolute right-4 top-4 p-2 rounded-full bg-white/70 shadow">
            <XIcon className="w-5 h-5" />
          </button>
          <div className="grid md:grid-cols-2">
            <motion.img
              layoutId={`image-${product.id}`}
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-full object-cover"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
              <p className="mt-2 text-sm text-gray-500">Category: <span className="font-medium text-gray-700">{product.category}</span></p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? "opacity-100" : "opacity-30"}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{product.rating.toFixed(1)} · {product.reviews} reviews</span>
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-2xl font-extrabold text-green-600">{formatCurrency(product.price)}</span>
                {product.oldPrice && <span className="text-gray-400 line-through">{formatCurrency(product.oldPrice)}</span>}
              </div>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Freshly sourced and quality-checked. Perfect for daily cooking and special recipes. Enjoy doorstep delivery with secure packaging.
              </p>
              <div className="mt-6 flex gap-3">
                <motion.button whileTap={{ scale: 0.97 }} onClick={() => onAddToCart(product)} className="flex-1 bg-red-500 text-white py-3 rounded-2xl font-semibold shadow hover:bg-red-600">Add to Cart</motion.button>
                <button onClick={onClose} className="px-5 py-3 rounded-2xl border font-semibold">Close</button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/**************************************
 * Toast (add-to-cart feedback)
 **************************************/
const Toast = ({ show, message }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        className="fixed bottom-6 right-6 z-[60] bg-gray-900 text-white px-4 py-3 rounded-xl shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);

/**************************************
 * Chip Button
 **************************************/
const Chip = ({ active, children, ...props }) => (
  <button
    {...props}
    className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${
      active ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-700 hover:bg-gray-50"
    }`}
  >
    {children}
  </button>
);

/**************************************
 * Main Product List Page
 **************************************/
export default function ProductPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popularity");
  const [currency, setCurrency] = useState("USD");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);

  const [loading, setLoading] = useState(true);
  const [quickView, setQuickView] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState({ show: false, message: "" });

  // Skeleton load
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  // Determine global min/max
  const { minPrice, maxPrice } = useMemo(() => {
    const prices = products.map((p) => p.price);
    return { minPrice: Math.min(...prices), maxPrice: Math.max(...prices) };
  }, []);

  // Initialize price sliders
  useEffect(() => {
    setPriceMin(minPrice);
    setPriceMax(maxPrice);
  }, [minPrice, maxPrice]);

  // Derived filtered + sorted list
  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      p.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    if (category !== "All") list = list.filter((p) => p.category === category);
    list = list.filter((p) => p.price >= priceMin && p.price <= priceMax);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price); break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price); break;
      case "name-asc":
        list.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "popularity":
      default:
        list.sort((a, b) => b.reviews - a.reviews); break;
    }
    return list;
  }, [query, category, sort, priceMin, priceMax]);

  // Add to cart handler
  const handleAddToCart = (product) => {
    setCartCount((c) => c + 1);
    setToast({ show: true, message: `${product.name} added to cart` });
    setTimeout(() => setToast({ show: false, message: "" }), 1200);
  };

  const categories = ["All", "Spices", "Vegetables", "Grains", "Oils", "Dairy", "Fruits", "Bakery", "Honey"];

  return (
    <LayoutGroup>
      <div className="relative min-h-screen bg-gradient-to-b from-red-50/70 via-white to-white">
        {/* softly patterned top background */}
        <div className="pointer-events-none absolute inset-x-0 -top-20 h-64 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.12),transparent_60%)]" />

        {/* Header */}
        <header className="px-4 sm:px-6 lg:px-10 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-7xl mx-auto text-center"
          >
            <p className="text-xs tracking-widest uppercase text-red-500 font-semibold">Foodease Market</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">Our Products</h1>
            <p className="mt-2 text-sm text-gray-600">Fresh picks, fair prices, fast delivery.</p>
          </motion.div>
        </header>

        {/* Controls */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for rice, tomatoes, honey..."
                className="w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-200"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">⌘K</span>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Sort</label>
              <select
                className="rounded-xl border px-3 py-2 bg-white"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="popularity">Popularity</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name A–Z</option>
              </select>
            </div>

            {/* Currency (optional) */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Currency</label>
              <select className="rounded-xl border px-3 py-2 bg-white" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="AED">AED</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>

          {/* Category chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Chip key={c} active={category === c} onClick={() => setCategory(c)}>{c}</Chip>
            ))}
          </div>

          {/* Price range */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4 items-center">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Min</span>
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                step={0.01}
                value={priceMin}
                onChange={(e) => setPriceMin(clamp(parseFloat(e.target.value), minPrice, priceMax))}
                className="w-full"
              />
              <span className="text-sm font-medium">{formatCurrency(priceMin, currency)}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Max</span>
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                step={0.01}
                value={priceMax}
                onChange={(e) => setPriceMax(clamp(parseFloat(e.target.value), priceMin, maxPrice))}
                className="w-full"
              />
              <span className="text-sm font-medium">{formatCurrency(priceMax, currency)}</span>
            </div>
          </div>
        </section>

        {/* Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-8 pb-24">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {loading
              ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
              : filtered.slice(0, visibleCount).map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onQuickView={setQuickView}
                    onAddToCart={handleAddToCart}
                  />
                ))}
          </motion.div>

          {/* Load more */}
          {!loading && visibleCount < filtered.length && (
            <div className="flex justify-center mt-8">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setVisibleCount((c) => c + 8)}
                className="px-5 py-3 rounded-2xl border bg-white hover:bg-gray-50 font-semibold"
              >
                Load more
              </motion.button>
            </div>
          )}

          {/* Empty state */}
          {!loading && filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 text-gray-500"
            >
              No products match your filters.
            </motion.div>
          )}
        </main>

        {/* Floating cart */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-40 flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full shadow-2xl"
        >
          <CartIcon className="w-5 h-5" />
          <span className="text-sm font-semibold">Cart</span>
          <motion.span
            key={cartCount}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="ml-1 text-xs bg-white text-gray-900 px-2 py-0.5 rounded-full"
          >
            {cartCount}
          </motion.span>
        </motion.button>

        {/* Quick view modal */}
        <QuickViewModal product={quickView} onClose={() => setQuickView(null)} onAddToCart={handleAddToCart} />

        {/* Toast */}
        <Toast show={toast.show} message={toast.message} />
      </div>
    </LayoutGroup>
  );
}
