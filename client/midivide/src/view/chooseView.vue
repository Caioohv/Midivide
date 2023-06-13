<template>
        <boxComponent heights="100" widths="100">
            <div class="leftSize">

                <div class="header">
                    <div class="logoBox">
                        <router-link to="/">
                            <logo1Component/>
                        </router-link>
                    </div>
                </div>

                <div class="titleBox">
                    <titleTextComponent content="Vimos que você não está " height="0"/>
                    <titleTextComponent content="em uma república :/" height="0"/>
                </div>

                <div class="inputBox">
                    <div class="buttonBox">
                        <router-link to="/register">
                            <buttonComponent value="Encontrar uma república" bgc="#35FF69" color="#001011" width="100" height="100"/>
                        </router-link>
                    </div>
                    <div class="buttonBox">
                        <router-link to="/register">
                            <buttonComponent value="Cadastrar minha república" bgc="#9E76DB" color="#F4F7F5" width="100" height="100"/>
                        </router-link>
                    </div>
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
    .leftSize{
        width: 50%;
    }
    .header{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .titleBox{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        
    }
    .inputBox{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .buttonBox{
        width: 50%;
        margin-top: 20px;
    }
    .buttonBox button{
        padding: 15px;
    }
    @media (max-width: 870px) {
        .leftSize{
            width: 100%;
        }
    }
   

</style>