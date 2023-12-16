<script>
import NavComponent from '@/components/NavComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
        components: {
            NavComponent,
            FooterComponent
        }
    }

</script>

<template>
  <NavComponent/>


<router-view></router-view>
<FooterComponent/>
</template>





<style>
</style>