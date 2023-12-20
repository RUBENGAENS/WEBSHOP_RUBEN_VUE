<script>
import { useProductStore } from '@/store/productStore.js';
import PopularProductsComponent from "@/components/PopularProductsComponent.vue"; 

export default {
  components: {
    PopularProducts: PopularProductsComponent,
  },
  data() {
    return {
      productStore: useProductStore(),
      currentProductId: null,
      currentProduct: null,
    };
  },
  computed: {
    topThreeProducts() {
      return this.productStore.topThreeProducts;
    },
  },
  methods: {
    getProductDetails() {
      const productId = parseInt(this.$route.params.productId);
      this.currentProduct = this.productStore.products.find(product => product.id === productId);

      if (this.currentProduct) {
        this.currentProductId = this.currentProduct.id;
        this.updateProductDetails();
      }
    },
    updateProductDetails() {
      this.updateMainImage(this.currentProduct.image);
      this.updateTextContent('.head_price', this.currentProduct.title);
    },
    updateMainImage(image) {
      const mainImg = document.getElementById('mainImg');
      if (mainImg) {
        mainImg.src = image;
      }
    },
    updateTextContent(selector, content) {
      const element = document.querySelector(selector);
      if (element) {
        element.innerText = content;
      }
    },
    addToCart() {
      // Voeg de huidige productgegevens toe aan de winkelwagen
      this.productStore.addToCart(this.currentProduct);
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.getProductDetails();
    next();
  },
  mounted() {
    this.getProductDetails();
  },
};
</script>

<template>
  <section id="prodetails" class="section-pt1">
    <div class="single-pro-imgage">
      <img :src="currentProduct ? currentProduct.imageProduct : ''" width="100%" id="mainImg" :alt="currentProduct ? currentProduct.title : ''">

      <div class="small-img-group">
        <div v-for="image in currentProduct ? [currentProduct.image, currentProduct.hoverImage] : []" :key="image" class="small-img-col" @click="updateMainImage(image)">
          <img :src="image" width="100%" class="small-img" :alt="currentProduct ? currentProduct.title : ''">
        </div>
      </div>
    </div>

    <div class="single-pro-details">
      <p class="head_price">{{ currentProduct ? currentProduct.title : '' }}</p>
      <p class="p_price">{{ currentProduct ? `${currentProduct.price} EUR` : '' }}</p>
      <p class="shipping">FREE SHIPPING</p>
      <p class="size">Size</p>
      <select>
        <option>50 X 70 cm</option>
        <option>60 X 80 cm</option>
        <option>70 X 100 cm</option>
      </select>
      <input type="number" value="1" min="0">
      <button class="add_button">Add to cart</button>
      <p class="prodetails">Product Details</p>
      <p class="product_tekst">{{ currentProduct ? currentProduct.description : '' }}</p>
    </div>
  </section>

  <section class="spotlights_shop">
    <h2 class="f-pro">FEATURED PRODUCTS</h2>
    <p class="f-under">You might also like this</p>
    <popular-products></popular-products>
  </section>
</template>

<style>
 
</style>