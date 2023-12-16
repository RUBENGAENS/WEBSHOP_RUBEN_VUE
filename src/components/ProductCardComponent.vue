<template>
  <div class="spotlights_shop">
  <div class="product-card">
    <div class="image-container">
    <img class="picture" :src="product.image" :alt="product.title" />
  </div>
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <p>from {{ product.price }} EUR</p>
    <p>Stock: {{ product.stockQuantity }}</p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.product-card {
  padding: 16px;
  margin: 16px;
  margin-top: 50px;
  width: 400px;
  
  cursor: pointer;
  justify-content: center;
  p, h3, img, .picture {
    display: flex;
    justify-content: center;
    text-align: center;
  }
}


.image-container {
  flex: 1; /* Hierdoor neemt de image-container het beschikbare verticale ruimte in beslag */
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card img {
  max-width: 100%; /* Zorgt ervoor dat de afbeelding niet groter is dan de container */
  max-height: 100%; /* Voorkomt dat de afbeelding de container uitrekt */
}



</style>