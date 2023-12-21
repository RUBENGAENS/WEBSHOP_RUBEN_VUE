
import { defineStore } from 'pinia';
import productsJson from '../../products.json';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: productsJson,
    currentPage: 1,
    itemsPerPage: 9,
    cart: [], 
  }),
  getters: {
    topThreeProducts() {
      const sortedProducts = [...this.products].sort((a, b) => b.stockQuantity - a.stockQuantity);
      const topThree = sortedProducts.slice(0, 3);
      return topThree;
    },
    
    randomThreeProducts() {
      const shuffledProducts = [...this.products].sort(() => 0.5 - Math.random());
      const randomThree = shuffledProducts.slice(0, 3);
      return randomThree;
    },
    cartItems() {
      return this.cart;
    },
    cartTotalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
  },
  actions: {
    setProducts(products) {
      this.products = products;
    },
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    checkout() {
      // Voeg hier eventuele logica toe voor het afrekenen
      this.cart = [];
    },
  },
});
