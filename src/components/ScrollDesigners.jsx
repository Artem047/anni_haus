import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ScrollDesigners = ({ designImages }) => {
  const handleNext = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 350;
  };
  const handlePrev = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 350;
  };
  return (
    <div className="relative flex">
      <MdChevronLeft
        size={60}
        className="cursor-pointer hover:opacity-50 my-auto"
        onClick={handleNext}
      />
      <div
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        id="slider">
        {designImages.map((item, index) => (
          <img
            src={item.image}
            alt=""
            className="inline-block w-[350px] p-2 bg-cover bg-no-repeat rounded-2xl"
            key={index}
          />
        ))}
      </div>
      <MdChevronRight
        size={60}
        className="cursor-pointer hover:opacity-50 my-auto"
        onClick={handlePrev}
      />
    </div>
  );
};

export default ScrollDesigners;
