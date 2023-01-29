//normal math operation
var price = 100;
var unit = 5;
var totalPrice = price * unit;
console.log(totalPrice);
//result in two decimal
var apple =80;
var people = 15;
var eachPeople = apple / people;
var resultInTwoDecimal = eachPeople.toFixed(2);
console.log(resultInTwoDecimal);

//parse int vs parse float
var mangoPrice = 85;
var orangePrice = "100";
var orangePriceParse =parseInt(orangePrice);
var totalCost =mangoPrice + orangePriceParse ;
console.log(totalCost);
