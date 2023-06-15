<template>
    <boxComponent heights="100">
        <div class="leftSize">

            <div class="header">
                <router-link to="/">
                    <div class="logoBox">
                        <logo1Component/>
                    </div>
                </router-link>

                <div class="toogleBox toogleBoxMobile">
                    <textSubTitleComponent content="Tema Escuro:" color="#333333" height="30" size="20"/>
                    <buttonToogleComponent />
                </div>
            </div>


            <div class="mensageBox">
                <textTitleComponent content="É um prazer" height="0"/>
                <textTitleComponent content="tê-lo aqui!" height="0"/>
            </div>

            <div class="inputBox">
                <InputTextComponent placeholder="Seu CPF"/>
                <InputTextComponent placeholder="Seu Email"/>
                <InputTextComponent placeholder="Seu Nome"/>
                <InputTextComponent placeholder="Sua Senha" type="password"/>
            </div>

            <div class="buttonBox">
                <buttonComponent value="Registar" bgc="#9E76DB" color="#E8E8E8" width="100" height="100"/>
            </div>


            <div class="buttonBox buttonBoxCelular">
                <router-link to="/">
                    <textBodyComponent content="Já possui conta? Entre na sua conta aqui!"/>
                </router-link>
            </div> 

        </div>
        <div class="rightSize">
            <div class="mensageBox">
                <textTitleComponent content="Já possui" color="#E8E8E8" height="0"/>
                <textTitleComponent content="conta?" color="#E8E8E8" height="0"/>
            </div>

            <div class="buttonBox">
                <router-link to="/">
                    <buttonComponent value="Entrar" bgc="#35FF69" color="#262626" width="100" height="100"/>
                </router-link>
            </div>
            <div class="toogleBox">
                <textSubTitleComponent content="Tema Escuro:" color="#E8E8E8" height="30" size="20"/>
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
import textBodyComponent from '@/components/linkComponent.vue';

export default {
    
    components:{
        boxComponent,
        logo1Component,
        textTitleComponent,
        InputTextComponent,
        buttonComponent,
        buttonToogleComponent,
        textBodyComponent,
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
        width: 40%;
        height: 100%;
    }

    .rightSize{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 25%;
        height: 100%;
        background-color: #9E76DB;
        border-radius: 0px 16px 16px 0px;
    }

    .logoBox{
        margin-bottom: 40px;
    }

    .mensageBox{
        margin-bottom: 20px;
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
        row-gap: 10px;
    }

    .toogleBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        margin-top: 75vh;
    }

    .buttonBox button{
        padding: 15px;
    }

    .buttonBoxCelular {
        display: none;
    }

    .toogleBoxMobile{
        display: none;
    }

    .logoBox{
        height: 71px;
        width: 71px;
    }

    /* Responsividade */
    @media (max-width: 870px) {
        .rightSize{
            width: 30% !important;
        }
    }
    @media (max-width: 1180px) and (min-width: 1000px){
        .default[data-v-7ba5bd90] {
            height: 50%;
        }

    }
    @media (max-width: 915px) and (min-width: 500px){
        .inputBox{
            margin-bottom: 5px;
        }
        .logoBox{
            margin-bottom: 5px;
        }
        .textTitle{
            font-size:20px;
        }
    }
    @media (max-width: 740px) and (min-width: 500px){
        .logoBox{
            height: 45px;
            width: 45px;
        }
        .mensageBox {
            margin-bottom: 10px;
        }
    }
    @media (max-width: 700px) {
        .rightSize{
            width: 35% !important;
        }
        .leftSize{
            width: 50%;
        }
    }
    @media (max-width: 500px) {
        .rightSize{
            display: none;
        }
        .leftSize{
            width: 100%;
            align-items: normal;
            justify-content: start;
            padding: 0px;
            padding-top: 15%;
            padding-right: 50px;
            padding-left: 50px;
        }
        .buttonBoxCelular{
            display: flex;
        }
        .buttonBoxCelular a{
            text-decoration: none !important;
        }
        .header {
            display: flex;
            flex-direction: column;
        }
        .logoBox {
            margin-bottom: 40px;
            align-self: flex-start;
        }
        .toogleBox {
            margin-top: 0;
            margin-bottom: 40px;
            align-self: flex-end;
        }
        .inputBox{
            margin-bottom: 15px;
        }
        .inputBox div{
            width: 100%;
        }
        .toogleBoxMobile {
            margin-top: 0;
            margin-bottom: 40px;
            align-self: flex-end;
            display: flex;
        }
        .buttonBoxCelular{
            margin-top: 9.5px;
        }
    }

</style>