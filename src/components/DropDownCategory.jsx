import { Link } from "react-router-dom";
import { CategoryImages } from "../data/data";

const DropDownCategory = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="absolute bg-white w-[250px] h-[300px] left-[45%] top-[40px] z-30 rounded-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <ul className="flex flex-col gap-4 p-4 justify-center items-center">
        {CategoryImages.map((item, index) => (
          <Link
            to={`/catalog${item.path}`}
            key={index}
            className="animated-link uppercase">
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DropDownCategory;
