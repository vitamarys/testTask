const burgerBtn = document.querySelector('.bugrer');
const asside = document.querySelector('.aside');
const body = document.querySelector('body');

burgerBtn.addEventListener('click',()=>{
  asside.classList.toggle('active')
  body.classList.toggle('active')
})