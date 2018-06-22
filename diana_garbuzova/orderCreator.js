var Order = require('./order').Order,
    Hamburger = require('./hamburger').Hamburger,
    Drink = require('./drink').Drink,
    Salad = require('./salad').Salad;

var order = new Order();

var smallBurger = new Hamburger(Hamburger.SIZE_SMALL, 'cheese');

console.log(smallBurger.changeStuffingCount('salad', 0));
order.addToOrder(smallBurger);

var bigBurger = new Hamburger(Hamburger.SIZE_BIG, 'salad');

bigBurger.changeStuffingCount('cheese', 10);
console.log(bigBurger.getStuffingProperties());

order.addToOrder(bigBurger);

var saladOlive = new Salad(Salad.TYPE_CAESAR, 300);

saladOlive.changeWeight(150);
saladOlive.changeWeight(90);
order.addToOrder(saladOlive);

var teaDrink = new Drink(Drink.TYPE_TEA);

order.addToOrder(teaDrink);
console.log(order.getDishes());

order.deletePositionFromOrder(1);
console.log(order.getDishes());

console.log('total price: ' + order.calculateTotalPrice());
console.log('total calories: ' + order.calculateTotalCalories());

order.pay();

var cola = new Drink(Drink.TYPE_COLA);
console.log(order.addToOrder(cola));