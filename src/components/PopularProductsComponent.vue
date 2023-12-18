
<template>
    <div>
      <div class="product-list">
        <div class="product-card-container">
          <product-card v-for="product in topThreeProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '@/store/productStore.js';
  import ProductCardComponent from "@/components/ProductCardComponent.vue";
  
  export default {
    components: {
      ProductCard: ProductCardComponent,
    },
    computed: {
      topThreeProducts() {
        const sortedProducts = [...this.products].sort((a, b) => b.stockQuantity - a.stockQuantity);
        const topThree = sortedProducts.slice(0, 3);
        return topThree;
      },
    },
    setup() {
      const productStore = useProductStore();
      return { products: productStore.products };
    },
  };
  </script>
  
  <style>
  .product-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .product-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1600px;
  }
  </style>