import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('steam_iron_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [
      { id: 'item-1', name: 'Shirts / T-Shirts (Steam Iron)', service: 'Steam Ironing', price: 20, unit: 'per item', qty: 3, img: '/src/assets/service_steam_iron.jpg' },
      { id: 'item-2', name: 'Jeans / Formal Trousers', service: 'Steam Ironing', price: 25, unit: 'per item', qty: 2, img: '/src/assets/hero_iron.jpg' },
      { id: 'item-3', name: 'Everyday Mixed Laundry', service: 'Wash & Fold', price: 99, unit: 'per kg', qty: 2, img: '/src/assets/service_wash_fold.jpg' }
    ];
  });

  const [appliedCoupon, setAppliedCoupon] = useState('STEAM15');

  useEffect(() => {
    localStorage.setItem('steam_iron_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCartItems(prev => {
      return prev.map(i => {
        if (i.id === id) {
          const newQty = Math.max(0, i.qty + delta);
          return { ...i, qty: newQty };
        }
        return i;
      }).filter(i => i.qty > 0);
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discount = appliedCoupon === 'STEAM15' && subtotal > 0 ? Math.round(subtotal * 0.15) : 0;
  const deliveryFee = subtotal >= 299 || subtotal === 0 ? 0 : 40;
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      subtotal,
      discount,
      deliveryFee,
      grandTotal,
      totalItemsCount,
      appliedCoupon,
      setAppliedCoupon
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
