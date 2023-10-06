<template>
    <div class="header__empty"></div>
    <header class="header"
        :class="{ 'header--shadow': isShadow, 'header--hide': isHide, 'header--white': isOpenMobileMenu }">
        <div class="header__wrap">
            <div class="header__wrap_left">
                <img src="@/assets/logo.png" alt="">
                <div class="header__column">
                    <p>Общество с ограниченной ответственностью</p>
                    <h2>"Теплотрансремонт"</h2>
                </div>
                <div class="header__wrap_left-menu" @click="$emit('toggleMobileWrap')">
                    <img v-if="isOpenMobileMenu" style="transform: scale(0.7)" class="header__wrap_left-menu-img"
                        src="@/assets/cross.svg" alt="">
                    <img v-else class="header__wrap_left-menu-img" src="@/assets/menu.svg" alt="">
                </div>
            </div>
            <div class="header__wrap_right">
                <a href="tel:+78612752915" class="header__contact">
                    <img src="@/assets/phone.svg" alt="">
                    8 (861) 275-29-15
                </a>
                <a href="mailto:ttr23rus@mail.ru" class="header__contact">
                    <img src="@/assets/email.svg" alt="">
                    ttr23rus@mail.ru
                </a>
            </div>
        </div>
    </header>
    <MobileMenu v-if="isOpenMobileMenu" :links="links" @openRequest="$emit('openRequest')" @scrollTo="scrollTo" />
</template>
<script>
import MobileMenu from '@/components/MobileMenu.vue'
export default {
    components: {
        MobileMenu,
    },
    props: {
        triggerToShowHeader: Number,
        isOpenMobileMenu: Boolean,
    },
    data() {
        return {
            links: [
                { name: 'Главная', link: '' },
                { name: 'О продукте', link: '' },
                { name: 'Функционал', link: '' },
                { name: 'Контакты', link: '' },
            ],
            isShadow: false,
            isHide: false,
            isOpenMenu: false,
        }
    },

    mounted() {
        const callback = (e) => {
            if (window.scrollY < 50) {
                this.isHide = false
            }
            else {
                this.isHide = (e.wheelDelta < 0) && !this.isOpenMenu
            }
        }
        const checkShadow = (e) => {
            this.isShadow = window.scrollY > 150
        }
        window.addEventListener('wheel', callback)
        window.addEventListener('scroll', checkShadow)
        // if(this.$refs.target.getBoundingClientRect().bottom < window.innerHeight*1.4){
        //     // console.log("!!!!!!!"); 
        //     this.animation = true
        // }
    },
    methods: {
        scrollTo(idx) {
            this.isHide = false
            this.$emit('scrollTo', idx)
        },
    },
    watch: {
        triggerToShowHeader() {
            this.isHide = false
            this.isShadow = false
        },
        

    },

}
</script>
<style lang="scss">
.header {
    width: 100%;
    height: var(--heightHeader);
    display: flex;
    justify-content: center;
    background: white;
    z-index: 20;
    top: 0;
    left: 0;
    transition: .3s;
    // border-bottom: 1px solid var(--darkGray);

    &__empty {
        height: var(--heightHeader);
        background: white;
        display: none;
    }

    &--shadow {
        box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.06);
    }

    &--hide {
        // transform: translateY(-100%);
        box-shadow: none !important;
    }

    &--white {
        background: white;
    }

    &__wrap {
        // width: var(--width);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &_left {
            display: flex;
            align-items: center;

            &>img {
                width: 170px;
                height: 170px;
                margin-right: 16px;
            }

            &-menu {
                display: none;
            }
        }

        &_right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: row;

        }
    }

    &__contact {
        margin-left: 30px;
        @include baseText(20px);
        font-weight: 700;
        display: flex;
        width: 230px;
        margin-bottom: 10px;
        text-decoration: none;
        cursor: pointer;

        &>img {
            width: 25px;
            margin-right: 10px;
        }

        &:nth-child(2) {
            font-weight: 400;
        }
    }

    &__column {
        flex-direction: column;
        align-items: center;

        &>p {
            @include baseText(18px);
            font-weight: normal;
            color: var(--mainColor) !important;
            letter-spacing: 0.024em;
            // font-family: 'Roman-md' !important;
            // font-weight: 800 !important;
        }

        &>h2 {
            @include baseText(32px);
            font-weight: bold;
            text-transform: uppercase;
            color: var(--mainColor);
            text-align: center;
            // font-family: 'Roman-md' !important;
            letter-spacing: 0.08em;
            font-weight: 800 !important;
        }
    }
}

@media screen and (max-width: $mediaQuery1-1) {
    .header {
        &__wrap {
            &_right {
                flex-direction: column;
            }
        }
    }
}

@media screen and (max-width: $mediaQuery2) {
    .header {
        height: 75px;

        &__wrap {
            padding: 0 0;

            &_right {
                display: none;
            }

            &_left {
                width: 90vw;

                &>img {
                    height: 90%;
                    width: 18vw;
                }

                &-menu {
                    flex-grow: 1;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    &-img {
                        width: 42px !important;
                        height: 42px !important;
                    }
                }

            }
        }

        &__column {
            &>p {
                font-size: 10px;
                text-align: left;
                letter-spacing: -0.04em;
                // display: none;
            }

            &>h2 {
                font-size: 4.2vw;
                text-align: left;
            }
        }
    }
}
</style>