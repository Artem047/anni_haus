import { Link } from "react-router-dom";

const ProductPage = ({ product }) => {
  return (
    <div className="flex gap-10 flex-wrap cursor-pointer">
      {product.items.map((item, index) => (
        <div key={index}>
          <Link to={`/catalog/${product.categoryPath}/${item.id}`}>
            <img
              src={item.images[0].image}
              alt={item.title}
              className={`w-[250px] h-[250px] border-2 border-gray-500 rounded-2xl relative`}
            />
            <p className="text-lg pt-2">{item.title}</p>
            <span className="text-2xl">{item.price}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
