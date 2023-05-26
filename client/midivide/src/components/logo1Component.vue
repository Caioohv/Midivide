<template>

    <img v-if="theme == 'light'" src="../assets/img/logo1Light.png" alt="Logo do Midivide(Uma casa e midivide escrito em baixo)">
    <img v-if="theme == 'dark'" src="../assets/img/logo1Dark.png" alt="Logo do Midivide(Uma casa e midivide escrito em baixo)">

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    
    computed:{
        ...mapGetters({
            theme: "getTheme"
        })
    }

}
</script>

<style scoped>

    img{
        height: 71px;
        width: 71px;
    }

</style>