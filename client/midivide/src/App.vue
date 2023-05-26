<template>
  <div :class="themeClassChange">
    <router-view></router-view>
  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: 'App',

  computed:{

    ...mapGetters({
      theme: "getTheme"
    }),

    themeClassChange() {
      return {
        default: true,
        themeLight: this.theme === "light",
        themeDark: this.theme === "dark",
      };
    },

  }


}
</script>

<style scoped>

.default{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.themeLight{
  background-color: #E8E8E8;
}

.themeDark{
  background-color: #1E1E1E;
}

</style>
