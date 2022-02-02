//the base object
class Cart {
  constructor(name, sku, price) {
    this.name = name;
    this.sku = sku;
    this.price = price;
  }

  getCart() {
    return 'in your cart is a ' + this.name;
  }
}

const cart = new Cart("clock", 2984, 15.99);
console.log(cart.getCart());

//extending with the decorator
//the entry decorator
class CartDecorator {
  constructor(cart) {
    this.cart = cart;
  }

  getCartItem() {
    return this.cart.getCart();
  }
}

//the extension
class ShippingDecorator extends CartDecorator {
  getShipping() {
    return 'shipping for '
      + this.cart.name
      + ' is $'
      + this.cart.price * 0.25;
  }
}

const shipping = new ShippingDecorator(cart);
console.log(shipping.getShipping());
