'use strict';

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
if (table){
    table.addEventListener('click', removeItemFromCart);
    // This will initialize the page and draw the cart on screen
    renderCart();
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
  var tbody = document.getElementsByTagName(' #cart tbody');
  // DONE: Iterate over the items in the cart
  for (var i = 0; i < Cart.length; i++){
  // DONE: Create a TR
  var tr = document.createElement('tr');
  // DONE: Create a TD for the delete link, quantity,  and the item
  var td = document.createElement('td');
  var button = document.createElement('button');
  button.textContent = ' X ';
  
  td.appendChild(button);
  tr.appendChild(td);
  //?? TODO: Add the TR to the TBODY and each of the TD's to the TR
  tbody.appendChild(tr);
  }
}

function removeItemFromCart(event) {
  var i = event.parentNode.parentNode.rowIndex;
  document.getElementByTagName('tbody').deleteRow(i);
  // TODO: When a delete link is clicked, rebuild the Cart array without that item

  // TODO: Save the cart back to local storage
  localStorage.
  // TODO: Re-draw the cart table
}

