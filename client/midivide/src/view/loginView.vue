<template>
        <boxComponent heights="100" widths="100">
            <div class="leftSize">

                <div class="header">
                    <div class="logoBox">
                        <logo1Component/>
                    </div>

                    <div class="toogleBox toogleBoxMobile">
                        <textSubTitleComponent content="Tema Escuro:" color="#333333" height="30" size="20"/>
                        <buttonToogleComponent />
                    </div>
                </div>

                <div class="titleBox">
                    <titleTextComponent content="Bem vindo" height="0"/>
                    <titleTextComponent content="de volta!" height="0"/>
                </div>

                <div class="inputBox">
                    <textInputComponent placeholder="Seu usuário"/>  
                    <textInputComponent placeholder="Sua senha"/>
                </div>

                <div class="buttonBox">
                    <buttonComponent value="Entrar" bgc="#35FF69" color="#001011" width="100" height="100"/>
                </div>

                <div class="fogetBox">
                    <textBodyComponent content="Esqueci minha senha!"/>
                </div>

                <div class="buttonBox buttonBoxCelular">
                    <router-link to="/register">
                        <textBodyComponent content="Não possui conta? Crie sua conta aqui!"/>
                    </router-link>
                </div> 

            </div>
            <div class="rightSize">

                <div class="merchanBox">
                    <TextTitleComponent content="O sistema que" size="24" color="#333333" height="2"/>
                    <TextTitleComponent content="organiza sua" size="24" color="#333333" height="2"/>
                    <TextTitleComponent content="moradia" size="24" color="#333333" height="2"/>
                    <textSubTitleComponent content="E facilita sua vida!" color="#333333" height="20" size="20"/>
                </div>
                
                <div class="buttonBox">
                    <router-link to="/register">
                        <buttonComponent value="Crie sua conta!" bgc="#9E76DB" color="#F4F7F5" width="100" height="100"/>
                    </router-link>
                </div> 

                <div class="toogleBox">
                    <textSubTitleComponent content="Tema Escuro:" color="#333333" height="30" size="20"/>
                    <buttonToogleComponent />
                </div>

            </div>
        </boxComponent>

</template>

<script>
import boxComponent from '@/components/boxComponent.vue';
import textInputComponent from '@/components/InputTextComponent.vue';
import titleTextComponent from '@/components/textTitleComponent.vue';
import logo1Component from '@/components/logo1Component.vue';
import buttonComponent from '@/components/buttonComponent.vue';
import textBodyComponent from '@/components/linkComponent.vue';
import textSubTitleComponent from '@/components/textSubTitleComponent.vue';
import TextTitleComponent from '@/components/textTitleComponent.vue';
import buttonToogleComponent from '@/components/buttonToogleComponent.vue';

export default {
    components:{
    boxComponent,
    textInputComponent,
    titleTextComponent,
    logo1Component,
    buttonComponent,
    textBodyComponent,
    textSubTitleComponent,
    TextTitleComponent,
    buttonToogleComponent
},
    
}
</script>

<style scoped>

    .logoBox{
        margin-bottom: 40px;
    }

    .titleBox{
        margin-bottom: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .inputBox{
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }

    .buttonBox{
        margin-top: 31px;
    }

    .buttonBox button{
        padding: 15px;
    }

    .fogetBox{
        margin-top: 9.5px;
    }

    .merchanBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .toogleBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        margin-top: 75vh;
    }

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
        background-color: #35FF69;
        border-radius: 0px 16px 16px 0px;
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
    @media (max-width: 900px) {
        .header{
            height: 71px;
            margin-bottom: 20px;
        }
        .titleBox{
            margin-bottom: 20px;
        }
        .textTitle{
            font-size: 15px;
        }
    }
    @media (max-width: 870px) {
        .rightSize{
            width: 30% !important;
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
            padding: 50px;
            align-items: normal;
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
            width: 50%;
        }

        .toogleBoxMobile {
            margin-top: 0;
            margin-bottom: 40px;
            align-self: flex-end;
            display: flex;
        }
    }

    @media (max-width: 380px) {
        .toogleBoxMobile {
            max-width: 60px;
        }
        .toogleBoxMobile span{
            font-size: 60px;
        }
        .logoBox{
            width: 60px;
            height: 60px;
        }
    }

</style>