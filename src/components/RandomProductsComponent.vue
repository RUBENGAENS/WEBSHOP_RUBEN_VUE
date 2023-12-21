<template>
    <div>
      <div class="product-list">
        <div class="product-card-container">
          <product-card v-for="product in products" :key="product.id" :product="product" />
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
      products() {
        return this.randomThreeProducts;
      },
    },
    setup() {
      const productStore = useProductStore();
      return { randomThreeProducts: productStore.randomThreeProducts };
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
  