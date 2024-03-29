'use strict';

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
if(table){
table.addEventListener('click', removeItemFromCart);
renderCart();
    // This will initialize the page and draw the cart on screen
}

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

//DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableRows = document.querySelectorAll('#cart tbody tr');
  for (var i = 0; i < tableRows.length; i++){
    if (tableRows[i]){
        tableRows[i].remove();
    }
  }
} 

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // DONE: Find the table body
  var tbody = document.getElementsByTagName('tbody')[0];
  // DONE: Iterate over the items in the cart
  for (var i = 0; i < Cart.length; i++){
  // DONE: Create a TR
  var td = document.createElement('td');
  // DONE: Create a TD for the delete link, quantity,  and the item
  td.textContent  = ' X '; 
  td.classList.add('remover');
  td.id = i;
  //DONE: Add the TR to the TBODY and each of the TD's to the TR
  var tr = document.createElement('tr');
  tbody.appendChild(tr);
  tr.appendChild(td);
  tr.appendChild(document.createElement('td')).textContent = Cart[i].quantity;
  tr.appendChild(document.createElement('td')).textContent = Cart[i].item;

  document.getElementById('itemCount').textContent = '(' + Cart.length + ')';
  }
}

function removeItemFromCart(event) {
  if (event.target.classList.contains('remover')){
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
    Cart.splice(event.target.id, 1);
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(Cart));
  //same thing as line 62 localStorage['cart'] = JSON.stringify(Cart));
  // TODO: Re-draw the cart table
  renderCart();
}
}
renderCart();

