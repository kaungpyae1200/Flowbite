import { Carousel } from 'flowbite';
import { Drawer,  Dropdown,  Modal } from 'flowbite';
import './style.css'
// import "./node_modules/flowbite/dist/flowbite"
const modalBtn = document.querySelector("#modalBtn");
const modalUi = document.querySelector("#my-modal");
const drawerBtn = document.querySelector("#drawerBtn");
const drawerUi = document.querySelector("#my-drawer");



const dropDownBtn = document.querySelector("#dropDownBtn");
const dropdownUi = document.querySelector("#my-dropdown");


const dropdown = new Dropdown (dropdownUi)
dropDownBtn.addEventListener("click",() => {
    dropdown.show();
})




const drawer = new Drawer (drawerUi)
drawerBtn.addEventListener("click",() => {
    drawer.show()
});




const options = {
    backdrop:  'static',
}


const modal = new Modal(modalUi,options)


modalBtn.addEventListener("click",() => {
    modal.show()
})
// const slideUi = document.querySelector("#my-slide");
// const slideNext =document.querySelector("#slideNext");
// const items = [
//     {
//         position: 0,
//         el: document.getElementById('my-slide-1'),
//     },
//     {
//         position: 1,
//         el: document.getElementById('my-slide-2'),
//     },
//     {
//         position: 2,
//         el: document.getElementById('my-slide-3'),
//     },
//     {
//         position: 3,
//         el: document.getElementById('my-slide-4'),
//     },
// ];

// const uSlideUi =document.querySelector("#next-slide");
// const uSlideItems = [
//     {
//         position: 0,
//         el: document.getElementById('next-slide-1'),
//     },
//     {
//         position: 1,
//         el: document.getElementById('next-slide-2'),
//     },
//     {
//         position: 2,
//         el: document.getElementById('next-slide-3'),
//     },
//     {
//         position: 3,
//         el: document.getElementById('next-slide-4'),
//     },
// ];

// const options = {
//     defaultPosition:1,
//     interval: 3000,
// }
// const slider = new Carousel(slideUi,items, options)
// const uSlider = new Carousel(uSlideUi,uSlideItems, options)

// slideNext.addEventListener("click", () => {
//     // console.log("u click");
//     // console.log(slider);
//     slider.next();
//     uSlider.prev();
// })