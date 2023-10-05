<template>
    <div>
        <h2>{{ $route.meta.title }}</h2>
        <MiniNavigation :styleGrid="true" />
        <br>
        <router-view></router-view>
    </div>
</template>
<script>
import MiniNavigation from '@/components/MiniNavigation.vue'
export default {
    components: {
        MiniNavigation,
    },
}
</script>
<style lang="">
    
</style>