<template>
    <div>
        <h2>Филиалы</h2>
        <br>
        <h2>Выберите филиал</h2>
        <div class="subsideries__nav">
            <li v-for="(card, idx) in cards" @click="scrollTo(idx)" class="subsideries__nav_link">
                {{ card.configs[0][1]
                    .replace('ООО «ТЕПЛОТРАНСРЕМОНТ»', '') }}</li>
        </div>
        <div v-for="card in cards" ref="card">
            <SubsidiaryApp :data="card" />
        </div>
    </div>
</template>
<script>
import SubsidiaryApp from '@/components/SubsidiaryApp.vue';
export default {
    components: { SubsidiaryApp },
    data() {
        return {
            cards: [
                {
                    configs: [
                        ['Наименование филиала', 'Новопокровский филиал ООО «ТЕПЛОТРАНСРЕМОНТ»'],
                        ['Адрес и местонахождение', '353020 Краснодарский край, Муниципальный район Новопокровский, Новопокровское сельское поселение, станица Новопокровская, ул. Первомайская 66 Д'],
                        ['Директор филиала', 'Коротков Александр Сергеевич'],
                        ['Режим работы', 'понедельник — четверг с 8:00 до 17:00, перерыв с 12:00 до 13:00; пятница с 8:00 до 16:00, перерыв с 12:00 до 12:45']
                    ],
                    phone: '8-928-263-28-61',
                    map: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afd9bdcd3d8f16b3396623aed9201704219dc00a3476aad57373d1e7896c6b9ef&amp;source=constructor" width="350" height="350" frameborder="0"></iframe>',
                },
                {
                    configs: [
                        ['Наименование филиала', 'Апшеронский филиал ООО «ТЕПЛОТРАНСРЕМОНТ»'],
                        ['Адрес и местонахождение', '352690 Краснодарский край, м-р-н Апшеронский, г.п. Апшеронское, г. Апшеронск, пер. Транспортный, 13 (с торца здания)'],
                        ['Директор филиала', 'Ашибова Светлана Викторовна'],
                        ['Режим работы', 'понедельник — четверг с 8:00 до 17:00, перерыв с 12:00 до 13:00; пятница с 8:00 до 16:00, перерыв с 12:00 до 12:45']
                    ],
                    phone: '8-989-831-85-70',
                    map: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A81c6c7731bd071e3044302a7e02c94f9ca4e95d3f147c460ba739827f63cb019&amp;source=constructor" width="350" height="350" frameborder="0"></iframe>',

                },
                {
                    configs: [
                        ['Наименование филиала', 'Новороссийский филиал ООО «ТЕПЛОТРАНСРЕМОНТ»'],
                        ['Адрес и местонахождение', '353925 Краснодарский край, г.о. город Новороссийск, г. Новороссийск, пр-кт. Дзержинского, д. 211 к.4, этаж 4, помещ.7'],
                        ['Директор филиала', 'Репин Александр Львович'],
                        ['Режим работы', 'понедельник — четверг с 8:00 до 17:00, перерыв с 12:00 до 13:00; пятница с 8:00 до 16:00, перерыв с 12:00 до 12:45']
                    ],
                    phone: '8 (928) 426-58-48',
                    map: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a1ad736e667abed70b2415eee8cb1d4318ffe2d7c6c6850c1a09242ffa09016&amp;source=constructor" width="350" height="350" frameborder="0"></iframe>',
                },
            ]

        }
    },
    methods: {
        scrollTo(idx) {
            console.log(this.$refs.card[idx]);
            window.scrollTo({
                top: this.$refs.card[idx].offsetTop,
                behavior: 'smooth',
            })
        }
    },
}
</script>
<style lang="scss">
.subsideries {
    &__nav {
        display: flex;

        &_link {
            @include link;
            margin-right: 20px;
        }
    }
}
</style>