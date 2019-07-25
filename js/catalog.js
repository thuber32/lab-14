/* global Product, Cart */

'use strict';

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //DONE: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var opt = document.createElement('option');
    opt.value = Product.allProducts[i].name;
    opt.textContent = Product.allProducts[i].name;
    selectElement.appendChild(opt);
  }
}


// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  //DONE: Prevent the page from reloading
  event.preventDefault();
  //Do all the things ...
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();
}

//DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  //DONE: suss out the item picked from the select list
  var selectElement = document.getElementById('items');
  var item = selectElement.value;
  selectElement.selectedIndex=0;
  //DONE: get the quantity
  var numberElement= document.getElementById('quantity');
  var qty = numberElement.value;
  numberElement.value = '';
  // DONE: using those, create a new Cart item instance
  Cart.push({'item':item, 'quantity': qty});
}

//DONE: Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(Cart.allItems));
}

//DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
    document.getElementsById('itemCount').textContent = '(' + Cart.allItems.length + ")";
}

//DONE: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  //DONE: Get the item and quantity from the form
  var selectElement = document.getElementById('items').value;
  var itemQty = document.getElementById('quantity').value;
  
  //DONE: Add a new element to the cartContents div with that information
  var cartContents = document.getElementById('cartContents');
  var summary = quantity + ' : ' + item;
  contentOutput.appendChild(document.createElement('div')).textContent = summary;
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
