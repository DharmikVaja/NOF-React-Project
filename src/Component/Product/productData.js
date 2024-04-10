import ProImg1 from "../../../src/assets/product/pro1.png";
import ProImg2 from "../../../src/assets/product/pro2.png";
import ProImg3 from "../../../src/assets/product/pro3.png";
import ProImg4 from "../../../src/assets/product/pro4.png";
import ProImg5 from "../../../src/assets/product/pro5.png";
import ProImg6 from "../../../src/assets/product/Pro6.png";

const SClass = localStorage.getItem("selectedClass:")
const productData = [
  {
    id: 1,
    name: "International Hindi Olympiad",
    // class: {SClass},
    img: ProImg5,
    amount: 300,
  },
  {
    id: 2,
    name: "International Maths Olympiad",
    img: ProImg3,
    // class: {SClass},
    amount: 300,
  },
  {
    id: 3,
    name: "International English Olympiad",
    // class: {SClass},
    img: ProImg2,
    amount: 300,
  },
  {
    id: 4,
    name: "International GK Olympiad",
    // class: {SClass},
    img: ProImg6,
    amount: 300,
  },
  {
    id: 5,
    name: "MTSE- Hindi ",
    // class: {SClass},
    img: ProImg4,
    amount: 300,
  },
  {
    id: 6,
    name: "International Science Olympiad",
    // class: {SClass},
    img: ProImg1,
    amount: 300,
  },
  {
    id: 7,
    name: "International Quiz Olympiad",
    // class: {SClass},
    img: ProImg6,
    amount: 300,
  },
  {
    id: 8,
    name: "International Aptitude Olympiad",
    // class: {SClass},
    img: ProImg3,
    amount: 300,
  },
  {
    id: 9,
    name: "MTSE- English",
    // class: {SClass},
    img: ProImg4,
    amount: 300,
  },
  {
    id: 10,
    name: "MTSE- Marathi",
    // class: {SClass},
    img: ProImg4,
    amount: 300,
  },
];
export default productData;
