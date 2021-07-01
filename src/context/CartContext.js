import React, { useContext, useState, createContext } from "react";

const StoreContext = createContext();

const useCartContext = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

  const addItem = (id, title, img, price, quantity) => {
    const inCartList = products.find((i) => i.id == id.id);
    setIsInCart(true);
    console.log(id.id);
    if (inCartList) {
      inCartList.quantity += quantity;
      setProducts([...products]);
      console.log("Repetido");
    } else {
      setProducts([...products, { id: id, img: img, title: title, quantity: quantity, price: price }]);
      console.log("Nuevo");
    }
  };

  const removeItem = (id) => {
    products.splice(
      products.findIndex((i) => i.id === id),
      1
    );
    setProducts([...products]);
    if (products.length === 0) {
      setIsInCart(false);
    }
  };

  const clearCart = () => {
    setProducts([]);
  };

  const cartWidgetCount = () => {
    return products.reduce((add, i) => (add += i.quantity), 0);
  };

  const totalProductsPrice = () => {
    return products.reduce((add, i) => (add += i.price * i.quantity), 0);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        addItem,
        removeItem,
        clearCart,
        cartWidgetCount,
        isInCart,
        totalProductsPrice,
      }}
    >
      {console.log(products)}
      {children}
    </StoreContext.Provider>
  );
};
export default useCartContext;
