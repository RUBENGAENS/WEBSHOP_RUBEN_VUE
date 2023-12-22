<template>
  <div class="onder"></div>
  <div class="login-container">
    <h2 class="login-title">Login</h2>
    <form @submit.prevent="login" class="login-form">
      <label for="username" class="user">Gebruikersnaam:</label>
      <input v-model="username" type="text" id="username" required>

      <label for="password" class="user">Wachtwoord:</label>
      <input v-model="password" type="password" id="password" required>

      <button type="submit"  class="boven">Inloggen</button>
      <p v-if="error" class="login-error">{{ error }}</p>
    </form>
  </div>
  <div class="onder"></div>
</template>

<script>
import { ref } from 'vue';
import { users } from '@/users';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      const user = users.find(u => u.username === this.username && u.password === this.password);

      if (user) {
        // Authenticated, navigate to cart
        this.$router.push('/cart');

        // Set user in Vuex store or wherever you manage your state
        // this.$store.commit('setUser', user);
      } else {
        // Display error message
        this.error = 'Ongeldige gebruikersnaam of wachtwoord';
      }
    },
  },
};
</script>

<style scoped>
.onder {
  padding-bottom: 100px;
}
.boven {
    margin-top: 40px;
  }
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.401);
  padding-top: 130px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 130px;
}

.login-title {
  font-size: 1.5em;
    padding-bottom: 30px;
    font-family: 'Krona One', sans-serif;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
    margin: 10px 0;
  }
  
  input {
    padding: 8px;
  margin-bottom: 15px;
  width: 25vh;
            border-left: none;
            border-right: none;
            border-top: none;
            background-color: rgb(244, 244, 244);
   
  }

  button {
    background-color: #1c1c1c;
    color: rgb(244, 244, 244);
    padding: 12px;
    cursor: pointer;
    border: none;
    width: 100%;
    border-radius: 50px;
    border: 2px solid transparent;
    &:hover {
        background-color:rgb(244, 244, 244);
        color: #1c1c1c;
        border: 2px solid #1c1c1c;
    }
  }

.login-error {
  color:  #F59D72;
    margin-top: 15px;
}
.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .user {
        font-family: 'Roboto', sans-serif;
    }
  }
</style>
