import React, { useContext, useState, createContext } from "react";

const StoreContext = createContext();

const useCartContext = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addItem = (item, quantity) => {
    setProducts([...products, { item: item, quantity: quantity }]);
  };

  const clarCart = () =>{
    setProducts([]);
  }



  return (
    <StoreContext.Provider value={{ products, addItem, clarCart, }}>
      {console.log(products)}
      {children}
    </StoreContext.Provider>
  );
};
export default useCartContext;
