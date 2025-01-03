"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: number; // Unique identifier for the product
  title: string; // Product title
  price: number; // Product price
  image: string; // Image URL of the product
  quantity: number; // Quantity of the product in the cart
}

interface CartContextType {
  cartItems: CartItem[]; // Array of cart items
  addToCart: (item: CartItem) => void; // Function to add items to the cart
  removeFromCart: (id: number) => void; // Function to remove items from the cart
  clearCart: () => void; // Function to clear the cart
  totalAmount: number; // Total amount of the cart
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode; // ReactNode type to accept any valid children
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setTotalAmount((prevAmount) => prevAmount + item.price * item.quantity);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setTotalAmount(
      (prevAmount) =>
        prevAmount - cartItems.find((item) => item.id === id)!.price
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalAmount(0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
