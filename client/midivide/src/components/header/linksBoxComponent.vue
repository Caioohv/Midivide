<template>
    <div :class="themeClassChange" >
        <slot></slot>    
    </div>
</template>

<script>
 import { mapGetters } from "vuex";

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
    border-radius: 40px;
    padding: 10px 20px 10px 20px;
    display: flex;
    column-gap: 10px;
}
.themeLight{
    background-color: #E8E8E8;
}

.themeDark{
    background-color: #001011;
}

</style>