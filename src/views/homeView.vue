<script>
export default {
  data() {
    return {
      currentImage: 0,
    };
  },
  methods: {
    changeImage(index) {
      this.currentImage = index;
    },
  },
};
</script>

<template>
  <div>
    <section class="banner"></section>

    <header>
      <h1>BRING SOME COLOR TO YOUR WALLS</h1>
      <div class="header_between">
        <h3>made for any interior</h3>
        <router-link to="/shop" class="shop_button">Shop now</router-link>
      </div>
    </header>

    <section class="tussenstuk">
      <h2>Are you looking for new <span>posters?</span></h2>
      <p>then you've come to the right place!</p>
    </section>

    <section class="spotlights">
      <h1>IN THE SPOTLIGHTS</h1>
      <p class="popular">The most popular</p>

      <div class="fotos">
        <div class="spotlight1" @mouseover="changeImage(1)" @mouseout="changeImage(2)">
          <img :src="currentImage === 1 ? ('@/assets/surfing_foto.png') : ('@/assets/surfing_mockup.png')" class="picture" alt="foto1">
          <h3>Surfing</h3>
          <p class="price">from 24,99 EUR</p>
        </div>

        <div class="spotlight2" @mouseover="changeImage(3)" @mouseout="changeImage(4)">
          <img :src="currentImage === 3 ? ('@/assets/cassette_foto.png') : ('@/assets/cassette_mockup.png')" class="picture" alt="foto2">
          <h3>Cassette</h3>
          <p class="price">from 24,99 EUR</p>
        </div>

        <div class="spotlight3" @mouseover="changeImage(5)" @mouseout="changeImage(6)">
          <img :src="currentImage === 5 ? ('@/assets/cloud_foto.png') : ('@/assets/cloud_mockup.png')" class="picture" alt="foto3">
          <h3>Cloud</h3>
          <p class="price">from 24,99 EUR</p>
        </div>
      </div>
    </section>

    <section class="posterrover_littleTekst">
      <p>Posterrover is a project where I exhibit my posters.</p>
      <p>I want to combine abstract art with surrealistic visuals.</p>
    </section>

    <section class="banner2">
      <h1>SIMPLE, <br> COLORFUL DESIGNS</h1>
      <router-link to="/shop" class="browse_button">EXPLORE ALL POSTERS</router-link>
    </section>
  </div>
</template>



<style>
</style>

