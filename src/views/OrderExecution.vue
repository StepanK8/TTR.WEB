<template>
    <div>
        <MiniNavigation :styleGrid="true" />
        <br>

        <h2>{{ $route.meta.title }}</h2>
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