<template>
  <div class="select-component">
    <div class="selected-options" @click="toggleDropdown">
      <div class="selected-option">
        <template v-if="selectedOptions.length === 0">
          Nenhum selecionado
        </template>
        <template v-else-if="selectedOptions.length === 1">
          1 selecionado
        </template>
        <template v-else>
          {{ selectedOptions.length }} selecionados
        </template>
      </div>
      <div class="toggle-icon">{{ isDropdownVisible ? '▲' : '▼' }}</div>
    </div>
    <div class="dropdown" v-show="isDropdownVisible">
      <div class="option" v-for="(option, index) in options" :key="option.name" @click="toggleOption(option)">
        <div class="checkbox-container">
          <div class="row">
            <div class="col-md-3">
              <input type="checkbox" class="checkbox-names" :id="'checkbox-' + (index + 1)" :value="index + 1" v-model="option.selected">
              <span class="checkmark"></span>
            </div>
            <div class="col-md-9 text-montserrat">
              {{ option.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { name: 'Luana Almeida Gomes', selected: false },
        { name: 'Juan Silva Pedro', selected: false },
        { name: 'João Batista dos Santos', selected: false }
      ],
      isDropdownVisible: false,
    };
  },
  computed: {
    selectedOptions() {
      return this.options.filter(option => option.selected);
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    toggleOption(option) {
      option.selected = !option.selected;
    },
  },
};
</script>

<style scoped>
.select-component {
  position: relative;
  display: inline-block;
  width: 100%;
}

.selected-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid #a9a1a1;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-icon {
  font-size: 12px;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #a9a1a1;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
}

.option {
  display: flex;
  align-items: center;
  padding: 8px;
  text-align: start;
  cursor: pointer;
}

.option input[type="checkbox"] {
  margin-right: 8px;
}

.selected-option{
  font-size: 14px;
  margin-right: 5px;
  color: #333333ab;
  font-weight: 500;
}

.row{
  display: flex;
}

.col-md-9{
  width: 70%;
}

.col-md-1{
  width: 30%;
}

.text-montserrat{
  font-family: MontSerrat;
  font-size: 13px;
  width: 100%;
}

.checkbox-names{
  width: 18px;
  height: 18px;
}

</style>