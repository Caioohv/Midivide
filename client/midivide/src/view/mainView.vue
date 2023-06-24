<template>
  <div>
    <headerComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import headerComponent from '@/components/header/headerComponent.vue';

export default {
    components:{
        headerComponent
    }
}
</script>

<style scoped>

</style>