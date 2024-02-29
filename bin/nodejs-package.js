#!/usr/bin/env node

import shoppingCart from '../index.js';

// Example Usage:
shoppingCart.addItem('Product A', 20, 2);
shoppingCart.addItem('Product B', 30, 1);

console.log('Всего до скидки:', shoppingCart.calculateTotal());

shoppingCart.applyDiscount('DISCOUNT10');

console.log('Всего со скидкой:', shoppingCart.calculateTotal());
