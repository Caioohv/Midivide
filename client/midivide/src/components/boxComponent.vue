<template>
    <div :style="size" :class="themeClassChange" >
        <slot></slot>    
    </div>
</template>

<script>

    import { mapGetters } from "vuex";

    export default {

        props:{
            heights: String,
            widths: String,
        },

        data(){
            return{
                size: `height: ${this.heights}%; width: ${this.widths}%;`
            }
        },

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
        border-radius: 20px;
        width: 100%;
    }
    .themeLight{
        background-color: #F4F7F5;
    }

    .themeDark{
        background-color: #262626;
    }

</style>