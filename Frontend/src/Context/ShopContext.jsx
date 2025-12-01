import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  const cart = {};
  for (let i = 0; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [allProduct, setAllProduct] = useState(all_product);
  const [cartItems, setCartItems] = useState(getDefaultCart(all_product));

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
        setAllProduct(response.data);
        setCartItems(getDefaultCart(response.data));
      }
      })
      .catch((error) => {
        console.warn("Backend not available, using static products.", error);
      });
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      return;
    }
    setCartItems((prev) => ({ ...prev, [itemId]: newQuantity }));
  };

  const removeItemCompletely = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProduct.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += (itemInfo.new_price ?? itemInfo.price ?? 0) * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    allProduct,
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    removeItemCompletely,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;