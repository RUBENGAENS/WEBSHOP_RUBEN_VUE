<script>

import ProductCardComponent from "@/components/ProductCardComponent.vue";
  
export default {
  components: {
      ProductCard: ProductCardComponent,
    },
    data() {
      return {
        products: [
    {
      "id": 1,
      "title": "Puzzles",
      "description": "Powerful laptop for work and entertainment",
      "image": "src/assets/puzzle_foto.png",
      "hoverImage": "src/assets/puzzle_mockup2.png",
      "price": 24.99,
      "vatRate": 0.21,
      "stockQuantity": 50
    },
    {
      "id": 2,
      "title": "Riverwalk",
      "description": "Latest model with high-resolution camera",
      "image": "src/assets/riverwalk_foto.png",
      "hoverImage": "src/assets/puzzle_mockup2.png",
      "price": 24.99,
      "vatRate": 0.21,
      "stockQuantity": 100
    },
    {
      "id": 3,
      "title": "Watermelon",
      "description": "Noise-canceling headphones for immersive audio",
      "image": "src/assets/watermelon_foto.png",
      "hoverImage": "src/assets/puzzle_mockup2.png",
      "price": 24.99,
      "vatRate": 0.21,
      "stockQuantity": 75
    }
  ],
 };
}
};
</script>

<template>
  <div>
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
      <p class="popular">The most popular</p>
    </section>

    <div class="product-list">
      <div class="product-card-container">
        <product-card v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>

    <section class="posterrover_littleTekst">
      <p>Posterrover is a project where I exhibit my posters.</p>
      <p>I want to combine abstract art with surrealistic visuals.</p>
    </section>

    <section class="banner2">
      <h1>SIMPLE, <br> COLORFUL DESIGNS</h1>
      <router-link to="/shop" class="browse_button">EXPLORE ALL POSTERS</router-link>
    </section>
  </div>
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

