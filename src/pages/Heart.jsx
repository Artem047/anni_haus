import { AiOutlineClose } from "react-icons/ai";
import { useSearchContext } from "../context/SearchContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Heart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Phone: "",
      Email: "",
    },
  });
  const [showModal, setShowModal] = useState(false);
  const { selectedProductsHeart, removeFromHeart } = useSearchContext();

  const onSubmit = (data) => console.log(data);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="px-[140px] mb-[220px]">
      <h1 className="text-xl">Корзина</h1>
      {selectedProductsHeart.length > 0 ? (
        <ul className="flex flex-col gap-3 mt-5">
          {selectedProductsHeart.map((product, index) => (
            <li
              key={index}
              className="flex items-center justify-between gap-10 border">
              <div className="flex items-center">
                <img
                  src={product.images[0].image}
                  alt=""
                  className="w-[100px]"
                />
                <p className="text-xl font-semibold">{product.title}</p>
              </div>
              <div>
                <button
                  onClick={openModal}
                  className="border border-black w-[200px] rounded-md h-12">
                  Купить в 1 клик
                </button>
              </div>
              <div className="flex gap-5 items-center">
                <span className="text-2xl">{product.price}</span>
                <button onClick={() => removeFromHeart(index)}>
                  <AiOutlineClose size={40} color="red" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-2xl text-center my-40">
          Ваша корзина еще пуста. Добавьте товары в корзину для оформления
          заказа.
        </p>
      )}
      {showModal && (
        <div className="fixed top-0 inset-0 bg-black bg-opacity-50 z-50 left-0 w-full h-full px-[700px] py-[150px]">
          <div className="bg-white w-full h-full relative rounded-md">
            <button className="absolute right-0 p-3" onClick={closeModal}>
              <AiOutlineClose size={24} color="black" />
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="px-10 pt-14">
              <label>Имя</label>
              <input
                {...register("Name", { required: "Это обязательное поле" })}
                placeholder="Имя"
                type="text"
                className="w-full h-10 border border-gray-400 rounded-md outline-none p-3 mb-3"
              />
              <p className="text-red-500">{errors.Name?.message}</p>
              <label>Номер телефона</label>
              <input
                {...register("Phone", { required: "Это обязательное поле" })}
                placeholder="Номер телефона"
                type="phone"
                className="w-full h-10 border border-gray-400 rounded-md outline-none p-3 mb-3"
              />
              <p className="text-red-500">{errors.Phone?.message}</p>
              <label>E-mail</label>
              <input
                {...register("Email", { required: "Это обязательное поле" })}
                placeholder="Почта"
                type="email"
                className="w-full h-10 border border-gray-400 rounded-md outline-none p-3 mb-3"
              />
              <p className="text-red-500">{errors.Email?.message}</p>
              <label>Комментарий</label>
              <textarea
                {...register("Message", { required: "Это обязательное поле" })}
                placeholder="Введите свое сообщение..."
                className="w-full h-[140px] border border-gray-400 rounded-md outline-none p-3"></textarea>
              <button
                type="submit"
                className="bg-[#555555] w-full h-12 text-center rounded-md mt-4 text-white">
                Отправить
              </button>
              <p className="text-[12px] text-[#AAA] mt-2">
                Нажимая на кнопку «Отправить», Вы соглашаетесь с{" "}
                <Link to="" className="text-[#1A453E]">
                  Политикой конфиденциальности
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Heart;
