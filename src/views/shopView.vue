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
      <product-card v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

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
    "hoverImage": "src/assets/riverwalk_foto.png",
    "color": "blue",
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
    "color": "orange",
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
    "color": "blue",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 75
  },
  {
    "id": 4,
    "title": "Twirl",
    "description": "Portable tablet for on-the-go productivity",
    "image": "src/assets/twril_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "green",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 40
  },
  {
    "id": 5,
    "title": "Cassette",
    "description": "Fitness tracking and notifications on your wrist",
    "image": "src/assets/cassette_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "orange",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 60
  },
  {
    "id": 6,
    "title": "Cloud",
    "description": "Next-gen gaming console for an immersive gaming experience",
    "image": "src/assets/cloud_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "orange",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 30
  },
  {
    "id": 7,
    "title": "Yes",
    "description": "High-quality camera for capturing precious moments",
    "image": "src/assets/yes_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "blue",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 45
  },
  {
    "id": 8,
    "title": "Portal",
    "description": "Ergonomic wireless mouse for efficient navigation",
    "image": "src/assets/portal_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "red",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 90
  },
  {
    "id": 9,
    "title": "Surfing",
    "description": "Expand your storage with a reliable external hard drive",
    "image": "src/assets/surfing_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "blue",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 55
  },
  {
    "id": 10,
    "title": "Smile",
    "description": "Slim and comfortable wireless keyboard for easy typing",
    "image": "src/assets/smile_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "blue",
    "category": "new",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 80
  },
  {
    "id": 11,
    "title": "Broken Pieces",
    "description": "Comfortable cotton T-shirt with a stylish print",
    "image": "src/assets/brokenpieces_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "blue",
    "category": "new",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 120
  },
  {
    "id": 12,
    "title": "Leave",
    "description": "Fashionable sneakers for a casual look",
    "image": "src/assets/leave_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "green",
    "category": "new",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 65
  },
  {
    "id": 13,
    "title": "Church Mirror",
    "description": "Spacious backpack for daily essentials",
    "image": "src/assets/churchmirror_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "green",
    "category": "new",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 85
  },
  {
    "id": 14,
    "title": "Lifestyle",
    "description": "UV-protected sunglasses for a stylish look",
    "image": "src/assets/lifestyle_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "green",
    "category": "new",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 70
  },
  {
    "id": 15,
    "title": "Dragon",
    "description": "Automatic coffee maker for a perfect brew every time",
    "image": "src/assets/dragon_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "color": "blue",
    "category": "new",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 25
  },
  {
      "id": 16,
      "title": "woooop",
      "description": "Powerful laptop for work and entertainment",
      "image": "src/assets/puzzle_foto.png",
      "hoverImage": "src/assets/puzzle_mockup2.png",
      "color": "blue",
      "category": "new",
      "price": 24.99,
      "vatRate": 0.21,
      "stockQuantity": 50
  },
  {
      "id": 17,
      "title": "testttt",
      "description": "Latest model with high-resolution camera",
      "image": "src/assets/riverwalk_foto.png",
      "hoverImage": "src/assets/puzzle_mockup2.png",
      "price": 24.99,
      "vatRate": 0.21,
      "stockQuantity": 100
  },
  {
      "id": 18,
      "title": "yoloooo",
      "description": "Noise-canceling headphones for immersive audio",
      "image": "src/assets/watermelon_foto.png",
      "hoverImage": "src/assets/puzzle_mockup2.png",
      "price": 24.99,
      "vatRate": 0.21,
      "stockQuantity": 75
  },
  {
      "id": 19,
      "title": "halloo",
      "description": "Portable tablet for on-the-go productivity",
      "image": "src/assets/twril_foto.png",
      "hoverImage": "src/assets/puzzle_mockup2.png",
      "price": 24.99,
      "color": "red",
      "vatRate": 0.21,
      "stockQuantity": 40
  },
  {
      "id": 20,
      "title": "TESTTT",
      "description": "Fitness tracking and notifications on your wrist",
      "image": "src/assets/cassette_foto.png",
      "hoverImage": "src/assets/puzzle_mockup2.png",
      "category": "popular",
      "color": "red",
      "price": 24.99,
      "vatRate": 0.21,
      "stockQuantity": 60
  },
  {
    "id": 21,
    "title": "RUBENNNN",
    "description": "Fashionable sneakers for a casual look",
    "image": "src/assets/leave_foto.png",
    "hoverImage": "src/assets/puzzle_mockup2.png",
    "category": "popular",
    "color": "red",
    "price": 24.99,
    "vatRate": 0.21,
    "stockQuantity": 65
  }
      ],
      selectedCategories: [],
      selectedColors: [],
    };
  },
  computed: {
  filteredProducts() {
    let filteredProducts = this.products;

    if (this.selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter(product => this.selectedCategories.includes(product.category));
    }

    if (this.selectedColors.length > 0) {
      filteredProducts = filteredProducts.filter(product => this.selectedColors.includes(product.color));
    }

    return filteredProducts;
  },
},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
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