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
  drawItems();
}

function drawItems() {
  var $list = $('#shoppingListItems').empty();

  for(var i = 0; i < currentList.items.length; i++) {
    var currentItem = currentList.items[i];
    var $li = $("<li>").html(currentItem.name)
    .attr("id", "item_" + i);
    var $deleteBtn =
        $("<button onclick='deleteItem(" + i + ")'>delete</button>").appendTo($li);
    var $checkBtn =
        $("<button onclick='checkItem(" + i + ")'>check</button>").appendTo($li);

    $li.appendTo($list);
  }
}
function deleteItem(index) {
  currentList.items.splice(index, 1);
  drawItems();
}

function checkItem(index) {
   $("#item_" + index).addClass("checked");
 }



$(document).ready(function(){
  console.log('ready');
});
