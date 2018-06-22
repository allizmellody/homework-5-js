/**
 * Абстрактный класс, параметы которого описывают пункт меню
 *
 * @param itemType Тип
 * @constructor
 */
function MenuItem(itemType) {
  this._name = itemType.name;
  this._itemType = itemType;
}

/**
 * Узнать имя пунтка меню
 */
MenuItem.prototype.getName = function() {
  return this._name;
};

/**
 * Узнать тип пункта меню
 */
MenuItem.prototype.getType = function() {
  return this._itemType;
};

module.exports = {
  MenuItem: MenuItem
};