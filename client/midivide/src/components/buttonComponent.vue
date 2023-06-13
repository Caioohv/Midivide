<template>

    <button :style="'background-color: ' + bgc + '; color: ' + color + '; height: ' + height + '%; width: ' + width + '%;'" >{{ value }}</button>

</template>

<script>
export default {

    props:{
        value: String,
        color: String,
        width: String,
        height: String,
        bgc: String 
    }

}
</script>

<style scoped>

    input, button{
        border-radius: 45px;
        border: none;
        cursor: pointer;
        font-size: 16px;
        font-weight: 400;
        transition: 0.3s;
        height: 45px;   
    }

    button:hover{
        transform: scale(1.02);
    }

    button:active{
        transform: scale(0.9);
    }


</style>