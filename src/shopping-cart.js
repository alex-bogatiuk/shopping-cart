const shoppingCart = {
  items: [],
  total: 0,

  // Add Item Method
  addItem(name, price, quantity) {
    const newItem = { name, price, quantity };
    this.items.push(newItem);
    this.total += price * quantity;
  },

  // Item Removal Method
  removeItem(itemName) {
    const indexToRemove = this.items.findIndex((item) => item.name === itemName);

    if (indexToRemove !== -1) {
      const removedItem = this.items.splice(indexToRemove, 1)[0];
      this.total -= removedItem.price * removedItem.quantity;
    }
  },

  // Item Quantity Update Method
  updateQuantity(itemName, newQuantity) {
    const itemToUpdate = this.items.find((item) => item.name === itemName);

    if (itemToUpdate) {
      const oldTotal = itemToUpdate.price * itemToUpdate.quantity;
      itemToUpdate.quantity = newQuantity;
      const newTotal = itemToUpdate.price * newQuantity;
      this.total += newTotal - oldTotal;
    }
  },

  // Total Cost Calculation Method
  calculateTotal() {
    return this.total;
  },

  // Clear Cart Method
  clearCart() {
    this.items = [];
    this.total = 0;
  },

  // Additional Quest: Apply Discount Method
  applyDiscount(discountCode) {
    // Implement discount logic here
    // For example, you can have a predefined list of valid discount codes
    const validDiscountCodes = ['DISCOUNT10', 'SALE10'];

    if (validDiscountCodes.includes(discountCode)) {
      // Apply a discount percentage, let's say 10% for simplicity
      const discountPercentage = 0.1;
      this.total *= 1 - discountPercentage;
    } else {
      console.log('Invalid discount code');
    }
  },
};

export default shoppingCart;
