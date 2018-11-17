var currentList = {};
function createShoppingList(){
  currentList.name = $('#shoppingListName').val();
  currentList.items = new Array();
  $("#shoppingListTitle").html(currentList.name);
  // Web Service Call
  $('#shoppingListTitle').html(currentList.name);
  $('#shoppingListItems').empty();
  $('#createListDiv').hide();
  $('#ShoppingListDiv').show();

}

function addItem(){
  var newItem = {};
  newItem.name = $('#newItemName').val();
  currentList.items.push(newItem);
  console.log(currentList);
}



$(document).ready(function(){
  console.log('ready');
});
