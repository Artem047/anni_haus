import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProductsHeart, setSelectedProductsHeart] = useState([]);

  const addToBasket = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };
  const addToHeart = (product) => {
    setSelectedProductsHeart([...selectedProductsHeart, product]);
  };
  const removeFromBasket = (index) => {
    const updatedBasket = [...selectedProducts];
    updatedBasket.splice(index, 1);
    setSelectedProducts(updatedBasket);
  };
  const removeFromHeart = (index) => {
    const updatedBasket = [...selectedProductsHeart];
    updatedBasket.splice(index, 1);
    setSelectedProductsHeart(updatedBasket);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedProducts,
        addToBasket,
        removeFromBasket,
        addToHeart,
        selectedProductsHeart,
        setSelectedProductsHeart,
        removeFromHeart,
      }}>
      {children}
    </SearchContext.Provider>
  );
}
