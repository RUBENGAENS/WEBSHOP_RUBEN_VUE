<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    submitNewsletter() {
      console.log('Newsletter submitted:', this.email);
    },
    openSocialLink(link) {
      window.open(link, '_blank');
  },
},
};
</script>

<template>
    <footer id="footer">
      <div class="row">
        <div class="col">
          <router-link to="/">
            <img src="@/assets/Logo ruben art-02.png" class="logo" alt="Logo">
          </router-link>
          <p>High-Quality Prints: Our posters are printed on premium materials to ensure vivid colors and sharp details.</p>
        </div>
        <div class="col">
          <h3>OFFICE</h3>
          <p>Elfde-Liniestraat 24, 3500</p>
          <p>Hasselt, BELGIUM</p>
          <p class="email-id">info@posterrover.com</p>
          <h4>+32 412 34 45 67</h4>
        </div>
        <div class="col">
          <h3>LINKS</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
          </ul>
        </div>
        <div class="col">
          <h3>NEWSLETTER</h3>
          <form @submit.prevent="submitNewsletter">
            <i class="far fa-envelope"></i>
            <input v-model="email" type="email" placeholder="Enter your e-mail id" required>
            <button type="submit"><i class="fas fa-arrow-right"></i></button>
          </form>
        <div class="social-icons">
           <a @click.prevent="openSocialLink('https://www.facebook.com/')" class="icon"><i class="fa-brands fa-facebook"></i></a>
           <a @click.prevent="openSocialLink('https://twitter.com/')" class="icon"><i class="fa-brands fa-x-twitter"></i></a>
           <a @click.prevent="openSocialLink('https://www.instagram.com/')" class="icon"><i class="fa-brands fa-instagram"></i></a>
           <a @click.prevent="openSocialLink('https://www.pinterest.com/')" class="icon"><i class="fa-brands fa-pinterest"></i></a>
         </div>
        </div>
      </div>
      <hr>
      <p class="copyright">Made for WebExpert - 2DVO - © Ruben Gaens</p>
    </footer>
  </template>