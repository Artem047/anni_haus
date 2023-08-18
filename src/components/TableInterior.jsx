import { useState } from "react";
import VectorA from "../images/VectorA.svg";
import interior1 from "../images/interior1.png";
import interior2 from "../images/interior2.png";
import interior3 from "../images/interior3.png";
import interior4 from "../images/interior4.png";

import chair from "../images/categories/chair.png";
import armchair from "../images/categories/armchair.png";
import sofa from "../images/categories/sofa.png";
import table from "../images/categories/table.png";

const TableInterior = () => {
  return (
    <div className="my-24">
      <h2 className="text-5xl">Ваши интерьеры</h2>
      <div className="flex gap-2 mt-6">
        <div className="flex flex-col gap-2">
          <div className="bg-[#4A5656] w-[460px] h-[235px] relative">
            <img src={VectorA} alt="" className="absolute right-0" />
            <p className="text-white absolute bottom-6 left-6 text-xl">
              Присылайте фотографии мебели в вашем <br /> интерьере, и мы
              разместим их на сайте.
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(${interior3})`,
            }}
            className={`w-[460px] h-[650px] bg-no-repeat bg-center bg-cover`}>
            <div className="w-full h-full flex gap-1 p-2 items-end">
              <div className="bg-white w-[96px] h-[125px] rounded-lg flex justify-center items-center">
                <img src={chair} alt="" />
              </div>
              <div className="h-[125px] flex flex-col justify-center items-center rounded-lg bg-[#242424] p-4 text-white opacity-70 ">
                <p>
                  Сет из 4 стульев Ginger <br /> с мягким сиденьем
                </p>
                <span className="text-xl">21 990 ₽</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pl-2 gap-2">
          <div className="flex gap-2">
            <div
              style={{
                backgroundImage: `url(${interior1})`,
              }}
              className="w-[390px] h-[475px] bg-no-repeat bg-center bg-cover">
              <div className="w-full h-full flex gap-1 p-2 items-end">
                <div className="bg-white w-[96px] h-[125px] rounded-lg flex justify-center items-center">
                  <img src={armchair} alt="" />
                </div>
                <div className="h-[125px] flex flex-col justify-center items-center rounded-lg bg-[#242424] p-4 text-white opacity-70 ">
                  <p>
                    Ginger: уютное кресло <br /> с мягким сиденьем.
                  </p>
                  <span className="text-xl">6 990 ₽</span>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${interior2})`,
              }}
              className="w-[290px] h-[475px] bg-no-repeat bg-center bg-cover">
              <div className="w-full h-full flex gap-1 p-2 items-end">
                <div className="bg-white w-[96px] h-[125px] rounded-lg flex justify-center items-center">
                  <img src={sofa} alt="" />
                </div>
                <div className="h-[125px] flex flex-col justify-center items-center rounded-lg bg-[#242424] p-4 text-white opacity-70 ">
                  <p>
                    CozyComfort: диван <br /> с мягким сиденьем.
                  </p>
                  <span className="text-xl">40 990 ₽</span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${interior4})`,
            }}
            className="w-[690px] h-[410px] bg-no-repeat bg-center bg-cover">
            <div className="w-full h-full flex gap-1 p-2 items-end">
              <div className="bg-white w-[96px] h-[125px] rounded-lg flex justify-center items-center">
                <img src={table} alt="" />
              </div>
              <div className="h-[125px] flex flex-col justify-center items-center rounded-lg bg-[#242424] p-4 text-white opacity-70 ">
                <p>
                  EleganceCraft: стильный и <br /> надежный стол.
                </p>
                <span className="text-xl">13 990 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableInterior;
