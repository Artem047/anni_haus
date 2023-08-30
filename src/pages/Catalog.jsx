import { Link, useParams } from "react-router-dom";
import SelectCatalog from "../components/SelectCatalog";
import { useEffect, useState } from "react";
import { CategoryImages } from "../data/data";
import ProductPage from "./ProductPage";
import { dataFurniture } from "../data/utils/dataFurniture";

const Catalog = () => {
  const { categoryPath } = useParams();

  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentsPage, setCurrentsPage] = useState(false);

  useEffect(() => {
    const currentPage = CategoryImages.find(
      (item) => item.path === `/${categoryPath}`
    );
    if (currentPage) {
      setCurrentCategory(currentPage);
      setCurrentsPage(true);
    } else {
      setCurrentCategory(null);
      setCurrentsPage(false);
    }
  }, [categoryPath]);

  return (
    <div className="px-[140px]">
      {currentsPage ? (
        <div>
          {currentCategory && (
            <div className="flex justify-center">
              <div className="flex gap-10 my-10 flex-wrap max-w-[1200px]">
                {currentCategory.product.map((product, index) => (
                  <ProductPage
                    key={index}
                    product={{ ...product, categoryPath }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <SelectCatalog />
        </>
      )}
    </div>
  );
};

export default Catalog;
