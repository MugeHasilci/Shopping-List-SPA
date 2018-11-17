var currentList = {};
function createShoppingList(){
  currentList.name = $('#shoppingListName').val();
  $("#shoppingListTitle").html(currentList.name);
  // Web Service Call
  $('#shoppingListTitle').html(currentList.name);
  $('#shoppingListItems').empty();
  $('#createListDiv').hide();
  $('#ShoppingListDiv').show();

}

$(document).ready(function(){
  console.log('ready');
});
