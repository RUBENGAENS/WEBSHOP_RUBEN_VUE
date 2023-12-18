import { defineStore } from 'pinia';

import productsJson from '../../products.json';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: productsJson,
    currentPage: 1,
    itemsPerPage: 9,
  }),
  getters: {
    
    topThreeProducts() {
      
      const sortedProducts = [...this.products].sort((a, b) => b.stockQuantity - a.stockQuantity);

      
      const topThree = sortedProducts.slice(0, 3);

      return topThree;
    },
  },
  actions: {
    setProducts(products) {
      this.products = products;
    },
  },
});