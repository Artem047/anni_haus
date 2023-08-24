import { Link, useParams } from "react-router-dom";
import { CategoryImages } from "../data/data";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import size1 from "../images/size/size1.png";
import size2 from "../images/size/size2.png";
import size3 from "../images/size/size3.png";
import size4 from "../images/size/size4.png";

const ProductPage = () => {
  const { categoryPath, productId } = useParams();
  const navigate = useNavigate();

  const currentCategory = CategoryImages.find(
    (item) => item.path === `/${categoryPath}`
  );
  const product = currentCategory?.product.find(
    (item) => item.id === productId
  );

  const goCatalog = () => {
    navigate("/catalog");
  };

  return (
    <div className="px-[140px]">
      <button className="flex items-center my-5" onClick={goCatalog}>
        <BsArrowLeft size={30} />
        <p className="text-xl pl-2">Вернуться в каталог</p>
      </button>
      {product && (
        <div className="flex gap-10">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-[560px] border"
            />
            <button className="absolute top-[50%] left-0 w-12 h-12 ">
              <BsChevronLeft size={50} />
            </button>
            <button className="absolute top-[50%] right-0 w-12 h-12 ">
              <BsChevronRight size={50} />
            </button>
          </div>

          <div className="pl-5">
            <h1 className="text-3xl">{product.name}</h1>
            <div className=" my-5">
              <p className="w-[500px]">{product.description}</p>
              <ul className="grid grid-cols-2 grid-rows-2 my-5">
                <li>
                  <b>Производитель:</b> {product.manufacturer}
                </li>
                <li>
                  <b>Гарантия:</b> {product.guarantee}
                </li>
                <li>
                  <b>Страна:</b> {product.country}
                </li>
                <li>
                  <b>Срок поставки:</b> {product.delivery}
                </li>
              </ul>
              <ul className="flex gap-10">
                <li>
                  <img src={size1} alt="" />
                  <p className="text-center">{product.size[0].back}</p>
                </li>
                <li>
                  <img src={size2} alt="" />
                  <p className="text-center">{product.size[0].seat}</p>
                </li>
                <li>
                  <img src={size3} alt="" />
                  <p className="text-center">{product.size[0].stand}</p>
                </li>
                <li>
                  <img src={size4} alt="" />
                  <p className="text-center">{product.size[0].before}</p>
                </li>
              </ul>
            </div>
            <p className="text-2xl">Цена: {product.price}</p>
            <div className="flex gap-3 mt-5">
              <button className="uppercase w-[260px] rounded-lg bg-black text-white p-4 hover:bg-gray-400 hover:text-black font-extralight">
                В корзину
              </button>
              <button className="uppercase w-[260px] rounded-lg border border-black text-black p-4 hover:bg-red-600 font-extralight hover:border-transparent hover:text-white">
                Избранное
              </button>
            </div>
            <h2 className="text-xl font-semibold mt-6 mb-4">
              Связаться с менеджером
            </h2>
            <div className="flex gap-5">
              <Link
                to="https://whatsapp.com/"
                target="blank"
                className="w-10 h-10 rounded-lg bg-green-500 flex justify-center items-center">
                <BsWhatsapp size={25} color="white" />
              </Link>
              <Link
                to="https://t.me/"
                target="blank"
                className="w-10 h-10 rounded-lg bg-blue-400 flex justify-center items-center">
                <BsTelegram size={25} color="white" />
              </Link>
              <Link
                to="https://viber.com/"
                target="blank"
                className="w-10 h-10 rounded-lg bg-purple-600 flex justify-center items-center">
                <FaViber size={25} color="white" />
              </Link>
            </div>

            {/*<span>{product.description}</span>*/}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
