
document.getElementById('a1').addEventListener('click', function () {
  a1.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('a1');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);


  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;


  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;

  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})

// coupon disable

document.getElementById('delete-confirm').addEventListener('keyup', function (event) {

  const text = event.target.value;
  const deleteButton = document.getElementById('btn-delete');
  if (text === 'NEW15' || text === 'COUPLE20') {
    deleteButton.removeAttribute('disabled');
  }
  else {
    deleteButton.setAttribute('disabled', true);
  }

})

document.getElementById('btn-delete').addEventListener('click', function () {
  const secret = document.getElementById('secret-info');
  secret.style.display = 'none';
})



document.getElementById('a2').addEventListener('click', function () {
  a2.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('a2');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})





document.getElementById('a3').addEventListener('click', function () {
  a3.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('a3');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})










document.getElementById('a4').addEventListener('click', function () {
  a4.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('a4');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})









document.getElementById('b1').addEventListener('click', function () {
  b1.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('b1');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})








document.getElementById('b2').addEventListener('click', function () {
  b2.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('b2');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})









document.getElementById('b3').addEventListener('click', function () {
  b3.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('b3');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})









document.getElementById('b4').addEventListener('click', function () {
  b4.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('b4');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})











document.getElementById('c1').addEventListener('click', function () {
  c1.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('c1');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})












document.getElementById('c2').addEventListener('click', function () {
  c2.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('c2');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})










document.getElementById('c3').addEventListener('click', function () {
  c3.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('c3');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})









document.getElementById('c4').addEventListener('click', function () {
  c4.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('c4');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})













document.getElementById('d1').addEventListener('click', function () {
  d1.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('d1');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})










document.getElementById('d2').addEventListener('click', function () {
  d2.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('d2');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})










document.getElementById('d3').addEventListener('click', function () {
  d3.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('d3');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})









document.getElementById('d4').addEventListener('click', function () {
  d4.style.backgroundColor = '#1DD100';

  const kisu = document.getElementById('d4');
  const kisu2 = kisu.innerText;

  const placeList = document.getElementById('section-box');

  const p = document.createElement('p');
  p.innerText = kisu2;

  const h1 = document.createElement('h1');
  h1.innerText = 'Economy';

  const h2 = document.createElement('h2');
  h2.innerText = '550';

  placeList.appendChild(p);
  placeList.appendChild(h1);
  placeList.appendChild(h2);

  // seatCounting
  const add = document.getElementById('seat-counting');
  const have = add.innerText;
  const upd = parseInt(have);

  const updatedScore = upd + 1;
  add.innerText = updatedScore;

  // seatNumberDecrease

  const deduct = document.getElementById('seat-left');
  const had = deduct.innerText;
  const upda = parseInt(had);

  const updatingScore = upda - 1;
  deduct.innerText = updatingScore;


  // totalPrice and grand price
  const totalTicket = document.getElementById('seat-counting')
  const totalPrice = document.getElementById('total-price')
  const grandPrice = document.getElementById('grand-price')

  const ticketText = totalTicket.innerText;
  const setNumb = parseInt(ticketText);

  const setPrice = setNumb * 550;
  totalPrice.innerText = setPrice;
  grandPrice.innerText = setPrice;

})













