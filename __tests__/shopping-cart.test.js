// @ts-check

import { test, expect } from '@jest/globals';
import shoppingCart from '../src/shopping-cart.js';

test('calculator', () => {
  const sc = shoppingCart;

  // Add
  sc.addItem('Сыр', 300, 1);
  sc.addItem('Хлеб', 50, 2);
  sc.addItem('Колбаса', 600, 1);
  expect(sc.calculateTotal()).toBe(1000);

  // Remove
  sc.removeItem('Хлеб');
  expect(sc.calculateTotal()).toBe(900);

  // Update
  sc.updateQuantity('Сыр', 2);
  expect(sc.calculateTotal()).toBe(1200);

  // Discount
  sc.applyDiscount('DISCOUNT10');
  expect(sc.calculateTotal()).toBe(1080);

  // Discount wrong
  sc.applyDiscount('DISCOUNT20');
  expect(sc.calculateTotal()).toBe(1080);

  // Clear
  sc.clearCart();
  expect(sc.calculateTotal()).toBe(0);
});
