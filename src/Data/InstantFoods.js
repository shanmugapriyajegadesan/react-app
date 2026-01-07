import maggi from "../Assets/maggi.jpg";
import yippee from "../Assets/yippee.jpg";
import choco from "../Assets/chocos moons.jpeg";
import act2 from "../Assets/act2.jpg";
import cornflakes from "../Assets/corn flakes.jpg";
import dalpowder from "../Assets/sakthi dall.jpg";
import tamarindpowder from "../Assets/achi tamarind.jpg";
import anil from "../Assets/anil kambu.jpg";
import kimchi from "../Assets/korean kimchi.jpeg";
import knorr from "../Assets/knorr.png";

const InstantFoods = [
   {
    id: 21,
    name: "Maggii",
    category: "instantfoods",
    image: maggi,

    originalPrice: 10,    
    price: 8,
    offer: "20% OFF",

    unitOptions: ["1pc", "10pc"]  
  },
  {
    id: 22,
    name: "Yippee",
    category: "instantfoods",
    image: yippee,

    originalPrice: 10,    
    price: 8,
    offer: "10% OFF",

    unitOptions: ["1pc", "10pc"]  
  },
  {
    id: 23,
    name: "Chocos",
    category: "instantfoods",
    image: choco,

    originalPrice: 120,    
    price: 100,
    offer: "20% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 24,
    name: "Act-II",
    category: "instantfoods",
    image: act2,

    originalPrice: 20,    
    price: 18,
    offer: "15% OFF",

    unitOptions: ["1pc", "10pc"]  
  },
{
    id: 25,
    name: "Corn Flaks",
    category: "instantfoods",
    image: cornflakes,

    originalPrice: 250,    
    price: 200,
    offer: "25% OFF",

    unitOptions: ["500g", "1kg"]  
  },
{
    id: 26,
    name: "Sakthi Dall Powder",
    category: "instantfoods",
    image: dalpowder,

    originalPrice: 15,    
    price: 12,
    offer: "2% OFF",

    unitOptions: ["1pc", "10pc"]  
  }, 
  {
    id: 27,
    name: "Aachi Tamarind Powder",
    category: "instantfoods",
    image: tamarindpowder,

    originalPrice: 12,    
    price: 10,
    offer: "10% OFF",

    unitOptions: ["1pc", "10pc"]  
  },
  {
    id: 28,
    name: "Anil Kambu Vermicilli",
    category: "instantfoods",
    image: anil,

    originalPrice: 100,    
    price: 80,
    offer: "10% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 29,
    name: "Korean Kimchi",
    category: "instantfoods",
    image: kimchi,

    originalPrice: 250,    
    price: 210,
    offer: "25% OFF",

    unitOptions: ["500g", "1kg"]  
  },
{
    id: 30,
    name: "Knorr Soup",
    category: "instantfoods",
    image: knorr,

    originalPrice: 75,    
    price: 40,
    offer: "25% OFF",

    unitOptions: ["1pc", "10pc"]  
  },
];

export default InstantFoods;
