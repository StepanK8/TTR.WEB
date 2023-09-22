<template>
    <div>
        <!-- <h2>{{ $route }}</h2> -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    created(){
        console.log(this.$route);
    }
}
</script>
<style lang="">
    
</style>