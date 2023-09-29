<template>
    <div class="footer">
        <div class="footer__wrap">
            <div class="footer__topRow">
                <router-link v-for="link in links" :to="{ name: link.link }">{{ link.name }}</router-link>
            </div>
            <p class="footer__copyright">© 2023 ООО «Теплотрансремонт»</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            links: [
                { name: 'Главная', link: 'description' },
                { name: 'Реквизиты', link: 'requisites' },
                { name: 'Филиалы', link: 'subsidiaries' },
                { name: 'Нормативная База', link: 'base' },
                { name: 'Платные услуги', link: 'paidServices' },
                { name: 'Тарифы', link: 'tariffs' },
            ]
        }
    },
    methods: {
        scrollUp() {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            })
            this.$emit('scrollTop')
        }
    }
}
</script>
<style lang="scss">
.footer {
    display: flex;
    justify-content: center;
    background: var(--mainColor);
    background: var(--lightGray);
    padding-top: 0px;

    &__wrap {
        width: 1200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 70px 0;
    }

    &__topRow {
        display: flex;
        justify-content: center;
        gap: 40px;

        &>a {
            color: white;
            color: black;
            font-size: 20px;
            text-decoration: none;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    &__copyright {
        font-size: 16px;
        margin-top: 60px;
        color: rgb(132, 132, 132);
    }
}

@media screen and (max-width: $mediaQuery2) {
    .footer {
        margin-top: 40px;

        &__topRow {
            flex-direction: column;

            &>a {
                font-size: 16px;
            }
        }
    }
}
</style>