<template lang="">
    <div>
        <h3>{{$route.meta.fullName}}</h3>
        <p>{{$route.meta.subTitle}}</p>
        <!-- <p class="mute">РАЗДЕЛ В РАЗРАБОТКЕ</p> -->
        <!-- <DownloadApp :name="'Приказ на установление тарифа на ТЭ_Новопокровский филиал ТТР.pdf'" :folderName="folderName"/> -->

        <DownloadApp v-for="file in $route.meta.files" :key="file" :name="file" :folderName="folderName" icon="true"/>
        <br>
        
    </div>
</template>
<script>
import DownloadApp from '@/components/DownloadApp.vue';
export default {
    components: {
        DownloadApp,
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