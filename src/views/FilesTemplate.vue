<template>
    <div>
        <div v-for="file in $route.meta.files" class="file__row">
            <DownloadApp v-if="$route.meta.style == 'buttons'" :name="file" :folderName="$route.meta.folderName" />
            <a v-else download :href="'/' + $route.meta.folderName + '/' + file">{{ file }}</a>
        </div>
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
            files: [],
        }
    },
    created() {
        this.files = this.$route.meta.files // this.$route.meta - берется из router/index.js 
        // const illustrations = require.context(
        // '/charter/',
        // true,
        // /^(.*\.(?:pdf|docx))$/
        // )
        // console.log(illustrations.keys())
    },

}
</script>
<style lang="scss">
.file {
    &__row {
        display: flex;

        &>a {
            text-decoration: underline;
            color: var(--mainColor);
            text-align: left;

            &:hover {
                // color: #4d6bbb;
            }
        }
    }
}
</style>