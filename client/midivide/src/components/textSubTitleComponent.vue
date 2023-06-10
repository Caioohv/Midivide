<template>
    <span :class="themeClassChange" :style="'color: ' + color + '; font-size: ' + size + 'px; line-height: ' + height + 'px;'">{{ content }}</span>
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
        };
      },
    },
  };
  </script>
  
  <style scoped>
  
      @font-face {
          font-family: 'Ubuntu';
          src: url('../assets/fonts/Ubuntu-Regular.ttf');
      }
  
      .default{
          font-size: 20px;
          font-weight: 500;
          line-height: 23px;
          font-family: 'Ubuntu';
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
            font-size: 22px;
        }
      }
  
  </style>
  