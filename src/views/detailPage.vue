<script>

import { useProductStore } from '@/store/productStore.js';

import RandomProductsComponent from '@/components/RandomProductsComponent.vue';

export default {
  components: {
    RandomProducts: RandomProductsComponent,
  },
  data() {
    return {
      productStore: useProductStore(),
      currentProductId: null,
      currentProduct: null,
      selectedSize: "50 X 70 cm",
      quantity: 1,
      showNotification: false,
    };
  },
  computed: {
    randomThreeProducts() {
      return useProductStore().randomThreeProducts;
    },
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
      const productToAdd = {
        id: this.currentProductId,
        title: this.currentProduct.title,
        price: this.currentProduct.price,
        size: this.selectedSize,
        quantity: this.quantity,
        image: this.currentProduct.image, 
      };

      this.productStore.addToCart(productToAdd);
      this.showNotification = true;

      
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
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
      <img :src="currentProduct ? currentProduct.image : ''" class="size_img" id="mainImg" :alt="currentProduct ? currentProduct.title : ''">

      <div class="small-img-group">
        <div v-for="image in currentProduct ? [currentProduct.image, currentProduct.hoverImage] : []" :key="image" class="small-img-col" @click="updateMainImage(image)">
          <img :src="image" class="small-img size_img2" :alt="currentProduct ? currentProduct.title : ''">
        </div>
        <div v-for="image in currentProduct ? [currentProduct.mockup, currentProduct.mockup2] : []" :key="image" class="small-img-col" @click="updateMainImage(image)">
          <img :src="image" class="small-img size_img2" :alt="currentProduct ? currentProduct.title : ''">
        </div>
        
      </div>
    </div>
   
    <div class="single-pro-details">
      <p class="head_price">{{ currentProduct ? currentProduct.title : '' }}</p>
      <p class="p_price">{{ currentProduct ? `${currentProduct.price} EUR` : '' }}</p>
      <p class="shipping">FREE SHIPPING</p>
      <p class="size">Size</p>
      <select v-model="selectedSize">
        <option>50 X 70 cm</option>
        <option>60 X 80 cm</option>
        <option>70 X 100 cm</option>
      </select>
      <input v-model="quantity" type="number" value="1" min="1">
      <button class="add_button" @click="addToCart">Add to cart</button>
      <p v-if="showNotification" class="opmaak">Product has been added to the shopping cart!</p>
      <p class="prodetails">Product Details</p>
      <p class="product_tekst">Elevate your space with high-quality posters crafted on thick matte paper. These posters are more than just decor. They're a fantastic way to add a delightful touch to your room or office, guaranteed to bring a sense of vibrancy to any setting.</p>
    </div>
  </section>

  <section class="spotlights_shop">
    <h2 class="f-pro">FEATURED PRODUCTS</h2>
    <p class="f-under">You might also like this</p>

    <random-products />
  </section>


</template>

<style>
.opmaak {
  padding-top: 20px;
  font-family: 'Roboto', sans-serif;
  color: #2FA293;
}
 .size_img {
  width: 100%;
 }
 .size_img2 {
  width: 100%;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
 }
 .grote {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
  width: 300px;
 }
</style>
