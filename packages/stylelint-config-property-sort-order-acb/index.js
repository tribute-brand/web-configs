const order = require('css-property-sort-order-smacss');
const config = require('stylelint-config-property-sort-order-smacss');

const generate = require('./generate');

const orderRules = generate(order);

config.rules['order/properties-order'] = orderRules;

module.exports = config;
