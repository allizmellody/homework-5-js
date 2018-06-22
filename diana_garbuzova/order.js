/**
 * Класс, объекты которого описывают заказ
 *
 * @constructor
 * @param isPaid Оплачен ли заказ
 * @param dishes Блюда в заказе
 */
function Order() {
  this._dishes = [];
  this._isPaid = false;
}

/**
 * Узнать оплачен ли заказ
 */
Order.prototype.getPaid = function() {
  return this._isPaid;
};

/**
 * Получить список блюд в заказе
 */
Order.prototype.getDishes = function() {
  return this._dishes;
};

/**
 * Добавить новое блюдо в заказ
 * @param item Блюдо
 */
Order.prototype.addToOrder = function(item) {
  var itemProperties = item.getProperties();
  if (!this.getPaid()) {
    this._dishes.push(itemProperties);
  } else {
    return 'U have already paid your order'
  }
};

/**
 * Удалить блюдо из заказа по номеру позиции
 * @param index Индекс блюда
 */
Order.prototype.deletePositionFromOrder = function(index) {
  if (!this.getPaid()) {
    var dishPosition = index - 1;
    this.getDishes().splice(dishPosition, 1);
  } else {
    return 'U have already paid your order'
  }
};

/**
 * Узнать полную стоимость заказа
 * @returns {number} Цена в тугриках
 */
Order.prototype.calculateTotalPrice = function() {
  var thisOrder = this.getDishes();
  var totalSum = 0;
  if (thisOrder.length > 0) {
    for (var index = 0; index < thisOrder.length; index++) {
      totalSum += thisOrder[index].price;
    }
  }
  return totalSum;
};

/**
 * Узнат калорийность заказа
 * @returns {number} Калорийность в калориях
 */
Order.prototype.calculateTotalCalories = function() {
  var thisOrder = this.getDishes();
  var totalSum = 0;
  if (thisOrder.length > 0) {
    for (var index = 0; index < thisOrder.length; index++) {
      totalSum += thisOrder[index].calories;
    }
  }
  return totalSum;
};

/**
 * Оплатить заказ
 */
Order.prototype.pay = function() {
  this._isPaid = true;
  this.getDishes().length = 0;
  // Object.freeze(this._dishes);
};

module.exports = {
  Order: Order
};