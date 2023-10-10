<template>
    <div>
        <div class="standards__navig">
            <router-link :to="{ name: 'hotWaterApp' }">Горячее водоснабжение</router-link>
            <router-link :to="{ name: 'heating' }">Отопление</router-link>
        </div>
        <br>
        <!-- <router-link :to="{name: 'heating'}"></router-link> -->
        <router-view />
    </div>
</template>
<script>
import MiniNavigation from '@/components/MiniNavigation.vue'
export default {
    components: {
        MiniNavigation
    },
}
</script>
<style lang="scss">
.standards {
    &__navig {
        display: flex;
        gap: 40px;
    }
}
</style>