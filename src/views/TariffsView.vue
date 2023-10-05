<template lang="">
    <div>
        <h2>Тарифы</h2>
        <MiniNavigation/>
        <br>
        <router-view></router-view>

    </div>
</template>
<script>
import DownloadApp from '@/components/DownloadApp.vue';
import MiniNavigation from '@/components/MiniNavigation.vue';
export default {
    components: {
        DownloadApp,
        MiniNavigation,
    },
    data() {
        return {
            folderName: '/tariffs/'
        }
    }
}
</script>
<style lang="">
    
</style>