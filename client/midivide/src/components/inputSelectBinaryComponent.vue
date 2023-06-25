<template>
  <div class="checkbox-container">
    <div class="option" :class="{ activeYes: selectedOption === 'sim' }" @click="selectOption('sim')">Sim</div>
    <div class="pipeline">|</div>
    <div class="option" :class="{ activeNo: selectedOption === 'nao' }" @click="selectOption('nao')">Não</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    }
  }
};
</script>

<style scoped>
.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  border-radius: 20px;
  border: 1px solid #a9a1a1;
  margin-top: 10px;
}

.option {
    cursor: pointer;
    padding: 10px;
    text-align: center;
    width: 100%;

}

.option.activeYes {
    background-color: #19B184;
    border-radius: 20px;
    color: white;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}

.option.activeNo {
  background-color: #DB2955;
  color: white;
  border-radius: 20px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

</style>
