
<template>
  <div class="cart-container">
    <h2 class="winkel">Winkelmand</h2>

    <div v-if="cartItems.length === 0" class="empty-cart-message">
      <p>Je winkelmand is leeg.</p>
    </div>

    <div v-else>
      <ul class="cart-list">
        <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <div class="item-info">
            <img :src="item.image" alt="foto" class="product-image">
            <div>
              <h3 class="item-name">{{ item.title }}</h3>
              <p class="item-description">{{ item.description }}</p>
              <div class="quantity-section">
                <label for="quantity">Aantal:</label>
                <input type="number" v-model="item.quantity" @change="updateQuantity(index)" min="1">
              </div>
            </div>
          </div>
          <div class="item-actions">
            <span class="item-price">{{ item.price | currency }}</span>
            <button @click="removeFromCart(index)" class="remove-button">Verwijderen</button>
          </div>
        </li>
      </ul>

      <div class="total-section">
        <div class="subtotal-section" v-for="(item, index) in cartItems" :key="index">
          <p><strong>Subtotaal ({{ item.title }}):</strong> {{ getSubtotal(item) | currency }}</p>
          <p><strong>BTW ({{ item.title }}):</strong> {{ getVAT(item) | currency }}</p>
        </div>
        <p class="total-label"><strong>Totaal:</strong> {{ getTotalPrice() | currency }}</p>
      </div>

      <button @click="checkout" class="checkout-button">Afrekenen</button>
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue';
import { useProductStore } from '@/store/productStore.js';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const productStore = useProductStore();
    const router = useRouter();
    const removeFromCart = (index) => {
      productStore.removeFromCart(index);
    };

    const updateQuantity = (index) => {
      productStore.updateCartItemQuantity(index, cartItems[index].quantity);
    };

    const getTotalPrice = () => {
      return productStore.cartTotalPrice;
    };

    const getSubtotal = (item) => {
      return item.price * item.quantity;
    };

    const getVAT = (item) => {
      return getSubtotal(item) * item.vatRate;
    };

    const checkout = () => {
  productStore.checkout();
  router.push('/checkout'); // Verander '/checkout' naar het daadwerkelijke pad van je afrekenpagina
};

    return {
      cartItems: productStore.cart,
      removeFromCart,
      updateQuantity,
      getTotalPrice,
      getSubtotal,
      getVAT,
      checkout,
    };
  },
});
</script>

<style scoped>
.winkel{
  padding-top: 100px;
}
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.empty-cart-message {
  text-align: center;
  color: #555;
}

.cart-list {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.item-info {
  display: flex;
  align-items: center;
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
}

.quantity-section {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.quantity-section label {
  margin-right: 5px;
}

.item-actions {
  display: flex;
  align-items: center;
}

.remove-button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.total-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 20px;
}

.subtotal-section {
  margin-bottom: 10px;
}

.total-label {
  font-weight: bold;
  font-size: 1.2em;
}

.checkout-button {
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  font-size: 1.2em;
}

</style>
