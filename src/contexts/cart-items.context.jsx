import { createContext, useState } from "react";

export const CartItemsContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartItemsProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
};
