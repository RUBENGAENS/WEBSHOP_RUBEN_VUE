import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        "id": 1,
        "title": "Puzzs",
        "description": "Powerful laptop for work and entertainment",
        "image": "src/assets/puzzle_foto.png",
        "hoverImage": "src/assets/riverwalk_foto.png",
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
      },
      {
        "id": 4,
        "title": "Twirl",
        "description": "Portable tablet for on-the-go productivity",
        "image": "src/assets/twril_foto.png",
        "hoverImage": "src/assets/puzzle_mockup2.png",
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
          "vatRate": 0.21,
          "stockQuantity": 40
      },
      {
          "id": 20,
          "title": "TESTTT",
          "description": "Fitness tracking and notifications on your wrist",
          "image": "src/assets/cassette_foto.png",
          "hoverImage": "src/assets/puzzle_mockup2.png",
          "price": 24.99,
          "vatRate": 0.21,
          "stockQuantity": 60
      }
    ],
  }),
  actions: {
    setProducts(products) {
      this.products = products;
    },
  },
});