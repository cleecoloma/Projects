import { createContext, useContext, ReactNode } from "react";

type ShoppingCartProvider = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext); 

function useShoppingCart() {
  return (
    useContext(ShoppingCartContext)
  )
}

function ShoppingCartProvider({ children }) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { useShoppingCart, ShoppingCartProvider }