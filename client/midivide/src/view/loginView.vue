<template>
        <boxComponent heights="547" widths="652">
            <div class="leftSize">

                <div class="logoBox">
                    <logo1Component/>
                </div>

                <div class="titleBox">
                    <titleTextComponent content="Bem vindo"/>
                    <titleTextComponent content="de volta!"/>
                </div>

                <div class="inputBox">
                    <textInputComponent placeholder="Seu usuário"/>  
                    <textInputComponent placeholder="Sua senha"/>
                </div>

                <div class="buttonBox">
                    <router-link to="/norep">
                        <buttonComponent value="Entrar" bgc="#35FF69" color="#001011" width="150" height="30"/>
                    </router-link>
                </div>

                <div class="fogetBox">
                    <textBodyComponent content="Esqueci minha senha!"/>
                </div>

            </div>
            <div class="rightSize">

                <div class="merchanBox">
                    <TextTitleComponent content="O sistema que" size="24" color="#333333" height="29"/>
                    <TextTitleComponent content="organiza sua" size="24" color="#333333" height="29"/>
                    <TextTitleComponent content="moradia" size="24" color="#333333" height="29"/>
                    <textSubTitleComponent content="E facilita sua vida!" color="#333333" height="40" size="20"/>
                </div>
                
                <div class="buttonBox">
                    <router-link to="/register">
                        <buttonComponent value="Crie sua conta!" bgc="#9E76DB" color="#F4F7F5" width="150" height="30"/>
                    </router-link>
                </div> 

                <div class="toogleBox">
                    <textSubTitleComponent content="Tema Escuro:" color="#333333" height="40" size="20"/>
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
        margin-top: 400px;
    }

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
        background-color: #35FF69;
        border-radius: 0px 16px 16px 0px;
    }



</style>