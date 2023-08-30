import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { CategoryImages } from "../data/data";
import {
  BsArrowLeft,
  BsWhatsapp,
  BsTelegram,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { useState } from "react";
import { useSearchContext } from "./../context/SearchContext";

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { categoryPath, productId } = useParams();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Описание");
  const { addToBasket, addToHeart } = useSearchContext();

  const handleAddToHeart = () => {
    addToHeart(product);
  };

  const handleAddToBasket = () => {
    addToBasket(product);
  };

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const nextSlide = () => {
    var slider = document.getElementById("slider");
    const nextIndex = (currentImage + 1) % product.images.length;

    if (nextIndex === 0) {
      slider.scrollLeft = 0;
    } else {
      slider.scrollLeft = slider.scrollLeft + 350;
    }

    setCurrentImage(nextIndex);
  };

  const prevSlide = () => {
    var slider = document.getElementById("slider");
    const prevIndex =
      (currentImage - 1 + product.images.length) % product.images.length;

    if (prevIndex === 0) {
      slider.scrollLeft = 0;
    } else {
      slider.scrollLeft = slider.scrollLeft + 350;
    }
    setCurrentImage(prevIndex);
  };

  const currentCategory = CategoryImages.find(
    (item) => item.path === `/${categoryPath}`
  );

  let product = null;

  if (currentCategory) {
    currentCategory.product.forEach((categoryProduct) => {
      categoryProduct.items.forEach((item) => {
        if (item.id === Number(productId)) {
          product = item;
        }
      });
    });
  }
  const goCatalog = () => {
    navigate(-1);
  };

  return (
    <div className="px-[140px] mb-10">
      <button
        onClick={goCatalog}
        className="flex items-center gap-2 text-xl my-5">
        <BsArrowLeft size={30} />
        <p>Вернуться в каталог</p>
      </button>
      {product && (
        <div>
          <section className="flex gap-10">
            <div className="relative">
              {product.images.map((img, i) => (
                <img
                  src={img.image}
                  alt=""
                  key={i}
                  className={`w-[560px] h-[600px] border ${
                    i === currentImage ? "block" : "hidden"
                  }`}
                />
              ))}
              <button
                className="absolute bottom-[45%] left-2 w-12 h-12 rounded-[50%] shadow-md bg-white flex justify-center items-center"
                onClick={prevSlide}>
                <BsChevronLeft size={25} />
              </button>
              <button
                className="absolute bottom-[45%] right-2 w-12 h-12 rounded-[50%] shadow-md bg-white flex justify-center items-center"
                onClick={nextSlide}>
                <BsChevronRight size={25} />
              </button>
            </div>
            <div>
              <h1 className="text-3xl font-semibold">{product.title}</h1>
              <p className="w-[530px] py-2">{product.desc}</p>
              {product.options.map((option, index) => (
                <ul className="grid grid-cols-2 grid-rows-2 py-5" key={index}>
                  <li className="flex gap-2">
                    <b>Производитель:</b> <p>{option.manufacturer}</p>
                  </li>
                  <li className="flex gap-2">
                    <b>Страна:</b> <p>{option.country}</p>
                  </li>
                  <li className="flex gap-2">
                    <b>Гарантия:</b> <p>{option.guarantee}</p>
                  </li>
                  <li className="flex gap-2">
                    <b>Срок поставки:</b> <p>{option.delivery}</p>
                  </li>
                </ul>
              ))}
              {product.size.map((size, i) => (
                <ul key={i} className="mb-5">
                  <li>Длина (мм) - {size.length}</li>
                  <li>Глубина (мм) - {size.depth}</li>
                  <li>Высота (мм) - {size.height}</li>
                </ul>
              ))}
              <span className="text-2xl">Цена: {product.price}</span>
              <div className="flex gap-5 my-5">
                <button
                  onClick={handleAddToBasket}
                  className="w-[250px] h-[60px] uppercase bg-black rounded-lg text-white hover:bg-gray-400 hover:text-black">
                  в корзину
                </button>
                <button
                  onClick={handleAddToHeart}
                  className="w-[250px] h-[60px] uppercase border border-black rounded-lg text-black hover:border-transparent hover:bg-red-600 hover:text-white">
                  избранное
                </button>
              </div>
              <h1 className="text-xl">Связаться с менеджером</h1>
              <div className="flex gap-5 my-2">
                <Link
                  to="https://whatsapp.com/"
                  target="blank"
                  className="w-10 h-10 bg-green-400 rounded-md flex justify-center items-center">
                  <BsWhatsapp size={25} color="white" />
                </Link>
                <Link
                  to="https://t.me/whatsapp"
                  target="blank"
                  className="w-10 h-10 bg-blue-400 rounded-md flex justify-center items-center">
                  <BsTelegram size={25} color="white" />
                </Link>
                <Link
                  to="https://viber.com/ru/"
                  target="blank"
                  className="w-10 h-10 bg-purple-600 rounded-md flex justify-center items-center">
                  <FaViber size={25} color="white" />
                </Link>
              </div>
            </div>
          </section>
          <section className="flex gap-10">
            <div
              className="flex gap-2 my-5 w-[560px] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
              id="slider">
              {product.images.map((img, i) => (
                <img
                  src={img.image}
                  alt=""
                  key={i}
                  className={`w-[160px] h-[160px] border inline-block ${
                    i === currentImage ? "border-2 border-gray-500" : ""
                  }`}
                />
              ))}
            </div>
            <div>
              <ul className="border-b flex justify-center gap-14 text-xl">
                <li>
                  <NavLink
                    className={selectedTab === "Описание" ? "active-link" : ""}
                    onClick={() => handleTabClick("Описание")}>
                    Описание
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={selectedTab === "Доставка" ? "active-link" : ""}
                    onClick={() => handleTabClick("Доставка")}>
                    Доставка
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={selectedTab === "Оплата" ? "active-link" : ""}
                    onClick={() => handleTabClick("Оплата")}>
                    Оплата
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={selectedTab === "Гарантия" ? "active-link" : ""}
                    onClick={() => handleTabClick("Гарантия")}>
                    Гарантия
                  </NavLink>
                </li>
              </ul>
              <ul className="mt-5">
                <li className="w-[650px]">
                  {selectedTab === "Описание" && <p>{product.description}</p>}
                  {selectedTab === "Доставка" && (
                    <div>
                      <p>
                        Компания <b>{product.options[0].manufacturer}</b>{" "}
                        предоставляет возможность доставки стульев по России с
                        согласованием удобного для вас времени. Для жителей
                        Санкт-Петербурга и Москвы действуют специальные тарифы
                        на доставку и монтаж. Стоимость доставки в другие
                        регионы России рассчитывается индивидуально.
                      </p>
                    </div>
                  )}
                  {selectedTab === "Оплата" && (
                    <div>
                      <p className="mb-6">
                        Чтобы упростить покупку мебели в{" "}
                        <b> {product.options[0].manufacturer}</b>, мы предлагаем
                        наиболее удобный для каждого клиента способ оплаты. Вы
                        можете оплатить свой заказ следующими способами.
                      </p>
                      <b>Банковским переводом</b>
                      <p className="mb-6">
                        Оплата банковским переводом по счету возможна как для
                        юридических, так и для физических лиц. После получения
                        денежных средств клиенту предоставляется вся первичная
                        документация. В этом случае банк может взимать комиссию
                        от 3% до 5% от суммы заказа.
                      </p>
                      <b>Оплата картой онлайн через ПАО Сбербанк</b>
                      <p>
                        Безопасный, быстрый платеж без комиссии. После
                        согласования заказа с нашим менеджером вам на почту
                        приходит подтверждение заказа (заказ-наряд) и отдельным
                        письмом ссылка на оплату через систему электронных
                        платежей ПАО Сбербанк. При оплате картой онлайн
                        пользователь подтверждает свое согласие с Политикой
                        конфиденциальности сайта и Правилами торговли
                        интернет-магазина.
                      </p>
                      <p>{product.paymentInfo}</p>
                    </div>
                  )}
                  {selectedTab === "Гарантия" && (
                    <div>
                      <b>
                        Гарантия на нашу продукцию действует в течение{" "}
                        {product.options[0].guarantee}
                      </b>
                      <p>
                        Став нашим клиентом, вы гарантированно получаете не
                        только высокое качество изделий, но и удобную сервисную
                        поддержку. Команда {product.options[0].manufacturer}{" "}
                        сделает все возможное, чтобы каждый клиент компании был
                        доволен сотрудничеством с нами.
                      </p>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
