/* global Product, Cart */

'use strict';

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //DONE: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  
  for (var i = 0; i < Product.allProducts.length; i++) {
    var listItem = document.createElement('option');
    listItem.textContent = Product.allProducts[i].name;
    listItem.setAttribute('value', Product.allProducts[i].name);
    selectElement.appendChild(listItem);
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
  var selectedItem= document.getElementById('items').value;
  //DONE: get the quantity
  var qty= document.getElementById('quantity').value;
  // DONE: using those, create a new Cart item instance
  var newCart = new Cart(selectedItem, qty);
}

//DONE: Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(Cart.allItems));
}

//DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // var itemCount = Cart.allItems.legth;
  // var countUpdate = document.getElementById('itemCount');
  // countUpdate.textConten = itemCount;
  document.getElementById('itemCount').textContent = '(' + Cart.allItems.length + ")";
}

//DONE: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  //DONE: Get the item and quantity from the form
  var item = document.getElementById('items').value;
  var quantity = document.getElementById('quantity').value;
  
  //DONE: Add a new element to the cartContents div with that information
  var cartContents = document.getElementById('cartContents');
  var summary = quantity + ' : ' + item;
  cartContents.appendChild(document.createElement('div')).textContent = summary;

  /*alternate idea for updating cart
var quantity = document.getElementById('quantity');
var item = document.getElementById('items');
var contents = document.getElementById('cartContents');
var list = document.createElement('ul');
var listItem = document.createElement('li');
var data = JSON.pare(localStorage.getItem('cart'));
console.log(data);

  */
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
