<template>
  <div class="top"></div>
  <div class="confirmation-container">
    <h2>Thank you for your purchase!</h2>
    <p>Your order has been successfully completed.</p>

    <div class="order-details">
      <p><strong>Bestelnummer:</strong> #123456</p>
      <p><strong>Leverdatum:</strong> 25 december 2023</p>
      
    </div>

    <router-link to="/" class="back-to-home">Back to home page</router-link>
  </div>
  <div class="bottem"></div>
</template>

<script>
export default {
};
</script>

<style scoped>
.top {
  padding-top: 130px;
}
.bottem {
  padding-bottom: 140px;
}
.confirmation-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  color: rgb(0, 0, 0);
  text-align: center;
  border-radius: 8px;
}

h2 {
  margin-bottom: 20px;
  font-family: 'Krona One', sans-serif;
  padding-bottom: 30px;
}

p {
  font-size: 1.2em;
  margin-bottom: 40px;
  font-family: 'Roboto', sans-serif;
}

.back-to-home {
  display: inline-block;
  padding: 10px 20px;
  background-color: #2FA293;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  transition: background-color 0.2s;
  font-family: 'Roboto', sans-serif;
}

.back-to-home:hover {
  background-color: #23746b;
}
</style>
