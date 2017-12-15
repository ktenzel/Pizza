//business logic
var pizzaprice = 8;
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
  } else {
    console.log("keep working");
  }
  return pizzaPrice;
}
// user interface logic
$(document).ready(function() {
  $("form#pizzaform").submit(function(event) {
    event.preventDefault();
debugger;
    var inputtedSize = $("#size").val();
    var inputtedCrust = $("#crust").val();
    var newPizza = new Pizza(inputtedSize, inputtedCrust);
    var finalPrice = newPizza.finalprice();
    $("ul#ticket").append("<li><span class='movieticket'>" + newPizza.size + "</span></li>");

    $(".movieticket").last().click(function() {
      $("#show-ticket").fadeIn();
      $(".sizechoice").text(newPizza.size);
      $(".crustchoice").text(newPizza.crust);
      $(".price").text(finalPrice);

    });
  });
});
