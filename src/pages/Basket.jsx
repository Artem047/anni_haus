import { useSearchContext } from "./../context/SearchContext";
import { AiOutlineClose } from "react-icons/ai";

const Basket = () => {
  const { selectedProducts, removeFromBasket } = useSearchContext();

  return (
    <div className="px-[140px] mb-[220px]">
      <h1 className="text-xl">Корзина</h1>
      {selectedProducts.length > 0 ? (
        <ul className="flex flex-col gap-3 mt-5">
          {selectedProducts.map((product, index) => (
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
              <div className="flex gap-5 items-center">
                <span className="text-2xl">{product.price}</span>
                <button onClick={() => removeFromBasket(index)}>
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
    </div>
  );
};

export default Basket;
