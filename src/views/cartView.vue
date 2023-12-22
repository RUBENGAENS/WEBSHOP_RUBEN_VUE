
<template>
  <div class="cart-container">
    <h2 class="winkel">Shopping cart</h2>

    <div v-if="cartItems.length === 0" class="empty-cart-message">
      <p>Your shopping cart is empty.</p>
      <img src="/src/assets/emptyBag.png" class="bag" alt="foto">
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
                <label for="quantity"></label>
                <input type="number" v-model="item.quantity" @change="updateQuantity(index)" min="1">
              </div>
            </div>
          </div>
          <div class="item-actions">
            <span class="item-price">{{ item.price | currency }} EUR</span>
            <button @click="removeFromCart(index)" class="remove-button">Delete</button>
          </div>
        </li>
      </ul>

      <div class="total-section">
        <div class="subtotal-section" v-for="(item, index) in cartItems" :key="index">
          <p><strong>Subtotal ({{ item.title }}):</strong> {{ getSubtotal(item) | currency }} EUR</p>
          <p><strong>VAT ({{ item.title }}):</strong> {{ getVAT(item) | currency }}</p>
        </div>
        <p class="total-label"><strong>Total:</strong> {{ getTotalPrice() | currency }} EUR</p>
      </div>

      <button @click="checkout" class="checkout-button">Checkout</button>
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
      
      recalculateTotalPrice();
    };

    const updateQuantity = (index) => {
      productStore.updateCartItemQuantity(index, cartItems[index].quantity);
      
      recalculateTotalPrice();
    };

    const recalculateTotalPrice = () => {
      productStore.calculateTotalPrice();
    };

    const getTotalPrice = () => {
      return productStore.cartTotalPrice.toFixed(2); 
    };

    const getSubtotal = (item) => {
      return item.price * item.quantity;
    };

    const getVAT = (item) => {
      const vatAmount = getSubtotal(item) * (item.vatRate / 100);
      return vatAmount;
    };

    const checkout = () => {
      productStore.checkout();
      router.push('/checkout');
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
  padding-top: 120px;
  padding-bottom: 50px;
  justify-content: center;
  display: flex;
  font-family: 'Krona One', sans-serif;
  font-size: 30px;
}
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.empty-cart-message {
  padding-top: 80px;
  text-align: center;
  color: #555;
  font-family: 'Roboto', sans-serif;
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
  justify-content: center;
  font-family:'Roboto', sans-serif;
}
.item-name{
  font-family:'Candal', sans-serif;
  padding-bottom: 10px;
  font-size: 20px;
}
.item-price {
  padding-right: 20px;
  font-family:'Roboto', sans-serif;
}
  input {
    font-family:'Roboto', sans-serif;
    padding: 5px;
  margin-bottom: 15px;
  width: 5vh;
            border-left: none;
            border-right: none;
            border-top: none;
            background-color: rgb(244, 244, 244);
   
  }
.product-image {
  width: 150px;
  height: 230px;
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
  font-family:'Roboto', sans-serif;
}

.remove-button {
  background-color: #e74c3c;
  color: rgb(244, 244, 244);
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 50px;
  &:hover {
    background-color: #a3362a;
  }
}

.total-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 80px;
  font-family: 'Roboto', sans-serif;
}

.subtotal-section {
  margin-bottom: 30px;
}

.total-label {
  font-weight: bold;
  font-size: 1.2em;
}

.checkout-button {
  background-color: #2FA293;
  color: rgb(244, 244, 244);
  border: 2px solid transparent;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  font-size: 1.2em;
  border-radius: 50px;
  margin-bottom: 150px;
  &:hover {
    background-color: rgb(244, 244, 244);
    color: #1c1c1c;
    border: 2px solid #1c1c1c;
  }
}
.bag {
  padding-top: 95px;
  padding-bottom: 80px;
  width: 50%;
}
</style>
