<template lang="">
    <div>
        <h2>Потребителям</h2>
        <div style="height: 10px"></div>
        <div >
            <MiniNavigation/>
            <br>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import MiniNavigation from '@/components/MiniNavigation.vue';
export default {
    components: {
        MiniNavigation,
    },
}
</script>
<style lang="">
    
</style>