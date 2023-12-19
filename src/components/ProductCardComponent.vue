<template>
  <div class="spotlights_shop">
    <!-- Voeg de router-link toe om naar de detailpagina te navigeren -->
    <router-link :to="{ name: 'detailPage', params: { productId: product.id } }" class="no-underline">
      <div class="product-card" @click="goToDetailPage">
        <div class="image-container">
          <img @mouseover="isHovered = true" @mouseout="isHovered = false" class="picture" :src="isHovered ? product.hoverImage : product.image" :alt="product.title"/>
        </div>
        <h3>{{ product.title }}</h3>
        <p class="discription">{{ product.description }}</p>
        <p class="price">from {{ product.price }} EUR</p>
        <p class="stock">Stock: {{ product.stockQuantity }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    // Optioneel: Als je ook via een klik op de hele kaart naar de detailpagina wilt gaan
    goToDetailPage() {
      this.$router.push({ name: 'detailPage', params: { productId: this.product.id } });
    },
  },
};
</script>

<style scoped>
.no-underline{
  text-decoration: none;
  color: #1c1c1c;
}
.product-card {
  padding: 16px;
  margin: 16px;
  margin-top: 50px;
  width: 400px;
  cursor: pointer;
  justify-content: center;
  text-decoration: none;
  p, h3, img, .picture {
    display: flex;
    justify-content: center;
    text-align: center;
  }
}

.image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card img {
  max-width: 100%;
  max-height: 100%; 
}

@media (max-width: 480px) {
    .product-card {
        width: 300px;
}
}

</style>