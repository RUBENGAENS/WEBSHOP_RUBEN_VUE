<template>
  <section class="heading_posters">
    <div class="heading_shop">
      <h1>ALL POSTERS</h1>
      <p>Discover your ideal match!</p>
    </div>
    
    <div class="buttons">

      <div class="filterKeuze">
      <p class="collections">Collections</p>
      <div class="all_buttons">
        <div class="bt-1">
          <input v-model="selectedCategories" class="buttons1" type="checkbox" name="checkbox1" id="checkbox1" value="new" />
          <label for="checkbox1" class="buttons1">New</label><br>
        </div>

        <div class="bt-2">
          <input v-model="selectedCategories" class="buttons2" type="checkbox" name="checkbox2" id="checkbox2" value="popular" />
          <label for="checkbox2" class="buttons2">Popular</label><br>
        </div>

        <div class="bt-3">
          <input v-model="selectedCategories" class="buttons3" type="checkbox" name="checkbox3" id="checkbox3" value="minimalist" />
          <label for="checkbox3" class="buttons3">Minimalistisch</label><br>
        </div>

        <div class="bt-4">
          <input v-model="selectedCategories" class="buttons4" type="checkbox" name="checkbox4" id="checkbox4" value="typography" />
          <label for="checkbox4" class="buttons4">Typografie</label><br>
        </div>
      </div>
    </div>

    <div class="filterKeuze">
  <p class="collections">Color</p>
  <div class="all_buttons">
    <div class="bt-5">
      <input v-model="selectedColors" class="buttons5" type="checkbox" name="checkbox5" id="checkbox5" value="blue" />
      <label for="checkbox5" class="buttons5">Blue</label><br>
    </div>

    <div class="bt-6">
      <input v-model="selectedColors" class="buttons6" type="checkbox" name="checkbox6" id="checkbox6" value="green" />
      <label for="checkbox6" class="buttons6">Green</label><br>
    </div>

    <div class="bt-7">
      <input v-model="selectedColors" class="buttons7" type="checkbox" name="checkbox7" id="checkbox7" value="red" />
      <label for="checkbox7" class="buttons7">Red</label><br>
    </div>

    <div class="bt-8">
      <input v-model="selectedColors" class="buttons8" type="checkbox" name="checkbox8" id="checkbox8" value="orange" />
      <label for="checkbox8" class="buttons8">Orange</label><br>
    </div>
  </div>
</div>
    </div>
  </section>

<div class="product-list">
    <div class="product-card-container">
      <product-card v-for="product in paginatedProducts" :key="product.id" :product="product" />
    </div>
  </div>

  <div class="pagination">
    <button @click="prevPageAndScroll" :disabled="productStore.currentPage === 1">Previous</button>
    <span>{{ productStore.currentPage }}</span>
    <button @click="nextPageAndScroll" :disabled="productStore.currentPage * productStore.itemsPerPage >= filteredProducts.length">See more</button>
  </div>


</template>

<script>
import { useProductStore } from '@/store/productStore.js'

import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {
  components: {
    ProductCard: ProductCardComponent,
  },
  data() {
    return {
      productStore: useProductStore(),
      selectedCategories: [],
      selectedColors: [],
    };
  },
  computed: {
    paginatedProducts() {
      
      let filteredProducts = this.filteredProducts;

      
      const startIndex = (this.productStore.currentPage - 1) * this.productStore.itemsPerPage;
      const endIndex = startIndex + this.productStore.itemsPerPage;
      return filteredProducts.slice(startIndex, endIndex);
    },

    filteredProducts() {
      let filteredProducts = this.productStore.products;

      if (this.selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => this.selectedCategories.includes(product.category));
      }

      if (this.selectedColors.length > 0) {
        filteredProducts = filteredProducts.filter(product => this.selectedColors.includes(product.color));
      }

      return filteredProducts;
    },
  },
  methods: {
    prevPage() {
      this.productStore.currentPage -= 1;
    },

    nextPage() {
      this.productStore.currentPage += 1;
    },
    prevPageAndScroll() {
      this.prevPage();
      this.scrollToTop();
    },

    nextPageAndScroll() {
      this.nextPage();
      this.scrollToTop();
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
      });
      },
    },
};
</script>

<style scoped>
  .product-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .product-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1600px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .pagination button {
    margin: 0 40px;
    padding: 10px 20px;
    cursor: pointer;
    background-color:#2FA293;
    color: #fff;
    border: none;
    border-radius: 5px;
  }

  .pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .pagination span {
    font-weight: bold;
    padding: 5px 10px;
  }
</style>