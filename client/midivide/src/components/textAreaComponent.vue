<template>
  <div class="text-area-component">
    <div class="text-area-wrapper">
      <textarea class="text-area" v-model="inputValue"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    };
  },
};
</script>

<style scoped>
    .text-area-component{
        margin-left: 20px;
    }
    .text-area{
        width: 90%;
        background-color: rgba(0,0,0,0);
        border: 1px solid #a9a1a1;
        border-radius: 10px;
        height: 100px;
        padding: 10px;
    }
    .text-area:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
</style>
