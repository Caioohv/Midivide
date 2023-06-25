<template>
  <div class="parent-container">
    <div class="left-content">
        <input type="checkbox" :id="'checkbox-' + keyCheckbox" class="checkbox">
        <label class="label-text" :for="'checkbox-' + key">{{ content }}</label>
    </div>
    <div class="right-content">
        <span class="span-data">{{ dataEvent }}</span>
        <i class="fas fa-pencil-alt icons-pencil"></i>
    </div>
  </div>
</template>

<script>
export default {
   props: {
    keyCheckbox: String,
    content: String,
    dataEvent: String,
  },
};
</script>

<style>
.parent-container {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
}

.left-content {
    display: flex;
    align-items: center;
    width: 80%;
}

.label-text{
    margin-left: 10px;
    font-family: Montserrat;
}

.right-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.icons-pencil{
    margin-left: 10px;
}

.span-data {
    color: #EFA00B;
}

.checkbox{
    width: 20px;
    height: 20px;
}
/* Importando o ícone do Font Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
</style>
