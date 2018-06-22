var MenuItem = require('./item').MenuItem;

/**
 * Класс, объекты которого описывают параметры салата
 *
 * @constructor
 * @param type Тип
 * @param weight Вес
 */
function Salad(type, weight) {
  MenuItem.call(this, type);
  this._weight = weight;
}

Salad.prototype = Object.create(MenuItem.prototype);
Salad.constructor = Salad;

/**
 * Цена и калории указаны за 100г.
 */
Salad.TYPE_CAESAR = { name: 'caesar', price: 100, calories: 20 };
Salad.TYPE_OLIVE = { name: 'olive', price: 50, calories: 80 };

/**
 * Узнать вес салата
 */
Salad.prototype.getWeight = function() {
  return this._weight;
};

/**
 * Изменить вес салата
 */
Salad.prototype.changeWeight = function(value) {
  if (value > 100) {
    this._weight = value
  } else {
    return 'Weight of your salad can\'t be less then 100 gram';
  }
};

/**
 * Узнать цену салата за 100г.
 * @returns {number} Цена в тугриках
 */
Salad.prototype.calculatePrice = function() {
  var thisType = this.getType();
  var pricePerGram = thisType.price / 100;

  return pricePerGram * this.getWeight();
};

/**
 * Узнать калорийность салата в 100г.
 * @returns {number} Калрийность в калориях
 */
Salad.prototype.calculateCalories = function() {
  var thisType = this.getType();
  var caloriesPerGram = thisType.calories / 100;

  return caloriesPerGram * this.getWeight();
};

/**
 * Узнать свойства салата
 */
Salad.prototype.getProperties = function() {
  var name = this.getName();
  var weight = this.getWeight();
  var price = this.calculatePrice();
  var calories = this.calculateCalories();

  return {
    name: name,
    weight: weight,
    price: price,
    calories: calories
  };
};

module.exports = {
  Salad: Salad
};