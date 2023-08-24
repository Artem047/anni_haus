import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col cursor-pointer">
      <Link
        to={`/catalog/${product.categoryPath}/${product.id}`}
        className="flex flex-col">
        <img
          src={product.image}
          alt={product.name}
          className={`w-[250px] border-2 border-gray-500 rounded-2xl relative`}
        />
        <p className="text-lg pt-2">{product.name}</p>
        <span className="text-2xl">{product.price}</span>
      </Link>
    </div>
  );
};

export default ProductCard;
