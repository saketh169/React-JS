import React, { useState } from 'react';
import { ShoppingCart, Home, List, Trash2, Plus, Minus } from 'lucide-react';

// Main App component that acts as the container and router
const FreshMart = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  // Example product data. In a real application, this would come from an API.
  const products = [
    { id: 1, name: 'Organic Bananas', price: 0.79, image: 'https://placehold.co/400x300/FAD02E/000000?text=Bananas' },
    { id: 2, name: 'Fresh Strawberries', price: 3.49, image: 'https://placehold.co/400x300/FF4742/FFFFFF?text=Strawberries' },
    { id: 3, name: 'Avocados', price: 1.99, image: 'https://placehold.co/400x300/4CAF50/FFFFFF?text=Avocados' },
    { id: 4, name: 'Artisan Bread', price: 4.29, image: 'https://placehold.co/400x300/F5DEB3/000000?text=Bread' },
    { id: 5, name: 'Ground Coffee', price: 8.99, image: 'https://placehold.co/400x300/6A4524/FFFFFF?text=Coffee' },
    { id: 6, name: 'Cheddar Cheese', price: 5.75, image: 'https://placehold.co/400x300/FFD700/000000?text=Cheese' },
    { id: 7, name: 'Milk (1 Gallon)', price: 3.19, image: 'https://placehold.co/400x300/FFFFFF/000000?text=Milk' },
    { id: 8, name: 'Brown Eggs (Dozen)', price: 2.50, image: 'https://placehold.co/400x300/A0522D/FFFFFF?text=Eggs' },
    { id: 9, name: 'Pasta', price: 1.50, image: 'https://placehold.co/400x300/E0B98B/000000?text=Pasta' },
    { id: 10, name: 'Tomatoes', price: 2.19, image: 'https://placehold.co/400x300/E53935/FFFFFF?text=Tomatoes' },
    { id: 11, name: 'Chicken Breast', price: 6.99, image: 'https://placehold.co/400x300/A27B5C/FFFFFF?text=Chicken' },
    { id: 12, name: 'Salmon Fillet', price: 9.99, image: 'https://placehold.co/400x300/B3CDE0/000000?text=Salmon' },
  ];

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If item exists, increase quantity
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item is new, add it to the cart with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Function to update the quantity of an item
  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems => {
      return prevItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(0, newQuantity) } : item
      ).filter(item => item.quantity > 0); // Remove item if quantity becomes 0
    });
  };

  // Calculate total price of all items in the cart
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Common Header component for navigation
  const Header = () => (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-600 font-inter">FreshMart</div>
        <nav className="space-x-4 flex items-center">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${currentPage === 'home' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <Home size={18} />
            <span className="hidden sm:block">Home</span>
          </button>
          <button
            onClick={() => setCurrentPage('products')}
            className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${currentPage === 'products' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <List size={18} />
            <span className="hidden sm:block">Products</span>
          </button>
          <button
            onClick={() => setCurrentPage('cart')}
            className={`relative flex items-center space-x-2 p-2 rounded-lg transition-colors ${currentPage === 'cart' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:block">Cart</span>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );

  // Home Page component
  const HomePage = () => (
    <div className="text-center py-16 px-4 bg-emerald-50 rounded-xl m-4 shadow-inner">
      <h1 className="text-4xl font-extrabold text-emerald-800 mb-4 font-inter">Welcome to FreshMart!</h1>
      <p className="text-xl text-emerald-700 mb-8 max-w-2xl mx-auto">
        Your one-stop shop for the freshest produce and groceries, delivered straight to your door.
      </p>
      <button
        onClick={() => setCurrentPage('products')}
        className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
      >
        Shop Now
      </button>
    </div>
  );

  // Products Page component
  const ProductsPage = () => (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-inter">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );

  // Cart Page component
  const CartPage = () => (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-inter">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 py-16">
          <p className="text-lg">Your cart is empty.</p>
          <button
            onClick={() => setCurrentPage('products')}
            className="mt-4 text-emerald-600 hover:underline"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center text-2xl font-bold bg-white p-6 rounded-xl shadow-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="mt-6 text-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );

  // Individual Product Card component
  const ProductCard = ({ product, addToCart }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
        <p className="text-emerald-600 text-xl font-bold">${product.price.toFixed(2)}</p>
      </div>
      <div className="p-4">
        <button
          onClick={() => addToCart(product)}
          className="w-full py-2 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

  // Individual Cart Item component
  const CartItem = ({ item, updateQuantity, removeFromCart }) => (
    <div className="flex items-center justify-between py-4 border-b last:border-b-0">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
        <div>
          <h4 className="font-semibold text-lg text-gray-900">{item.name}</h4>
          <p className="text-emerald-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center rounded-full border border-gray-300">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-full"
          >
            <Minus size={16} />
          </button>
          <span className="px-4 text-center font-medium w-12">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-full"
          >
            <Plus size={16} />
          </button>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );

  // Common Footer component
  const Footer = () => (
    <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-8">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Header />
      <main className="container mx-auto flex-grow p-4">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'cart' && <CartPage />}
      </main>
      <Footer />
    </div>
  );
};

export default FreshMart;
