/**
 * Класс, параметы которого описывают пункт меню
 *
 * @param itemType Тип
 * @constructor
 */
function MenuItem(itemType) {
  this._itemType = itemType;
}

/**
 * Узнать тип пункта меню
 */
MenuItem.prototype.getType = function() {
  return this._itemType;
};

module.exports = {
  MenuItem: MenuItem
};