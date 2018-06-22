var MenuItem = require('./menuItem').MenuItem;

/**
 * Класс, параметры которого описывают напиток
 * @param type Тип
 */
function Drink(type) {
  MenuItem.call(this, type);
}

Drink.prototype = Object.create(MenuItem.prototype);
Drink.constructor = Drink;

Drink.TYPE_COLA = { name: 'ice cola', price: 50, calories: 40 };
Drink.TYPE_TEA = { name: 'irish tea', price: 80, calories: 20 };

/**
 * Узнать цену напитка
 * @returns {number} Цена в тугриках
 */
Drink.prototype.calculatePrice = function() {
  return this.getType().price;
};

/**
 * Узнать калорийность напитка
 * @returns {number} Калорийность в калориях
 */
Drink.prototype.calculateCalories = function() {
  return this.getType().calories;
};

module.exports = {
  Drink: Drink
};