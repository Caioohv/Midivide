<template>
    <headerComponent />
    <div class="sections">
        <boxComponent class="body" widths="20" heights="85">
        
        </boxComponent>
        <boxComponent class="body" widths="80" heights="85">
        </boxComponent>
    </div>
</template>

<script>
import boxComponent from "@/components/boxComponent.vue";
import headerComponent from "@/components/headerComponent.vue";

export default {
  components: {
    boxComponent,
    headerComponent
  }
};
</script>

<style scoped>
.sections{
    display: flex;
}
</style>