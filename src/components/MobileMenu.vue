<template>
    <div class="menu">
        <div class="menu__nav">
            <SidebarApp />
            <!-- <div class="menu__nav_link" v-for="(link, idx) in links" :key="idx" @click="$emit('scrollTo', idx)">
            <p>{{link.name}}</p>
            <img src="@/assets/arrow_right.svg">
        </div> -->
        </div>
    </div>
</template>
<script>
import SidebarApp from '@/components/SidebarApp.vue';
export default {
    components: { SidebarApp },
    props: {
        links: Array,
    },
}
</script>
<style lang="scss">
.menu {
    width: 100vw;
    height: calc(100vh - 70px);
    top: 70px;
    left: 0;
    position: fixed;
    background: white;
    padding: 4vw 5vw 12vw;
    z-index: 100;

    &__nav {
        display: flex;
        flex-direction: column;
        margin-top: 0;
        height: 100%;

        &_link {
            height: 55px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-left: 10px;
            padding-right: 25px;
            align-items: center;

            &>p {
                @include baseText;
                // font-weight: 700;
                font-size: 16px;
                color: rgba(25, 29, 31, 0.7);
            }

            &>img {
                height: 13px;
            }
        }

    }
}
</style>