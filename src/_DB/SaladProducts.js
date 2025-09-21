
import SaladWithCheese from "../../assets/Salad/SaladwithCheese01.jpg";
import Buckwheat from "../../assets/Salad/buckwheat02.jpg";
import Greek from "../../assets/Salad/greek01.jpg";

import salad from "../../assets/Categories/salad.png";

import onion from "../../assets/Salad/onion.jpg";
import lettuce from "../../assets/Order/lettuce.png";
import olive from "../../assets/Order/olive.png";
import egg from "../../assets/Order/egg.png";
import tomato from "../../assets/Order/tomato.png";


export const dataSalad = [
  {
    name: "Salad",
    image: salad,
  }];


export const mockGrillSalad = [
  {
    name: "vegetable salad with cheese",
    image: SaladWithCheese,
    category:"Salad",
    id: "_1",
    price: 12,
    delivery_time: "10 mins",
    dietary: "Vegan",
    rating: 1,
    popular: "Deals",
    subText: "Cheese, Olive oil, Vegetables",
    ingridients: [
      {
        name: "Onion",
        image: onion,
      },
      {
        name: "Lettuce",
        image: lettuce,
      },
      {
        name: "Olive Oil",
        image: olive,
      },
      {
        name: "Egg",
        image: egg,
      },
      {
        name: "Tomato",
        image: tomato,
      },
    ],
  },
 {
    name: "Buckwheat salad with lamb's lettuce",
    image: Buckwheat,
    id: "_2",
    category:"Salad",
    price: 8,
    delivery_time: "10 mins",
    dietary: "Vegan",
    rating: 1,
    popular: "Deals",
    subText: " Olive oil, Vegetables",
    ingridients: [
      {
        name: "Onion",
        image: onion,
      },
      {
        name: "Lettuce",
        image: lettuce,
      },
      {
        name: "Olive Oil",
        image: olive,
      },
      {
        name: "Egg",
        image: egg,
      },
      {
        name: "Tomato",
        image: tomato,
      },
    ],
  },
 {
    name: "Fresh greek salad with feta cheese",
    image: Greek,
    id: "_3",
    category:"Salad",
    price: 8,
    delivery_time: "10 mins",
    dietary: "Vegan",
    rating: 1,
    popular: "Deals",
    subText: "Olive oil, Vegetables",
    ingridients: [
      {
        name: "Onion",
        image: onion,
      },
      {
        name: "Lettuce",
        image: lettuce,
      },
      {
        name: "Olive Oil",
        image: olive,
      },
      {
        name: "Egg",
        image: egg,
      },
      {
        name: "Tomato",
        image: tomato,
      },
    ],
  }
]






