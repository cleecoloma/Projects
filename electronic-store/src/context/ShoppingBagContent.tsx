import { createContext, useContext, ReactNode, useState } from "react";
import ShoppingBag from "../components/ShoppingBag";

type ShoppingBagProvider = {
  children: ReactNode;
};

type ShoppingBagContext = {
  openBag: () => void;
  closeBag: () => void;
  getItemQuantity: (id: number) => number;
  increaseBagQuantity: (id: number) => void;
  decreaseBagQuantity: (id: number) => void;
  removeFromBag: (id: number) => void;
  bagQuantity: number;
  bagItems: BagItem[];
};

type BagItem = {
  id: number;
  quantity: number;
};

const ShoppingBagContext = createContext({} as ShoppingBagContext);

function useShoppingBag() {
  return useContext(ShoppingBagContext);
}

function ShoppingBagProvider({ children }: ShoppingBagProvider) {
  const [isOpen, setIsOpen] = useState(false);
  const [bagItems, setBagItems] = useState<BagItem[]>([]);
  const bagQuantity = bagItems.reduce((quantity, item) => item.quantity + quantity, 0)

  const openBag = () => setIsOpen(true);
  const closeBag = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return (
      bagItems.find((item) => item.id === id)?.quantity || 0
    )
  }

  function increaseBagQuantity(id: number) {
    setBagItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseBagQuantity(id: number) {
    setBagItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromBag(id: number) {
    setBagItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    })
  }

  return (
    <ShoppingBagContext.Provider value={{ getItemQuantity, increaseBagQuantity, decreaseBagQuantity, removeFromBag, openBag, closeBag, bagItems, bagQuantity }}>
      {children}
      <ShoppingBag isOpen={isOpen} />
    </ShoppingBagContext.Provider>
  );
}

export { useShoppingBag, ShoppingBagProvider };
