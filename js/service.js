let button = document.querySelectorAll('.services-btn');
let service = document.querySelectorAll('.service');

function activeGarden() {
 for (let i = 0; i < service.length; i++) {
  if (service[i].dataset.service !== 'garden') {
   service[i].classList.add('unactive')
  } else {
   service[i].classList.remove('unactive')
  }
 }
}

function activePlanting() {
 for (let i = 0; i < service.length; i++) {
  if (service[i].dataset.service !== 'planting') {
   service[i].classList.add('unactive')
  } else {
   service[i].classList.remove('unactive')
  }
 }
}

function activeLawn() {
 for (let i = 0; i < service.length; i++) {
  if (service[i].dataset.service !== 'lawn') {
   service[i].classList.add('unactive')
  } else {
   service[i].classList.remove('unactive')
  }
 }
}

for (let i = 0; i < button.length; i++) {
 button[i].addEventListener('click', () => {
  if (button[i].dataset.service == 'garden') {
   activeGarden()
  } else if (button[i].dataset.service == 'planting') {
   activePlanting()
  } else if (button[i].dataset.service == 'lawn') {
   activeLawn()
  }
 })
}

