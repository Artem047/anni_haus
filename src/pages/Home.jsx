import ImageSlider from "../components/ImageSlider";
import { DesignImages, SlidesImages } from "./../data/data";
import production from "../images/production.png";
import TableInterior from "../components/TableInterior";
import ScrollDesigners from "../components/ScrollDesigners";
import img from "../images/img.jpg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import SelectCatalog from "../components/SelectCatalog";

const Home = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full px-[140px]">
      <ImageSlider slides={SlidesImages} />
      <SelectCatalog />
      <div>
        <h1 className="text-5xl mt-24">Производство</h1>
        <p className="text-[#3B3B3B] opacity-80 mt-10">
          ANNI HAUS входит в состав холдинга Premier Group – группу торговых
          <br /> и производственных компаний с уникальным конструкторским бюро.
          <br /> Мебельная фабрика полного цикла находится в Санкт-Петербурге.
        </p>
        <div className="mt-8 flex gap-5">
          <img src={production} alt="" />
          <img src={production} alt="" />
          <img src={production} alt="" />
          <img src={production} alt="" />
        </div>
      </div>
      <TableInterior />
      <div className="my-24">
        <h1 className="text-5xl text-center">
          Дизайнерские проекты <br /> с мебелью Anni Haus
        </h1>
        <ScrollDesigners designImages={DesignImages} />
      </div>
      <div className="my-24">
        <h1 className="text-5xl">Дизайнерская мебель Anni Haus</h1>
        <p className="text-xl opacity-80 py-6">
          Вы ищете крупный мебельный салон, где можно приобрести стильную,
          удобную <br /> и надежную мебель разных стилей по наиболее выгодным
          ценам? <br /> <br /> Мебельный салон Anni Haus предлагает широкий
          выбор столов и стульев <br /> для дома по самым конкурентоспособным
          ценам. Приглашаем Вас в шоу-румы <br />
          расположенные разных районах Москвы и Санкт-Петербурга.
        </p>
        <button className="flex items-center animated-link mb-8">
          <span>Узнать больше</span>
          <HiOutlineArrowNarrowRight size={20} className="ml-2" />
        </button>
        <img src={img} alt="" />
      </div>
      {showBtn && (
        <BsArrowUpSquareFill
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 cursor-pointer hover:opacity-50"
          size={60}
        />
      )}
    </div>
  );
};

export default Home;
