import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Heart from "./pages/Heart";
import Basket from "./pages/Basket";
import { SearchProvider } from "./context/SearchContext";
import Catalog from "./pages/Catalog";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <SearchProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:categoryPath" element={<Catalog />} />
        <Route
          path="/catalog/:categoryPath/:productId"
          element={<ProductPage />}
        />
      </Routes>
      <Footer />
    </SearchProvider>
  );
};

export default App;
