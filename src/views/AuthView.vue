<template>
    <div class="space"></div>
    <div class="auth-container">
      <h2 class="auth-title">{{ isRegistering ? 'Register' : 'Sign up' }}</h2>
      
      <form class="auth-form" @submit.prevent="handleSubmit">
        <label for="username" class="user">Username:</label>
        <input v-model="username" type="text" id="username" required>
        
        <label for="password" class="user">Password:</label>
        <input v-model="password" type="password" id="password" required>

  
        <template v-if="isRegistering">
          <label for="email" class="user">E-mail:</label>
          <input v-model="address" type="text" id="email" required>
        </template>
  
        <button type="submit" class="boven">{{ isRegistering ? 'Register' : 'Sign up' }}</button>
      </form>
  
      <p class="auth-error" v-if="error">{{ error }}</p>
  
      <button class="auth-toggle" @click="toggleMode">
        {{ isRegistering ? 'Already have an account? Sign in!' : 'No account yet? Register now!' }}
        <p>You have to register first before you can log in.</p>
      </button>
      <p>Inlog details in code: users.js</p>
      <p>-user: gebruiker1</p>
      <p>-wachtwoord: wachtwoord1</p>
      <p>-email: webexpert@hotmail.com</p>
    </div>
    <div class="onder"></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isRegistering: false,
        username: '',
        password: '',
        address: '',
        error: '',
      };
    },
    methods: {
      handleSubmit() {
        this.error = '';
  
        if (this.isRegistering) {
         
          this.$router.push('/login'); 
        } else {
          
          const userExists = users.some(u => u.username === this.username && u.password === this.password);
  
          if (userExists) {
            this.$router.push('/cart'); 
          } else {
            this.error = 'Ongeldige gebruikersnaam of wachtwoord';
          }
        }
      },
      toggleMode() {
        this.isRegistering = !this.isRegistering;
        this.error = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .onder {
    margin-bottom: 100px;
  }
  .boven {
    margin-top: 40px;
  }
  .space{
    padding-top: 130px;
  }
  .auth-container {
    max-width: 500px;
    margin: 0 auto;
    padding-top: 130px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 130px;
    text-align: center;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.401);
  }
  
  .auth-title {
    font-size: 1.5em;
    padding-bottom: 30px;
    font-family: 'Krona One', sans-serif;
  }
  
  .auth-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .user {
        font-family: 'Roboto', sans-serif;
    }
  }
  .bottem {
        padding-bottom: 20px;
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
  
  .auth-error {
    color:  #F59D72;
    margin-top: 15px;
  }
  
  .auth-toggle {
    background-color: transparent;
    border: 2px solid transparent;
    cursor: pointer;
    color:  #2FA293;
    margin-top: 40px;
  }
  </style>
  