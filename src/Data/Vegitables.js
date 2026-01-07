import tomato from "../Assets/tomato.jpg";
import onion from "../Assets/onion.jpeg";
import potato from "../Assets/potato.jpg";
import beetroot from "../Assets/beetroot.jpg";
import brinjal from "../Assets/brinjal.jpg";
import chowchow from "../Assets/chowchow.jpg";
import carrot from "../Assets/carrot.jpg";
import drumstick from "../Assets/drumstick.jpg";
import plaintain from "../Assets/plaintain.jpg";
import raddish from "../Assets/raddish.jpg";

const Vegitables = [
   {
    id: 11,
    name: "Tomato",
    category: "vegetables",
    image: tomato,

    originalPrice: 150,    
    price: 120,
    offer: "20% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 12,
    name: "Onion",
    category: "vegetables",
    image: onion,

    originalPrice: 100,    
    price: 98,
    offer: "10% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 13,
    name: "Potato",
    category: "vegetables",
    image: potato,

    originalPrice: 120,    
    price: 100,
    offer: "20% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 14,
    name: "Beetroot",
    category: "vegetables",
    image: beetroot,

    originalPrice: 200,    
    price: 180,
    offer: "15% OFF",

    unitOptions: ["500g", "1kg"]  
  },
{
    id: 15,
    name: "Brinjal",
    category: "vegetables",
    image: brinjal,

    originalPrice: 250,    
    price: 200,
    offer: "25% OFF",

    unitOptions: ["500g", "1kg"]  
  },
{
    id: 16,
    name: "Chow Chow",
    category: "vegetables",
    image: chowchow,

    originalPrice: 50,    
    price: 45,
    offer: "2% OFF",

    unitOptions: ["500g", "1kg"]  
  }, 
  {
    id: 17,
    name: "Carrot",
    category: "vegetables",
    image: carrot,

    originalPrice: 120,    
    price: 110,
    offer: "10% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 18,
    name: "Drumstick",
    category: "vegetables",
    image: drumstick,

    originalPrice: 100,    
    price: 80,
    offer: "10% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 19,
    name: "Plaintain",
    category: "vegetables",
    image: plaintain,

    originalPrice: 250,    
    price: 210,
    offer: "25% OFF",

    unitOptions: ["500g", "1kg"]  
  },
{
    id: 20,
    name: "Raddish",
    category: "vegetables",
    image: raddish,

    originalPrice: 75,    
    price: 40,
    offer: "25% OFF",

    unitOptions: ["500g", "1kg"]  
  },
];

export default Vegitables;
