<template>
    <boxComponent heights="547" widths="652">
        <div class="leftSize">

            <div class="logoBox">
                <logo1Component />
            </div>

            <div class="mensageBox">
                <textTitleComponent content="É um prazer"/>
                <textTitleComponent content="tê-lo aqui!"/>
            </div>

            <div class="inputBox">
                <InputTextComponent placeholder="Seu CPF"/>
                <InputTextComponent placeholder="Seu Email"/>
                <InputTextComponent placeholder="Seu Nome"/>
                <InputTextComponent placeholder="Sua Senha" type="password"/>
            </div>

            
            <buttonComponent value="Registar" bgc="#9E76DB" color="#E8E8E8" width="150" height="30"/>
            

        </div>
        <div class="rightSize">
            <div class="mensageBox">
                <textTitleComponent content="Já possui" color="#E8E8E8"/>
                <textTitleComponent content="conta?" color="#E8E8E8"/>
            </div>

            <router-link to="/">
                <buttonComponent value="Entrar" bgc="#35FF69" color="#262626" width="150" height="30"/>
            </router-link>

            <div class="toogleBox">
                <textSubTitleComponent content="Tema Escuro:" color="#E8E8E8" height="40" size="20"/>
                <buttonToogleComponent />
            </div>

        </div>
    </boxComponent>
</template>

<script>

import boxComponent from '@/components/boxComponent.vue';
import logo1Component from '@/components/logo1Component.vue';
import textTitleComponent from '@/components/textTitleComponent.vue';
import textSubTitleComponent from '@/components/textSubTitleComponent.vue';
import InputTextComponent from '@/components/InputTextComponent.vue';
import buttonComponent from '@/components/buttonComponent.vue';
import buttonToogleComponent from '@/components/buttonToogleComponent.vue';

export default {
    
    components:{
        boxComponent,
        logo1Component,
        textTitleComponent,
        InputTextComponent,
        buttonComponent,
        buttonToogleComponent,
        textSubTitleComponent
    }

}
</script>

<style scoped>

    .leftSize{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 380px;
        height: 549px;
    }

    .rightSize{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 272px;
        height: 547px;
        background-color: #9E76DB;
        border-radius: 0px 16px 16px 0px;
    }

    .logoBox{
        margin-bottom: 40px;
    }

    .mensageBox{
        margin-bottom: 45px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .inputBox{
        margin-bottom: 28px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 15px;
    }

    .toogleBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        margin-top: 400px;
    }

</style>