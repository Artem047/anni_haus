import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";

import chair from "../images/categories/chair.png";
import armchair from "../images/categories/armchair.png";
import poufs from "../images/categories/poufs.png";
import sofa from "../images/categories/sofa.png";
import table from "../images/categories/table.png";
import wardrobe from "../images/categories/wardrobe.png";

import design1 from "../images/design/design1.png";
import design2 from "../images/design/design2.png";
import design3 from "../images/design/design3.png";
import design4 from "../images/design/design4.png";
import design5 from "../images/design/design5.png";
import design6 from "../images/design/design6.png";
import design7 from "../images/design/design7.png";
import design8 from "../images/design/design8.png";
import { dataFurniture } from "./utils/dataFurniture";

export const SlidesImages = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
];

export const CategoryImages = [
  {
    categoryImg: chair,
    title: "Стулья",
    path: "/chair",
    product: dataFurniture.filter((item) => item.category === "Стулья"),
  },
  {
    categoryImg: armchair,
    title: "Кресла",
    path: "/armchair",
    product: dataFurniture.filter((item) => item.category === "Кресла"),
  },
  {
    categoryImg: sofa,
    title: "Диваны",
    path: "/sofa",
    product: dataFurniture.filter((item) => item.category === "Диваны"),
  },
  {
    categoryImg: table,
    title: "Столы",
    path: "/table",
    product: dataFurniture.filter((item) => item.category === "Столы"),
  },
  {
    categoryImg: poufs,
    title: "Пуфы",
    path: "/poufs",
    product: dataFurniture.filter((item) => item.category === "Пуфы"),
  },
  {
    categoryImg: wardrobe,
    title: "Шкафы",
    path: "/wardrobe",
    product: dataFurniture.filter((item) => item.category === "Шкафы"),
  },
];

export const DesignImages = [
  {
    image: design1,
    text: "Название проекта или интерьера в две строки",
  },
  {
    image: design2,
    text: "Название проекта или интерьера в две строки",
  },
  {
    image: design3,
    text: "Название проекта или интерьера в две строки",
  },
  {
    image: design4,
    text: "Название проекта или интерьера в две строки",
  },
  {
    image: design5,
    text: "Название проекта или интерьера в две строки",
  },
  {
    image: design6,
    text: "Название проекта или интерьера в две строки",
  },
  {
    image: design7,
    text: "Название проекта или интерьера в две строки",
  },
  {
    image: design8,
    text: "Название проекта или интерьера в две строки",
  },
];
