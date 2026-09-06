// Order Model for Chadiz POS

class Order {
  constructor() {
    this.id = this.generateOrderId();
    this.items = [];
    this.subtotal = 0;
    this.tax = 0;
    this.total = 0;
    this.paymentMethod = null;
    this.status = 'pending'; // pending, completed, cancelled
    this.createdAt = new Date();
    this.customerName = null;
    this.notes = null;
  }

  generateOrderId() {
    return `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }

  addItem(product, quantity, size = null, addOns = []) {
    const item = {
      productId: product.id,
      productName: product.name,
      price: this.getPrice(product, size),
      quantity,
      size,
      addOns,
      addOnTotal: this.calculateAddOnTotal(addOns),
      itemTotal: 0
    };
    
    item.itemTotal = (item.price + item.addOnTotal) * quantity;
    this.items.push(item);
    this.calculateTotals();
    return this;
  }

  getPrice(product, size) {
    if (product.prices && size) {
      return product.prices[size] || Object.values(product.prices)[0];
    }
    if (product.sizes && size) {
      return product.sizes[size] || Object.values(product.sizes)[0];
    }
    return product.price || 0;
  }

  calculateAddOnTotal(addOns) {
    return addOns.reduce((sum, addon) => sum + addon.price, 0);
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.calculateTotals();
    return this;
  }

  updateItemQuantity(index, quantity) {
    if (this.items[index]) {
      this.items[index].quantity = quantity;
      this.items[index].itemTotal = (this.items[index].price + this.items[index].addOnTotal) * quantity;
      this.calculateTotals();
    }
    return this;
  }

  calculateTotals() {
    this.subtotal = this.items.reduce((sum, item) => sum + item.itemTotal, 0);
    this.tax = this.subtotal * 0.12; // 12% VAT
    this.total = this.subtotal + this.tax;
  }

  processPayment(paymentMethod, amountPaid) {
    if (amountPaid < this.total) {
      throw new Error('Insufficient payment');
    }
    this.paymentMethod = paymentMethod;
    this.status = 'completed';
    return {
      total: this.total,
      amountPaid,
      change: amountPaid - this.total
    };
  }

  getOrderSummary() {
    return {
      orderId: this.id,
      items: this.items,
      subtotal: this.subtotal.toFixed(2),
      tax: this.tax.toFixed(2),
      total: this.total.toFixed(2),
      paymentMethod: this.paymentMethod,
      status: this.status,
      createdAt: this.createdAt,
      customerName: this.customerName,
      notes: this.notes
    };
  }
}

module.exports = Order;
