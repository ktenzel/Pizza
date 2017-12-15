//business logic
var pizzaprice = 8;
var toppingArray = [];
var totalTop;
function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
}
 function totalToppings(toppingArray) {
   var totalTop = toppingArray.length * 0.5;
 }

Pizza.prototype.finalprice = function() {
  if (this.size === "Small") {
    var pizzaPrice = pizzaprice;
  } if (this.size === "Medium") {
    var pizzaPrice = pizzaprice += 2;
  } if (this.size === "Large") {
    var pizzaPrice = pizzaprice += 4;
  } if (this.crust === "Deep Dish") {
    var pizzaPrice = pizzaprice += 1;
  } if (this.crust === "Garlic") {
    var pizzaPrice = pizzaprice += 1;
  } else {
    console.log("keep working");
  }
  return pizzaPrice;
}

function totalPrice(totalTop, pizzaPrice) {
  pizzaPrice = totalTop + pizzaPrice;
}
// user interface logic
$(document).ready(function() {
  $("form#pizzaform").submit(function(event) {
    event.preventDefault();
debugger;
    var inputtedSize = $("#size").val();
    var inputtedCrust = $("#crust").val();
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppings = $(this).val();
      toppingArray.push(toppings + " ");
    });
    var newPizza = new Pizza(inputtedSize, inputtedCrust);
    var finalPrice = newPizza.finalprice();
    $("ul#ticket").append("<li><span class='movieticket'>" + newPizza.size + "</span></li>");

    $(".movieticket").last().click(function() {
      $("#show-order").fadeIn();
      $(".sizechoice").text(newPizza.size);
      $(".crustchoice").text(newPizza.crust);
      $(".toppingschoice").append(toppingArray);
      $(".price").text(finalPrice);

    });
  });
});
