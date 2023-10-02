<template>
    <div>
        <!-- <div class="req__row">
            <p class="req__title">Полное наименование: </p>
            <p class="req__text">Общество с ограниченной ответственностью «ТеплоТрансРемонт»</p>
        </div>

        <div class="req__row">
            <p class="req__title">Сокращенное наименование:  </p>
            <p class="req__text">ООО «ТТР»</p>
        </div>

        <div class="req__row">
            <p class="req__title">Сокращенное наименование:  </p>
            <p class="req__text">ООО «ТТР»</p>
        </div> -->

        <div class="req__card req__card--background">
            <div>
                <div class="req__row">
                    <p class="req__title">Полное наименование: </p>
                    <p class="req__text">Общество с ограниченной ответственностью «ТеплоТрансРемонт»</p>
                </div>

                <div class="req__row">
                    <p class="req__title">Сокращенное наименование: </p>
                    <p class="req__text">ООО «ТТР»</p>
                </div>

                <div class="req__row">
                    <p class="req__title">Юридический адрес </p>
                    <p class="req__text">350042 Краснодарский край, г. Краснодар, ул. Садовая, д.223 офис 43</p>
                </div>

                <div class="req__row">
                    <p class="req__title">Почтовый адрес </p>
                    <p class="req__text">350042 Краснодарский край, г. Краснодар, ул. Садовая, д.223 офис 43</p>
                </div>

                <div class="req__row">
                    <p class="req__title">Генеральный директор</p>
                    <p class="req__text">Репин Александр Львович</p>
                </div>

                <div class="req__row">
                    <p class="req__title">Электронная почта</p>
                    <p class="req__text">ttr23rus@mail.ru</p>
                </div>

                <div class="req__row">
                    <p class="req__title">Телефон</p>
                    <p class="req__text">8 (861) 275-29-64, 275-29-15, 8-989-238-36-96</p>
                </div>
            </div>
        </div>

        <br>
        <br>
        <br>
        <h2>Сведения о филиалах и представительствах:</h2>
        <div v-for="card in cards">
            <SubsidiaryApp :data="card" />
            <!-- <div class="req__card">
                <div class="req__card_left">
    
                    <div class="req__row" v-for="config in card.configs">
                        <p class="req__title">{{ config[0] }} </p>
                        <p class="req__text">{{ config[1] }}</p>
                    </div>
    
                </div>
                <div class="req__card_right">
                    <div v-html="card.map"></div>
                </div>
            </div>
            <div class="req__phone">
                <p>ТЕЛЕФОН ГОРЯЧЕЙ ЛИНИИ ПРИ АВАРИЯХ</p>
                <p>{{ card.phone }}</p>
            </div> -->
        </div>



        <div class="req__card req__card--background">
            <div>
                <div class="req__row">
                    <p class="req__title">Орган тарифного регулирования </p>
                    <p class="req__text">Общество с ограниченной ответственностью «ТеплоТрансРемонт»</p>
                </div>

                <div class="req__row">
                    <p class="req__title">Руководитель</p>
                    <p class="req__text">С.Н. Милованов</p>
                </div>

                <div class="req__row">
                    <p class="req__title">тел.</p>
                    <p class="req__text">+7 (861) 255-14-20 (приёмная), факс: +7 (861) 262-04-46</p>
                </div>

                <div class="req__row">
                    <p class="req__title">Режим работы:</p>
                    <p class="req__text">понедельник — четверг с 9:00 до 18:00, перерыв с 13:00 до 13:50; пятница с 9:00 до
                        17:00, перерыв с 13:00 до 13:40</p>
                </div>

                <div class="req__row">
                    <p class="req__title">Адрес юридический, фактический, почтовый</p>
                    <p class="req__text">350063, г. Краснодар, ул. Красная, 22 </p>
                </div>

                <div class="req__row">
                    <p class="req__title">Электронная почта</p>
                    <p class="req__text">dct@krasnodar.ru</p>
                </div>

            </div>
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
    }
}
</script>
<style lang="scss" scoped>
// .req {
//     &__card {
//         display: flex;


//         &_left {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//         }

//         &--background {
//             background: #ffffff;
//             padding: 30px;
//             border-radius: 30px;
//             box-shadow: 0 0 5px 5px #00000013;
//             display: block;
//             margin: 20px auto 40px;
//             width: 800px;
//         }
//     }

//     &__title {
//         @include baseText(18px);
//         text-align: center;
//         color: rgb(0, 0, 0);
//         font-weight: 700;
//     }

//     &__text {
//         @include baseText(18px);
//         color: rgb(77, 77, 77);
//         text-align: center;
//         font-weight: 400;
//     }

//     &__row {
//         padding: 10px;
//         display: flex;
//         flex-direction: column;
//         align-items: center;

//     }

//     &__phone {
//         border: 3px solid red;
//         margin: auto;
//         width: 500px;
//         height: 140px;
//         margin: 50px auto 120px;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;

//         &>p {
//             font-weight: 700;
//             font-size: 20px;

//             &:nth-child(2) {
//                 font-size: 28px;
//             }
//         }
//     }
// }
</style>