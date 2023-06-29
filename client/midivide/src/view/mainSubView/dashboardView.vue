<template>
    <div class="dashBody">
        <noticeView  :dash="true" class="noticeDash"/>
        <billView :dash="true" class="billDash"/>
        <taskView :dash="true" class="taskDash"/>
    </div>
</template>

<script>

import noticeView from './noticeView.vue';
import billView from './billView.vue';
import taskView from './taskView.vue';

export default {

    components:{
        noticeView,
        billView,
        taskView
    }

}
</script>

<style scoped>

.dashBody{
    display: flex;
    column-gap: 15px;
    justify-content: center;
    align-items: flex-start;
}

@media (max-width: 500px){
    .dashBody{
        margin-top: 60px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 15px;
    }

    .billDash, .taskDash{
        margin-top: 0;
    }

    .taskDash{
        min-width: 105%;
    }
}

</style>