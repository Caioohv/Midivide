<template>
  <div :style="boxStyle" @click="handleClick">
    <div class="input-container">
      <div class="text-wrapper">
        <div v-if="showTitle" class="text-container">
          <p class="title">{{ title }}</p>
          <p class="subtitle">{{ subtitle }}</p>
        </div>
        <div v-if="showIcon" class="icon-container">
          <i class="fas fa-arrow-circle-right"></i>
        </div>
        <p v-if="!showTitle && !showIcon" :style="textStyle">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "AUse o seu código no campo acima",
    },
  },
  data() {
    return {
      isClicked: false,
    };
  },
  computed: {
    boxStyle() {
      return {
        width: "22%",
        height: "50px",
        backgroundColor: this.text === "Use o seu código no campo acima" ? "#9E76DB" : "#7CEA9C",
        borderRadius: "20px",
        margin: "10px 0",
        padding: "30px",
      };
    },
    showIcon() {
      return this.text !== "Use o seu código no campo acima";
    },
    showTitle() {
      return this.showIcon && this.title && this.subtitle;
    },
    title() {
      return "República DNA";
    },
    subtitle() {
      return "R. José Lourenço Kelmer, 710 - São Paulo";
    },
    textStyle() {
      return {
        textAlign: "left",
        margin: "0",
        color: "#fff",
      };
    },
  },
  methods: {
    handleClick() {
      this.isClicked = true;
      setTimeout(() => {
        this.isClicked = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.input-container {
  position: relative;
}

.text-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon-container {
  color: #fff;
  font-size: 30px;
  margin-left: 4px;
  margin-right: 4px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  text-align: start;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}

.subtitle {
  font-size: 12px;
  text-align: start;
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
}
</style>
