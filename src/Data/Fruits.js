import apple from "../Assets/apple.jpeg";
import banana from "../Assets/banana.jpg";
import orange from "../Assets/orange.jpeg";
import mango from "../Assets/mango.jpeg";
import stawberry from "../Assets/starwberry.jpg";
import papaya from "../Assets/papaya.jpeg";
import grapes from "../Assets/grapes.jpg";
import guva from "../Assets/guva.jpeg";
import kiwi from "../Assets/kiwi.jpeg";
import fig from "../Assets/fig.jpg";

const Fruits = [
   {
    id: 1,
    name: "Apple",
    category: "fruits",
    image: apple,

    originalPrice: 150,    
    price: 120,
    offer: "20% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 2,
    name: "Banana",
    category: "fruits",
    image: banana,

    originalPrice: 100,    
    price: 98,
    offer: "10% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 3,
    name: "Orange",
    category: "fruits",
    image: orange,

    originalPrice: 120,    
    price: 100,
    offer: "20% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 4,
    name: "Mango",
    category: "fruits",
    image: mango,

    originalPrice: 200,    
    price: 180,
    offer: "15% OFF",

    unitOptions: ["500g", "1kg"]  
  },
{
    id: 5,
    name: "Strawberry",
    category: "fruits",
    image: stawberry,

    originalPrice: 250,    
    price: 200,
    offer: "25% OFF",

    unitOptions: ["500g", "1kg"]  
  },
{
    id: 6,
    name: "Papaya",
    category: "fruits",
    image: papaya,

    originalPrice: 50,    
    price: 45,
    offer: "2% OFF",

    unitOptions: ["500g", "1kg"]  
  }, 
  {
    id: 7,
    name: "Grapes",
    category: "fruits",
    image: grapes,

    originalPrice: 120,    
    price: 110,
    offer: "10% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 8,
    name: "Guava",
    category: "fruits",
    image: guva,

    originalPrice: 100,    
    price: 80,
    offer: "10% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 9,
    name: "Kiwi",
    category: "fruits",
    image: kiwi,

    originalPrice: 250,    
    price: 210,
    offer: "25% OFF",

    unitOptions: ["500g", "1kg"]  
  },
{
    id: 10,
    name: "Fig",
    category: "fruits",
    image: fig,

    originalPrice: 150,    
    price: 120,
    offer: "20% OFF",

    unitOptions: ["500g", "1kg"]  
  },
];

export default Fruits;
