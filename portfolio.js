var typed=new Typed(".text",{
strings:["Pyhton Developer","CSE Student"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
});
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
