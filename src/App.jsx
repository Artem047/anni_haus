import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Heart from "./pages/Heart";
import Basket from "./pages/Basket";
import Chair from "./pages/CategoryPages/Chair";
import Armchair from "./pages/CategoryPages/Armchair";
import Sofa from "./pages/CategoryPages/Sofa";
import Table from "./pages/CategoryPages/Table";
import Poufs from "./pages/CategoryPages/Poufs";
import Wardrobe from "./pages/CategoryPages/Wardrobe";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  return (
    <SearchProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/chair" element={<Chair />} />
        <Route path="/armchair" element={<Armchair />} />
        <Route path="/sofa" element={<Sofa />} />
        <Route path="/table" element={<Table />} />
        <Route path="/poufs" element={<Poufs />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
      </Routes>
      <Footer />
    </SearchProvider>
  );
};

export default App;
