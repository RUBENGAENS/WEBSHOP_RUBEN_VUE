<template>
  <div class="top"></div>
  <div class="checkout-container">
    <h2>Checkout</h2>
      <h3 class="adres">Address details</h3>
      <form @submit.prevent="submitCheckout">
        <div class="form-group">
          <label for="street">Street:</label>
          <input v-model="street" type="text" id="street" required>
        </div>

        <div class="form-group">
          <label for="city">City:</label>
          <input v-model="city" type="text" id="city" required>
        </div>

        <div class="form-group">
          <input type="checkbox" v-model="separateBilling" id="separateBilling">
          <label for="separateBilling">Billing information different from address information</label>
        </div>

        <div v-if="separateBilling" class="billing-details">
          <h3>Billing information</h3>
          <div class="form-group">
            <label for="billingStreet">Street:</label>
            <input v-model="billingStreet" type="text" id="billingStreet" required>
          </div>

          <div class="form-group">
            <label for="billingCity">City:</label>
            <input v-model="billingCity" type="text" id="billingCity" required>
          </div>
        </div>

        <div class="order-summary">
          <h3>Order summary</h3>
        </div>

        <button @click="simulatePayment">Pay and go to confirmation page</button>
      </form>
    </div>
    <div class="bottem"></div>
</template>

<script>
export default {
  data() {
    return {
      street: '',
      city: '',
      separateBilling: false,
      billingStreet: '',
      billingCity: '',
    };
  },
  methods: {
    submitCheckout() {
      console.log('Adresgegevens ingediend', this.street, this.city);
      if (this.separateBilling) {
        console.log('Facturatiegegevens ingediend', this.billingStreet, this.billingCity);
      }
    },
    simulatePayment() {
      console.log('Betaling geslaagd');
      this.$router.push('/bevestiging');
    },
  },
};
</script>

<style scoped>
.bottem {
  padding-bottom: 150px;
}
.top {
  padding-top: 180px;
}
.checkout-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  font-family: 'Krona One', sans-serif;
  padding-bottom: 50px;
}
.adres {
  font-family: 'Roboto', sans-serif;
  padding-bottom: 10px;
}
.form-container {
  font-family: 'Roboto', sans-serif;
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
  font-family: 'Roboto', sans-serif;
}

.billing-details {
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;

}

.order-summary {
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 10px;
  padding-top: 20px;
}

button {
  background-color: #2FA293;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #23746b;
}
</style>
