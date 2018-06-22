var MenuItem = require('./item').MenuItem;

/**
 * Класс объекты, которого описывают параметры гамбургера
 *
 * @param size Размер
 * @param stuffingName Название начинки
 * @constructor
 */
function Hamburger(size, stuffingName) {
  MenuItem.call(this, size);
  var stuffing = {};
  stuffing[stuffingName] = 1;
  this._stuffing = stuffing;
}

Hamburger.prototype = Object.create(MenuItem.prototype);
Hamburger.constructor = Hamburger;

Hamburger.SIZE_SMALL = { name: 'little winny', price: 50, calories: 20 };
Hamburger.SIZE_BIG = { name: 'big boss', price: 100, calories: 40 };

Hamburger.STUFFING_CHEESE = { name: 'cheese', price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { name: 'salad', price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { name: 'potato', price: 15, calories: 10 };

/**
 * Узнать начинки гамбургера
 */
Hamburger.prototype.getStuffing = function() {
  return this._stuffing;
};

/**
 * Узнать свойства начинок
 */
Hamburger.prototype.getStuffingProperties = function() {
  var stuffing = this.getStuffing();
  var property = [];
  for (var key in stuffing) {
    property.push(getStuffingByName(key));
  }
  return property;
};

/**
 * Изменить количество начинки в бургере или добавить новую
 * @param name Имя начинки
 * @param value Количество для добавления(опционально)
 */
Hamburger.prototype.changeStuffingCount = function(name, value) {
  var stuffing = this.getStuffing();
  if (value < 1 || countStuffingSum(stuffing) < 1) {
    return 'Stuffing count can\'t be less then 1'
  } else {
    if (value === undefined) {
      value = 1;
    }
    stuffing[name] = value;
  }
};

/**
 * Узнать цену гамбургера
 * @returns {number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function() {
  var sum = this.getType().price;
  var stuffing = this.getStuffing();

  for (var key in stuffing) {
    var thisStuffItem = getStuffingByName(key);
    sum += thisStuffItem.price * stuffing[key];
  }
  return sum;
};

/**
 * Узнать калорийность гамбургера
 * @returns {number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function() {
  var sum = this.getType().calories;
  var stuffing = this.getStuffing();

  for (var key in stuffing) {
    var thisStuffItem = getStuffingByName(key);
    sum += thisStuffItem.calories * stuffing[key];
  }
  return sum;
};

/**
 * Узнать свойства гамбургера
 */
Hamburger.prototype.getProperties = function() {
  var name = this.getName();
  var stuffing = this.getStuffing();
  var price = this.calculatePrice();
  var calories = this.calculateCalories();

  return {
    name: name,
    stuffing: stuffing,
    price: price,
    calories: calories
  };
};

var stuffing = {
  cheese: Hamburger.STUFFING_CHEESE,
  salad: Hamburger.STUFFING_SALAD,
  potato: Hamburger.STUFFING_POTATO
};

function getStuffingByName(name) {
  return stuffing[name];
}

function countStuffingSum(stuffing) {
  var sum;
  for (var key in stuffing) {
    sum += stuffing[key];
  }
  return sum;
}

module.exports = {
  Hamburger: Hamburger
};