<template>
  <span :class="themeClassChange" :style="'color: ' + color + '; font-size: ' + size + 'px; padding: ' + height + 'px;'">{{ content }}</span>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  props: {
    content: String,
    color: String,
    size: String,
    height: String
  },

  computed: {
    ...mapGetters({
      theme: "getTheme",
    }),

    themeClassChange() {
      return {
        default: true,
        themeLight: this.theme === "light",
        themeDark: this.theme === "dark",
        textTitle: true,
      };
    },
  },
};
</script>

<style scoped>

    @font-face {
        font-family: 'Montserrat';
        src: url('../assets/fonts/Montserrat-VariableFont_wght.ttf');
    }

    .default{
        font-size: 32px;
        font-weight: 700;
        padding: 20px;
        font-family: 'Montserrat';
    }

    .themeLight{
      color: #333333;
    }

    .themeDark{
      color: #E8E8E8;
    }

    /* Responsividade */
    @media (max-width: 870px) {
      .default{
        font-size: 20px !important;
      }
    }


</style>
