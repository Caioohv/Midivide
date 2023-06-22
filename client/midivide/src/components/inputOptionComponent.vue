<template>
    <select :class="themeClassChange">
      <option value="">{{placeholder}}</option>
      <option :key="item.id" v-for="item in itens" :value="item.id">
        {{ item.nome }}
      </option>
    </select>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    itens: [],
    placeholder: String,
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
.default {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  border-radius: 5px;
  width: 115%;
}

.themeLight {
  background: #e8e8e8;
}

.themeDark {
  background: #e8e8e8;
}

select {
  border: none;
  padding-left: 5px;
  cursor: pointer;
}

@media (max-width: 1100px) {
    
    .default{
        width: 120%;
    }

}

</style>
