import  chakragold from "../Assets/chakragold.jpg";
import kannandevan from "../Assets/kannandevan.jpg";
import tajmahal from "../Assets/tajmahal.jpg";
import horlicks from "../Assets/horlicks.jpg";
import boost from "../Assets/boost.jpg";
import pepsi from "../Assets/pepsi.jpg";
import up from "../Assets/7up.jpg";
import maaza from "../Assets/maaza.jpeg";
import pannersoda from "../Assets/kalimark_panner_soda_500ml.jpg";
import manna from "../Assets/manna health mix.jpg";

const Tea = [
   {
    id: 41,
    name: "Chakra Gold",
    category: "tea",
    image: chakragold,

    originalPrice: 100,    
    price: 88,
    offer: "20% OFF",

    unitOptions: ["250g", "500g"]  
  },
  {
    id: 42,
    name: "Kannan Devan",
    category: "tea",
    image: kannandevan,

    originalPrice: 50,    
    price: 45,
    offer: "10% OFF",

    unitOptions: ["250g", "500g"]  
  },
  {
    id: 43,
    name: "Taj Mahal",
    category: "tea",
    image: tajmahal,

    originalPrice: 120,    
    price: 100,
    offer: "20% OFF",

    unitOptions: ["250g", "500g"]  
  },
  {
    id: 44,
    name: "Horlicks",
    category: "tea",
    image: horlicks,

    originalPrice: 200,    
    price: 180,
    offer: "15% OFF",

    unitOptions: ["250g", "500g"]  
  },
{
    id: 45,
    name: "Boost",
    category: "tea",
    image: boost,

    originalPrice: 250,    
    price: 240,
    offer: "25% OFF",

    unitOptions: ["250g", "500g"]  
  },
{
    id: 46,
    name: "Pepsi",
    category: "tea",
    image: pepsi,

    originalPrice: 55,    
    price: 50,
    offer: "2% OFF",

    unitOptions: ["500ml", "1l"]  
  }, 
  {
    id: 47,
    name: "7-up",
    category: "tea",
    image: up,

    originalPrice: 50,    
    price: 48,
    offer: "2% OFF",

    unitOptions: ["500ml", "1l"]  
  },
  {
    id: 48,
    name: "Paneer Soda",
    category: "tea",
    image: pannersoda,

    originalPrice: 32,    
    price: 30,
    offer: "10% OFF",

    unitOptions: ["500ml", "1l"]  
  },
  {
    id: 49,
    name: "Maaza",
    category: "tea",
    image: maaza,

    originalPrice: 50,    
    price: 42,
    offer: "25% OFF",

    unitOptions: ["500ml", "1l"]  
  },
{
    id: 50,
    name: "Manna Health Mix",
    category: "tea",
    image: manna,

    originalPrice: 75,    
    price: 40,
    offer: "25% OFF",

    unitOptions: ["500g", "1kg"]  
  },
];

export default Tea;
