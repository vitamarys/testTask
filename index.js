const burgerBtn = document.querySelector('.bugrer');
const asside = document.querySelector('.aside');


burgerBtn.addEventListener('click',()=>{
  asside.classList.toggle('active')
})