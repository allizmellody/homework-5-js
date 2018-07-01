var Order = require('./order').Order,
    Hamburger = require('./hamburger').Hamburger,
    Drink = require('./drink').Drink,
    Salad = require('./salad').Salad;

var order = new Order();

var smallBurger = new Hamburger(Hamburger.SIZE_SMALL, 'salad');

order.addToOrder(smallBurger);

var bigBurger = new Hamburger(Hamburger.SIZE_BIG, 'salad');

bigBurger.changeStuffingCount('cheese', 10);

order.addToOrder(bigBurger);

var saladOlive = new Salad(Salad.TYPE_CAESAR, 300);

saladOlive.changeWeight(150);
order.addToOrder(saladOlive);

var teaDrink = new Drink(Drink.TYPE_TEA);

order.addToOrder(teaDrink);

order.deletePositionFromOrder(3);
console.log(order.getDishes());

console.log('total price: ' + order.calculateTotalPrice());
console.log('total calories: ' + order.calculateTotalCalories());

order.pay();

var newOrder = new Order();

var smallBurger1 = new Hamburger(Hamburger.SIZE_SMALL, 'salad');
newOrder.addToOrder(smallBurger1);

console.log(newOrder.getDishes());
