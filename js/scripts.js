//business logic
var pizzaprice = 8;
function Pizza(crust, size, age, price) {
  this.crust = crust;
  this.size = size;
  this.price = price;
}
Pizza.prototype.finalprice = function() {
  if (this.size === "small") {
    var pizzaPrice = pizzaprice;
  } if (this.size === "medium") {
    var pizzaPrice = pizzaprice += 2;
  } if (this.size === "large") {
    var pizzaPrice = pizzaprice += 4;
  } if (this.crust === "Deep Dish") {
    var pizzaPrice = pizzaprice += 1;
  } if (this.crust === "Garlic") {
    var pizzaPrice = pizzaprice += 1;
  } if (this. === "large") {
    var pizzaPrice = pizzaprice += 4;
  } else {
    console.log("keep working");
  }
  return pizzaPrice;
}
// user interface logic
$(document).ready(function() {


  $("form#pizzaform").submit(function(event) {
    event.preventDefault();

    var inputtedCrust = $("#crust").val();
    var inputtedSize = $("#size").val();
    var inputtedAge = $("input:radio[name=age]:checked").val();
    var newPizza = new Pizza(inputtedCrust, inputtedSize);
    var finalPrice = newPizza.finalprice();
    $("ul#ticket").append("<li><span class='movieticket'>" + newPizza.size + "</span></li>");

    $(".movieticket").last().click(function() {
      $("#show-ticket").fadeIn();
      $("#show-ticket h2").text(newTicket.movie);
      $(".moviechoice").text(newTicket.movie);
      $(".timechoice").text(newTicket.time);
      $(".price").text(finalPrice);

        // $("#addresses").click(function(){
        //   $("li").remove();
        // });
      });
    });
  });
