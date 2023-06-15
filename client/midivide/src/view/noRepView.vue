<template>
    
    <boxComponentVue  class="box" widths="652" heights="547">

        <logo1Component />

        <div class="textBox">
            <textTitleComponent content="Vimos que você não está" />
            <textTitleComponent content="em uma moradia :/" />
        </div>

        <div class="buttonBox">
            <buttonComponent bgc="#35FF69" color="#001011" height="54" width="266" value="Encontrar uma moradia"/>
            <buttonComponent bgc="#9E76DB" color="#E8E8E8" height="54" width="266" value="Criar uma moradia"/>
        </div>

        <div class="toogleBox">
            <textSubTitleComponent content="Tema Escuro:"/>
            <buttonToogleComponent />
        </div>

    </boxComponentVue>

</template>

<script>

import boxComponentVue from '@/components/boxComponent.vue'
import logo1Component from '@/components/logo1Component.vue'
import textTitleComponent from '@/components/textTitleComponent.vue';
import buttonComponent from '@/components/buttonComponent.vue';
import buttonToogleComponent from '@/components/buttonToogleComponent.vue';
import textSubTitleComponent from '@/components/textSubTitleComponent.vue';

export default {
    
    components:{
        boxComponentVue,
        logo1Component,
        textTitleComponent,
        buttonComponent,
        buttonToogleComponent,
        textSubTitleComponent
    }


}
</script>

<style scoped>
    .box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .textBox{
        margin-top: 70px;
        margin-bottom: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .buttonBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 20px;
        margin-bottom: 30px;
    }

    .toogleBox{
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 10px;
    }


</style>