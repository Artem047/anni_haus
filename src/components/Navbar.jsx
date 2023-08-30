import { Link, useLocation } from "react-router-dom";
import { FaPinterestP } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import logo from "../images/logo.svg";
import { LuSearch } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import DropDownCategory from "./DropDownCategory";
import { useSearchContext } from "../context/SearchContext";
import Breadcrumbs from "./Breadcrumbs";

const Navbar = () => {
  const { setSearchQuery, selectedProducts, selectedProductsHeart } =
    useSearchContext();
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <nav className="w-full h-full">
      <div className="bg-[#F1EEEB] w-full py-4 flex justify-around">
        <div className="flex gap-4">
          <b>8 800 551 01 60</b>
          <Link to="tel:8 800 551 01 60" className="uppercase">
            Заказать обратный звонок
          </Link>
        </div>
        <div className="flex uppercase gap-12">
          <Link to="/" className="animated-link">
            Главная
          </Link>

          <Link
            to="/catalog"
            className="animated-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            Каталог
          </Link>
          <Link to="/contact" className="animated-link">
            Контакты
          </Link>
          <Link to="/design" className="animated-link">
            Дизайнерам
          </Link>
          <Link to="/diler" className="animated-link">
            Дилерам
          </Link>
        </div>
        {showModal && (
          <DropDownCategory
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
        <div className="flex gap-3">
          <Link className="bg-[#AAAAAA] w-6 h-6 flex items-center justify-center rounded">
            <SlSocialVkontakte size={15} />
          </Link>
          <Link className="bg-[#AAAAAA] w-6 h-6 flex items-center justify-center rounded">
            <BsTelegram size={15} className="opacity-50" />
          </Link>
          <Link className="bg-[#AAAAAA] w-6 h-6 flex items-center justify-center rounded">
            <FaPinterestP size={15} className="opacity-50" />
          </Link>
        </div>
      </div>
      <div className="w-full h-full py-6 flex items-center justify-between px-[140px] gap-20">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="w-full h-12 rounded-[48px] border-2 border-[#F1F1F1] flex items-center p-4">
          <LuSearch size={16} className="opacity-50" />
          <input
            type="search"
            placeholder="Поиск по каталогу"
            className="px-4 w-full h-10 outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <Link to="/heart" className="relative">
            <AiOutlineHeart size={30} />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#000] text-white rounded-[50%] transform translate-x-1/4 translate-y-1/4 flex justify-center items-center text-sm">
              {selectedProductsHeart.length}
            </div>
          </Link>
          <Link to="/basket" className="relative">
            <AiOutlineShoppingCart size={30} />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#000] text-white rounded-[50%] transform translate-x-1/4 translate-y-1/4 flex justify-center items-center text-sm">
              {selectedProducts.length}
            </div>
          </Link>
        </div>
      </div>
      <Breadcrumbs
        hideOnPaths={["/heart", "/basket"]}
        currentPath={location.pathname}
      />
    </nav>
  );
};

export default Navbar;
