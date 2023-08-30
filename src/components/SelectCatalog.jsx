import { Link } from "react-router-dom";
import { CategoryImages } from "../data/data";
import { useState } from "react";
import { BsArrowRightSquare } from "react-icons/bs";
import { useSearchContext } from "./../context/SearchContext";

const SelectCatalog = () => {
  const { searchQuery } = useSearchContext();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleOverMouse = (index) => {
    setHoveredCategory(index);
  };

  const handleOutMouse = () => {
    setHoveredCategory(null);
  };
  const filteredCatalog = CategoryImages.filter((category) => {
    return category.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div className="flex flex-wrap gap-10 mx-auto justify-center max-w-[1160px] w-full my-10">
        {filteredCatalog.map((category, index) => (
          <Link
            to={`/catalog${category.path}`}
            key={index}
            className="w-[360px] h-[180px] bg-[#F1F1F1] relative"
            onMouseOver={() => handleOverMouse(index)}
            onMouseOut={handleOutMouse}>
            <img
              src={category.categoryImg}
              alt=""
              className="w-[200px] absolute top-0 left-0"
            />
            <p className="absolute bottom-5 right-10 text-xl">
              {category.title}
            </p>
            {hoveredCategory === index && (
              <div className="absolute bg-[#a0a0a0a9] w-[360px] h-[180px] flex justify-center items-center gap-2">
                <p className="text-2xl">Подробнее</p>
                <BsArrowRightSquare size={35} />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectCatalog;
