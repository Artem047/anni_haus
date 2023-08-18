import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = current === slides.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  return (
    <div className="relative m-auto h-[555px] w-full flex justify-center">
      {slides.map((image, index) => (
        <img
          src={image.image}
          alt=""
          className={`absolute rounded-xl ${
            index === current ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
          key={index}
        />
      ))}
      <div
        className="drop-shadow-lg w-12 h-12 rounded-[50%] bg-[#fff] flex justify-center items-center top-[50%] absolute left-[10%] cursor-pointer"
        onClick={prevSlide}>
        <BsChevronLeft size={25} />
      </div>
      <div
        className="drop-shadow-lg w-12 h-12 rounded-[50%] bg-[#fff] flex justify-center items-center absolute top-[50%] right-[10%] cursor-pointer"
        onClick={nextSlide}>
        <BsChevronRight size={25} />
      </div>
    </div>
  );
};

export default ImageSlider;
