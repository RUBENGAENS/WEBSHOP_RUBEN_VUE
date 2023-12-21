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
      selectedSize: "50 X 70 cm",
      quantity: 1,
      showNotification: false,
      navItems: [
        {
          path: "/",
          name: "Home"
        },
        {
          path: "/",
          name: "Shop",
        },
        {
          path: "/",
          name: "Contact"
        }
      ],
    };
  },
  computed: {
    topThreeProducts() {
      return this.productStore.topThreeProducts;
    },
    cartItemsCount() {
      return this.productStore.cartItems.length;
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
  <div>
    <nav>
      <div class="nav__container">
        <router-link to="/">
          <img class="logo_nav" src="@/assets/Logo ruben art-02.png" alt="logo">
        </router-link>

        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/shop">Shop</router-link></li>
          <li><router-link to="/">Contact</router-link></li>
        </ul>
        
        <ul>
          <li><router-link to="/login" class="login_button">Login</router-link></li>
          <li>
            <router-link to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M9.37492 22.9166C9.95022 22.9166 10.4166 22.4502 10.4166 21.8749C10.4166 21.2996 9.95022 20.8333 9.37492 20.8333C8.79962 20.8333 8.33325 21.2996 8.33325 21.8749C8.33325 22.4502 8.79962 22.9166 9.37492 22.9166Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.8334 22.9166C21.4087 22.9166 21.8751 22.4502 21.8751 21.8749C21.8751 21.2996 21.4087 20.8333 20.8334 20.8333C20.2581 20.8333 19.7917 21.2996 19.7917 21.8749C19.7917 22.4502 20.2581 22.9166 20.8334 22.9166Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.04175 1.04175H5.20841L8.00008 14.9897C8.09534 15.4692 8.35624 15.9 8.73711 16.2066C9.11798 16.5132 9.59456 16.6761 10.0834 16.6667H20.2084C20.6973 16.6761 21.1738 16.5132 21.5547 16.2066C21.9356 15.9 22.1965 15.4692 22.2917 14.9897L23.9584 6.25008H6.25008" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span v-if="cartItemsCount > 0" class="cart-count">{{ cartItemsCount }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    
    
  
    <div v-if="showNotification" class="notification">
      Product toegevoegd aan winkelmand!
    </div>
  </div>
</template>

<style>
 
</style>
