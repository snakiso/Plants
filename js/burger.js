let burgerBtn = document.querySelector('.burger-btn');
let closeBtn = document.querySelector('.close-btn');
let nav = document.querySelector('.mobile-nav');
let navItem = document.querySelectorAll('.nav-item');


burgerBtn.addEventListener('click', () => {
 nav.classList.add('active');
 console.log('click')
});

closeBtn.addEventListener('click', () => {
 nav.classList.remove('active')
});

for(let i = 0; i < navItem.length; i++){
 navItem[i].addEventListener('click', () => {
  nav.classList.remove('active')
 })
}