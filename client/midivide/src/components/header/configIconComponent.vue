<template>
    <div class="circle" :class="themeClassChange">
        <i @click="sinalEmit" class="fas fa-gear"></i>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    computed:{
            ...mapGetters({
                theme: "getTheme"
            }),

            themeClassChange() {
                return {
                default: true,
                themeLight: this.theme === "light",
                themeDark: this.theme === "dark"
                };
            }

        },
    
}
</script>

<style scoped>

    .default{
        border-radius: 100px;
        width: 100%;
        padding: 10px;
        cursor: pointer;
    }
    .themeLight{
        background-color: #35FF69;
    }

    .themeDark{
        background-color: #9E76DB;
    }

</style>