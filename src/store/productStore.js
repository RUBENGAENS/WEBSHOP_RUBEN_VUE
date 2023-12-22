
import { defineStore } from 'pinia';
import productsJson from '../../products.json';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: productsJson,
    currentPage: 1,
    itemsPerPage: 9,
    cart: JSON.parse(localStorage.getItem('cart')) || [], 
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
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  actions: {
    setProducts(products) {
      this.products = products;
    },
    addToCart(product) {
      this.cart.push(product);
      this.saveCartToLocalStorage(); // Sla het bijgewerkte winkelmandje op in de lokale opslag
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
      this.saveCartToLocalStorage(); // Sla het bijgewerkte winkelmandje op in de lokale opslag
    },
    checkout() {
      // Voeg hier eventuele logica toe voor het afrekenen
      this.cart = [];
      this.saveCartToLocalStorage(); // Sla het lege winkelmandje op in de lokale opslag
    },
    saveCartToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart)); // Zet het winkelmandje om naar een string en sla het op in de lokale opslag
    },
  },
});
