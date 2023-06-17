<template>
  <div class="search-input" :style="{ width: width, height: height }">
    <input type="text" placeholder="Pesquise aqui - Ex: HEB-01" class="input-field" />
    <div class="search-icon-container">
      <i class="fas fa-search search-icon"></i>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
  },
};
</script>

<style scoped>
.search-input {
  display: flex;
  align-items: center;
  background-color: #B7B7B7;
  border-radius: 40px;
  padding: 4px;
  height: 45px;
  justify-content: space-between;

}

.input-field {
  border: none;
  outline: none;
  background-color: transparent;
  color: #333;
  padding: 8px;
}

.search-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px; 
    height: 30px;
    width: 30px;
    background: #E8E8E8;
    border-radius: 20px;
    cursor: pointer;
}

.search-icon {
  font-size: 16px;
  color: #333;
}
</style>
