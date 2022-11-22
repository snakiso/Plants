let city = document.querySelectorAll('.city');
let townName = document.querySelector('.town');
let number = document.querySelector('.number');
let adress = document.querySelector('.adress');
let cityBlock = document.querySelector('.contact__city')

for(let i = 0; i<city.length; i++){
 city[i].addEventListener('click', () => {
  cityBlock.style.visibility = 'visible'
  if (city[i].dataset.town == "Canandaigua"){
   townName.innerHTML = 'Canandaigua, NY'
   number.innerHTML = '+1 585 393 0001'
   adress.innerHTML = '151 Charlotte Street'
  } else if (city[i].dataset.town == "York") {
   townName.innerHTML = 'New York City'
   number.innerHTML = '+1	212	456 0002'
   adress.innerHTML = '9 East 91st Street'
  } else if (city[i].dataset.town == "Yonkers") {
   townName.innerHTML = 'Yonkers, NY'
   number.innerHTML = '+1	914	678 0003'
   adress.innerHTML = '511 Warburton Ave'
  } else if (city[i].dataset.town == "Sherrill") {
   townName.innerHTML = 'Sherrill, NY'
   number.innerHTML = '+1	315	908 0004'
   adress.innerHTML = '14 WEST Noyes BLVD'
  }
 })
}