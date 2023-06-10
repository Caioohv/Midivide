<template>
  <div>
    <div :class="themeClassChange">
      <input :type="setType" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    placeholder: String,
    type: String
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

    setType(){
      if(this.type == ''){
        return 'text';
      }
      else{
        return this.type;
      }
    }

  },
};
</script>

<style scoped>
.default {
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s;

  border-radius: 5px;
}

.body:hover {
  cursor: text;
  transform: scale(1.02);
}

.themeLight {
  background: #e8e8e8;
}

.themeDark {
  background: #e8e8e8;
}

input {
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 10px;
}
</style>
