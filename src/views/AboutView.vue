<template>
    <div>
        <MiniNavigation v-if="$route.meta.title == 'О компании'" />
        <br>
        <h2 v-if="$route.meta.title !== 'О компании' && $route.meta.title !== 'Описание деятельности'" class="about__title">
            {{ $route.meta.title }}</h2>
        <router-view></router-view>
    </div>
</template>
<script>
import MiniNavigation from '@/components/MiniNavigation.vue';
export default {
    mounted() {
        console.log(this.$route);
        this.$router.push({ name: 'description' })
    },
    components: {
        MiniNavigation,
    },
}
</script>
<style lang="scss">
.about {
    &__title {
        text-align: center;
    }
}
</style>