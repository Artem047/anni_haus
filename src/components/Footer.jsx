import { BsTelegram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] w-full h-full px-[140px]">
      <div className="py-12 flex gap-[220px]">
        <div>
          <h1 className="text-2xl font-semibold">Каталог</h1>
          <div className="flex flex-wrap gap-20 pt-6">
            <div className="flex flex-col gap-4">
              <Link className="animated-link" to="">
                Стулья
              </Link>
              <Link className="animated-link" to="">
                Кресла
              </Link>
              <Link className="animated-link" to="">
                Диваны
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link className="animated-link" to="">
                Столы
              </Link>
              <Link className="animated-link" to="">
                Пуфы
              </Link>
              <Link className="animated-link" to="">
                Шкафы
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">О компании</h1>
          <div className="flex flex-wrap gap-20 pt-6">
            <div className="flex flex-col gap-4">
              <a href="">О нас</a>
              <a href="">Бренды</a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Покупателям</h1>
          <div className="flex flex-wrap gap-20 pt-6">
            <div className="flex flex-col gap-4">
              <a href="">Доставка</a>
              <a href="">Оплата</a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Контакты</h1>
          <div className="flex flex-wrap gap-20 pt-6">
            <div className="flex flex-col gap-4">
              <a href="tel:8 800 551 01 60" className="text-2xl">
                8 800 551 01 60
              </a>
              <p>
                Сюда время работы, в которое можно <br /> звонить в магазин
              </p>
              <a href="email:info@annihaus.ru" target="blank">
                info@annihaus.ru
              </a>
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
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-gray-600 opacity-20" />
      <p className="opacity-90 text-[#3B3B3B] py-6">© Anni Haus, 2000-2022</p>
    </footer>
  );
};

export default Footer;
