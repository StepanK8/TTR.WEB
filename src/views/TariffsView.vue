<template lang="">
    <div>
        <h2>Тарифы</h2>
        <h3>Новопокровский филиал ООО «ТеплоТрансРемонт»</h3>
        <!-- <p class="mute">РАЗДЕЛ В РАЗРАБОТКЕ</p> -->
        <DownloadApp :name="'Приказ на установление тарифа на ТЭ_Новопокровский филиал ТТР.pdf'" :folderName="folderName"/>
        <br>
        
        <h3>Апшеронский филиал ООО «ТеплоТрансРемонт»</h3>
        <p>Тариф на тепловую энергию</p>
        <!-- <p class="mute">РАЗДЕЛ В РАЗРАБОТКЕ</p> -->
        <DownloadApp :name="'О применении тарифов на ТЭ_Апшеронский филиал ТТР.docx'" :folderName="folderName"/>
    </div>
</template>
<script>
import DownloadApp from '@/components/DownloadApp.vue';
export default {
    components: {
        DownloadApp,
    },
    data(){
        return{
            folderName: 'tariffs'
        }
    }
}
</script>
<style lang="">
    
</style>