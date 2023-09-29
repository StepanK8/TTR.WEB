<template>
    <div>
        <div>
            <h2>Концессии</h2>
            <MiniNavigation></MiniNavigation>
            <br>
            <DownloadApp folderName="concessions"
                name="Федеральный закон от 21.07.2005 N 115-ФЗ О концессионных соглашениях.docx" icon="true" />
        </div>
        <!-- <div>
            <router-link to="/концессии/апш">Апшеронский район</router-link>
            <router-link to="/концессии/апш">Апшеронский район</router-link>
        </div> -->
        <!-- <div>
            <router-link v-for="link in $route.matched.slice(1,)" :to="link">{{ link.meta }}</router-link>
        </div> -->
        <router-view></router-view>
    </div>
</template>
<script>
import MiniNavigation from '@/components/MiniNavigation.vue';
import DownloadApp from '@/components/DownloadApp.vue';
export default {
    components: {
        MiniNavigation,
        DownloadApp,
    },
    data() {
    },
    created() {
        console.log(this.$route.matched.slice(1,));
    },
}
</script>
<style lang="">
    
</style>