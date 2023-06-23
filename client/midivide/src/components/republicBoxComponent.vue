<template>
  <div class="body" :id="code">
    <div class="textBox">
      <textTitleComponent
        class="title"
        :content="title"
        color="#262626"
        size="20"
      />
      <textSubTitleComponent :content="addres" color="#262626" size="16" />
    </div>

    <i class="fas fa-arrow-circle-right" @click="sinalEmit"></i>
  </div>
</template>

<script>
import textTitleComponent from "./textTitleComponent.vue";
import textSubTitleComponent from "./textSubTitleComponent.vue";

export default {
  props: {
    title: String,
    addres: String,
    code: String,
  },

  components: {
    textTitleComponent,
    textSubTitleComponent,
  },

  methods: {
    sinalEmit() {
      this.$emit("showHouseDetailsActive", this.code);
    },
  },
};
</script>

<style scoped>
.body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #35ff69;
  border-radius: 30px;
  padding: 20px 30px 20px 30px;
  max-width: 23%;
}

.textBox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 80%;
  text-align: left;
}

.title {
  margin: -20px -20px -5px -20px;
}

.fas {
  color: #262626;
  font-size: 30px;
  cursor: pointer;
}

@media (max-width: 950px) {
  .body {
    max-width: 50%;
  }
}
@media (max-width: 950px) {
  .body {
    max-width: 57%;
  }
}
@media (max-width: 380px) {
  .body {
    max-width: 70%;
  }
}
@media (max-width: 320px) {
  .fas {
    display: none;
  }
  .textBox {
    max-width: 100%;
  }
}
</style>
