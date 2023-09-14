function inherits(type, ContainerBase) {
  type.prototype = Object.create(ContainerBase.prototype);
  type.prototype.constructor = type;
}
module.exports = { inherits };
