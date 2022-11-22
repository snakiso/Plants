let price = document.querySelectorAll('.price');


for (let i = 0; i < price.length; i++) { 
  price[i].addEventListener('click', () => {
   price[i].classList.toggle('active')
  })
}