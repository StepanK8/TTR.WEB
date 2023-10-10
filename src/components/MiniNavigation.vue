<template>
    <div class="mini-navig__wrap" :class="{ 'mini-navig__wrap--grid': styleGrid }">
        <div v-for="link in childrens">
            <router-link active-class="mini-navig__link--active" class="mini-navig__link" :to="{ name: link.name }">
                {{ link.meta.fullTitle ?? link.meta.title }}</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            childrens: null,
        }
    },
    props: {
        styleGrid: Boolean,
    },
    mounted() {
        console.log('start');
        this.childrens = this.$route.matched[0].children
        // find(el => el == this.$router.name));
        console.log(this.$route)
    },
}
</script>
<style lang="scss">
.mini-navig {
    &__wrap {
        display: flex;
        gap: 20px;
        color: var(--black);
        flex-wrap: wrap;

        &--grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;

            &>div {
                width: 100%;

                &>a {
                    width: 100%;
                    display: block;
                }
            }
        }
    }

    &__link {
        padding: 10px 30px;
        background: #eaeaea;
        border-radius: 5px;
        text-decoration: none;
        color: var(--black);
        white-space: nowrap;
        transition: .1s;
        font-size: 18px;

        &--active {
            background: var(--mainColor);
            color: white;
        }

        &:hover {
            color: var(--black);
            background: #d8d6e5;
        }
    }
}

@media screen and (max-width: $mediaQuery1) {}

@media screen and (max-width: $mediaQuery2) {
    .mini-navig {
        display: none;

        &__link {
            font-size: 14px;
            white-space: wrap;
        }

        &__wrap {
            &--grid {
                grid-template-columns: 1fr;

                &>div {
                    width: var(--width);
                }
            }
        }
    }
}</style>