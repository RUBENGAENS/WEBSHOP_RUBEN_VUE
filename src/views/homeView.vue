<script>
import { useProductStore } from '@/store/productStore.js';
import ProductCardComponent from "@/components/ProductCardComponent.vue";
import PopularProductsComponent from "@/components/PopularProductsComponent.vue"; 

export default {
  components: {
    ProductCard: ProductCardComponent,
    PopularProducts: PopularProductsComponent,
  },
  data() {
    return {
      productStore: useProductStore(),
    };
  },
  computed: {
    topThreeProducts() {
      return this.productStore.topThreeProducts;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<template>

    <section class="banner"></section>

    <header>
      <h1>BRING SOME COLOR TO YOUR WALLS</h1>
      <div class="header_between">
        <h3>made for any interior</h3>
        <router-link to="/shop" class="shop_button">Shop now</router-link>
      </div>
    </header>

    <section class="tussenstuk">
      <h2>Are you looking for new <span>posters?</span></h2>
      <p>then you've come to the right place!</p>
    </section>

  <section class="spotlights">
      <h1>IN THE SPOTLIGHTS</h1>
      <p class="popular">Most in STOCK</p>
    </section>

    <popular-products></popular-products>

    <section class="posterrover_littleTekst">
      <p>Posterrover is a project where I exhibit my posters.</p>
      <p>I want to combine abstract art with surrealistic visuals.</p>
    </section>

    <section class="banner2">
      <h1>SIMPLE, <br> COLORFUL DESIGNS</h1>
      <router-link to="/shop" class="browse_button">EXPLORE ALL POSTERS</router-link>
    </section>

</template>



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

