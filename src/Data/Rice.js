import  idlyrice from "../Assets/idlyrice.jpg";
import kambuimg from "../Assets/kambu.jpg";
import basmatirice from "../Assets/basmatirice.jpg";
import moongdall from "../Assets/moongdall.jpeg";
import toordall from "../Assets/toordall.jpg";
import aashirvad from "../Assets/aashirvadflour.jpg";
import fortune from "../Assets/fortune flour.jpg";
import idiyappam from "../Assets/idiyappam.jpg";
import nagaragi from "../Assets/naga ragi.jpg";
import aachiragi from "../Assets/aachi ragi.jpg";

const Rice = [
   {
    id: 31,
    name: "Idly Rice",
    category: "rice",
    image: idlyrice,

    originalPrice: 100,    
    price: 88,
    offer: "20% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 32,
    name: "Kambu",
    category: "rice",
    image: kambuimg,

    originalPrice: 50,    
    price: 45,
    offer: "10% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 33,
    name: "Basmati Rice",
    category: "rice",
    image: basmatirice,

    originalPrice: 120,    
    price: 100,
    offer: "20% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 34,
    name: "Moong Dall",
    category: "rice",
    image: moongdall,

    originalPrice: 20,    
    price: 18,
    offer: "15% OFF",

    unitOptions: ["500g", "1kg"]  
  },
{
    id: 35,
    name: "Toor Dall",
    category: "rice",
    image: toordall,

    originalPrice: 50,    
    price: 40,
    offer: "25% OFF",

    unitOptions: ["500g", "1kg"]  
  },
{
    id: 36,
    name: "Aashirvaad Flour",
    category: "rice",
    image: aashirvad,

    originalPrice: 55,    
    price: 50,
    offer: "2% OFF",

    unitOptions: ["500g", "1kg"]  
  }, 
  {
    id: 37,
    name: "Fortune Flour",
    category: "rice",
    image: fortune,

    originalPrice: 50,    
    price: 48,
    offer: "2% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 38,
    name: "Anil Idiyappam",
    category: "rice",
    image: idiyappam,

    originalPrice: 32,    
    price: 30,
    offer: "10% OFF",

    unitOptions: ["500g", "1kg"]  
  },
  {
    id: 39,
    name: "Naga Ragi Flour",
    category: "rice",
    image: nagaragi,

    originalPrice: 50,    
    price: 42,
    offer: "25% OFF",

    unitOptions: ["500g", "1kg"]  
  },
{
    id: 40,
    name: "Aachi Ragi Flour",
    category: "rice",
    image: aachiragi,

    originalPrice: 75,    
    price: 40,
    offer: "25% OFF",

    unitOptions: ["500g", "1kg"]  
  },
];

export default Rice;
