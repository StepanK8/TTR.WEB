<template>
    <div>
        <h2>{{ $route.meta.title }}</h2>
        <br>
        <p v-html="this.$route.meta.html"></p>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    created(){
    },
}
</script>
<style lang="">
    
</style>