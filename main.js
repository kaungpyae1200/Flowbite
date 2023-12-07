import { Carousel } from 'flowbite';
import './style.css'
// import "./node_modules/flowbite/dist/flowbite"


const slideUi = document.querySelector("#my-slide");
const slideNext =document.querySelector("#slideNext")


const slider = new Carousel(slideUi)


slideNext.addEventListener("click", () => {
    // console.log("u click");
    console.log(slider);
})