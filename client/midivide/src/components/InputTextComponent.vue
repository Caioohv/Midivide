<template>
  <div>
    <div :class="themeClassChange" :style="'background-color: ' + bgc + ';border:' + border + ';border-radius:'+borderRadius+'px;color:'+color">
      <input :type="setType" :placeholder="placeholder" :value="value"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    placeholder: String,
    type: String,
    value: String,
    color: String,
    bgc: String,
    border: String,
    borderRadius: String,
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
        inputText: true  
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

  border-radius: 5px;
}

.themeLight {
  background: #e8e8e8;
}

.themeDark {
  background: #e8e8e8;
}

input {
  width: 100%;
  height: 45px;
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 10px;
}
</style>
