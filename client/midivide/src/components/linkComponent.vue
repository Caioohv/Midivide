<template>
  <a class="link-component">{{ content }}</a>
</template>

<script>

export default {
  props: {
    content: String,
  }
};
</script>

<style scoped>

    @font-face {
        font-family: 'Hind';
        src: url('../assets/fonts/HindMadurai-Regular.ttf');
    }

    a{
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        font-family: 'Hind';
        color: #9E76DB;
        text-decoration: none;
        cursor: pointer;
    }

    a:hover{
      color: #9060da;
    }

   

</style>
