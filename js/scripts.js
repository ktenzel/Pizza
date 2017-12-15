//business logic
var pizzaprice = 8;
var toppingArray = [];
function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
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
  } if (toppingArray.length > 0) {
    var pizzaPrice = pizzaprice + (toppingArray.length * .5);
  } else {
    console.log("keep working");
  }
  return pizzaPrice;
}

// user interface logic
$(document).ready(function() {
  $("form#pizzaform").last().submit(function(event) {
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
    $("#orderBoard").slideDown().show();

    // $(".movieticket").last().click(function() {

      $(".show-order").fadeIn().show();
      $(".sizechoice").text(newPizza.size);
      $(".crustchoice").text(newPizza.crust);
      $(".toppingschoice").text(toppingArray);
      $(".price").text(finalPrice);

    // });
    $("#size").val("");
    $("#crust").val("");
  });
});
