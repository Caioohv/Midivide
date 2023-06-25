<template>
  <router-link class="link" :to="target">
    <textSubTitleComponent :content="content"/>
  </router-link>
</template>

<script>
import textSubTitleComponent from '../textSubTitleComponent.vue';

export default {

    components:{
        textSubTitleComponent
    },

    props:{
        target: String,
        content: String
    }

}
</script>

<style scoped>

  .link{
    text-decoration: none;
  }

</style>