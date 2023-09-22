<template>
    <div>
        <div v-for="file in $route.meta.files" class="file__row">
            <a download :href="'/'+$route.meta.folderName+'/'+file">{{ file }}</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            files: [],
        }
    },
    created(){
        this.files = this.$route.meta.files
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
    .file{
        &__row{
            display: flex;
            & > a{
                text-decoration: underline;
                color: var(--mainColor);
                &:hover{
                    // color: #4d6bbb;
                }
            }
        }
    }
</style>