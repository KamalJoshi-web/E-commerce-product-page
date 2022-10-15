const menu = document.getElementById('hamburger');
const slider =document.querySelector('.navigation-links');
const bgBlack =document.querySelector('.black-bg');
menu.addEventListener('click',()=>{
    slider.classList.toggle('active');
    if(slider.classList.contains('active')){
        bgBlack.style.display='block';
        menu.src='./images/icon-close.svg'
    }
    else{
        bgBlack.style.display='none'
        menu.src='./images/icon-menu.svg'
    }
})

const cart =document.getElementById('cart');
const cartBox =document.querySelector('.cart-box');
cart.addEventListener('click',()=>{
    cartBox.classList.toggle('show-cart') ;
})

const clickableImages =document.querySelectorAll('.click-me-to-add');
const mainImg =document.getElementById('main-img');
clickableImages.forEach(img=>{
    img.addEventListener('click',(e)=>{
        for (let img of clickableImages) {
            img.classList.remove('addditional-class-after-click');
          }
        //   img.classList.add('addtional-class-for-sub-caru');
        e.target.classList.add('addditional-class-after-click');
        mainImg.src=e.target.src;
    })
})


// Lightroom logic

const lightRoom = document.getElementById('light-room');
const lightRoomImage =document.getElementById('main-image-for-slider');
const closeLightroom = document.getElementById('cross');
const shiftImages =document.querySelectorAll('.light-room-slider');
const nextbtn =document.getElementById('next');
const previousbtn =document.getElementById('previous');


mainImg.addEventListener('click',()=>{
    lightRoom.style.display='block';
    bgBlack.style.display='block';
})



closeLightroom.addEventListener('click',()=>{
    lightRoom.style.display='none';
    bgBlack.style.display='none';
})

shiftImages.forEach(img=>{
    img.addEventListener('click',(e)=>{
        for (let img of shiftImages) {
            img.classList.remove('addditional-class-after-click');
          }
        //   img.classList.add('addtional-class-for-sub-caru');
        e.target.classList.add('addditional-class-after-click');
        lightRoomImage.src=e.target.src;

    })
})

let counterforlightroom = 0;
previousbtn.addEventListener('click',(e)=>{
    counterforlightroom--;
    if(counterforlightroom < 0){
        counterforlightroom= shiftImages.length-1
    }
    for (let kk of shiftImages) {
        kk.classList.remove('addditional-class-after-click');
      }
      shiftImages[counterforlightroom].classList.add('addditional-class-after-click');
      lightRoomImage.src=shiftImages[counterforlightroom].src;
    

})

nextbtn.addEventListener('click', (e) =>{
   
    counterforlightroom++;
    if(counterforlightroom > shiftImages.length-1){
        counterforlightroom=0;
    }
    for (let kk of shiftImages) {
        kk.classList.remove('addditional-class-after-click');
      }
      shiftImages[counterforlightroom].classList.add('addditional-class-after-click');
      lightRoomImage.src=shiftImages[counterforlightroom].src ;

})




//  Cart addition and deletion logic
const deleteInsideCart =document.getElementById('delete-inside-cart');
const productinCart =document.getElementById('show-only-after-add-to-cart');
const addCartbtn =document.getElementById('add-to-cart-button');
const timeofproduct =document.querySelector('.counter');
const empty =document.getElementById('empty');

const plusBtn=document.getElementById('plus');
const minusBtn=document.getElementById('minus');
const count =document.getElementById('count');
const priceMultiply =document.getElementById('multiply');
const priceTotal =document.getElementById('total');
let counter =0;

deleteInsideCart.addEventListener('click', ()=>{
    productinCart.style.display='none';
    empty.style.display='block'
    timeofproduct.innerHTML='0';
    timeofproduct.style.display='none'
    count.innerHTML='0'
})



plusBtn.addEventListener('click',()=>{
    counter=counter+1;
    count.innerHTML=counter;
})
minusBtn.addEventListener('click',()=>{
    counter=counter-1;
    if(counter<0){
        counter=0;
    }
    count.innerHTML=counter;
})
addCartbtn.addEventListener('click',()=>{
    if(counter==0){
        count.innerHTML=1;
        
        timeofproduct.innerHTML=1;
        timeofproduct.style.display='block';
        productinCart.style.display='block';
        empty.style.display='none'
    }
    else{
        priceMultiply.innerText=`125 *${counter}`
        priceTotal.innerHTML=`$${125*counter}`;
    timeofproduct.innerHTML=counter;
    timeofproduct.style.display='block';
    productinCart.style.display='block';
    empty.style.display='none'
}
})




