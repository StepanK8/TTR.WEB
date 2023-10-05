<template>
    <div v-if="$route.name == 'home'" class="descr__sliderWrap">
        <HomeSlider :images="images" />
    </div>
    <br>
    <div class="descr__grid">
        <div class="descr__textsGrid">

            <div class="descr__textBlock">
                <h2>О компании</h2>
                <p>Общество с ограниченной ответственностью«ТеплоТрансРемонт» является теплоснабжающей
                    организациейКраснодарского края. В каждом муниципальном образовании,где организация оказывает свои
                    услуги, образованы филиалы:
                <ul class="descr__list">
                    <li>
                        <p>
                            Новопокровский филиал, действующий на основанииКонцессионного соглашения в отношении
                            объектовтеплоснабжения и горячего водоснабжения муниципальногообразования Новопокровский район
                            Краснодарского края No118 от 21.09.2022
                        </p>
                    </li>
                    <li>
                        <p>
                            Апшеронский филиал, действующий на основанииКонцессионного соглашения в отношении
                            объектовтеплоснабжения и горячего водоснабжения Хадыженскогогородского поселения Апшеронского
                            района Краснодарскогокрая No 116 от 21.09.2022 и Концессионного соглашения вотношении объектов
                            теплоснабжения и горячеговодоснабжения муниципального образования Апшеронскийрайон No 125 от
                            21.09.2022
                        </p>
                    </li>
                    <li>
                        <p>
                            Новороссийский филиал, действующий на основаниидоговора аренды котельных и тепловых сетей
                        </p>
                    </li>
                </ul>
                </p>
            </div>

            <div class="descr__textBlock">
                <h2>Основные характеристики</h2>
                <p>В структуру ООО «ТТР» входят 74 котельных с установленной тепловой мощностью 57,4 Гкал/ч и тепловые сети
                    общей протяжённостью 37,95 км. в двухтрубном исчислении. Общий объем полезного отпуска тепловой энергии
                    составляет 52 884 Гкал/год.
                    Основными видами деятельности ООО «ТТР», являются:
                <ul class="descr__list">
                    <li>
                        <p>
                            Производство, транспортировка, реализация тепловой энергии в виде отопления, горячей воды и пара
                            по
                            установленным тарифам от собственных источников.
                        </p>
                    </li>
                    <li>
                        <p>
                            Деятельность по покупке, транспортировке, реализации тепловой энергии от сторонних
                            теплоснабжающих
                            организаций.
                        </p>
                    </li>

                    <li>
                        <p>
                            Обеспечение работоспособности и исправности теплоэнергетического оборудования в соответствии с
                            действующими
                            нормативными требованиями, проведение технического обслуживания, ремонта, наладки, технического
                            перевооружения и реконструкции теплоэнергетического оборудования, зданий и сооружений котельных.
                        </p>
                    </li>

                    <li>
                        <p>
                            Эксплуатация теплоэнергетических объектов, не находящихся на балансе Общества, по договорам с
                            собственниками
                            данных теплоэнергетических объектов.
                        </p>
                    </li>

                    <li>
                        <p>
                            Освоение новой техники и технологий, обеспечивающих эффективность, безопасность и экологичность
                            работы
                            промышленных объектов.
                        </p>
                    </li>

                    <li>
                        <p>
                            Организация энергосберегающих режимов работы оборудования, соблюдение режимов поставки тепловой
                            энергии
                            в
                            соответствии с договорами.
                        </p>
                    </li>

                    <li>
                        <p>
                            Выполнение работ по эксплуатации тепловых сетей.
                        </p>
                    </li>
                    <li>
                        <p>
                            Деятельность по предоставлению услуг по обслуживанию и ремонту энергетических объектов (тепловых
                            сетей,
                            оборудования и др.).
                        </p>
                    </li>
                </ul>






                </p>
            </div>

        </div>
        <!-- <img class="descr__image" src="@/assets/descr/1.jpg" alt=""> -->
    </div>

    <div class="descr__imgGrid">
        <!-- <div style="background: #0af;"></div>
        <div style="background: #fba;"></div>
        <div style="background: #0f0;"></div>
        <div style="background: #0ba;"></div> -->
        <img src="@/assets/descr/1.jpg" alt="">
        <img src="@/assets/descr/2.jpg" alt="">
        <img src="@/assets/descr/3.jpg" alt="">
        <img src="@/assets/descr/4.jpg" alt="">
    </div>



    <br>
    <br>
    <table class="descr__table">
        <tbody>
            <tr>
                <td>Филиалы<br>ООО «ТТР»</td>
                <td>Количество котельных, в томчисле нагазовомтопливе, шт.</td>
                <td>Суммарная установленная мощность, Гкал/час</td>
                <td>Протяженность тепловыхсетей, км</td>
                <td>Протяженность&nbsp;<br>тепловых сетей, км&nbsp; &nbsp;</td>
            </tr>
            <tr>
                <td>Новопокровский филиал</td>
                <td>33 (24)</td>
                <td>15,48</td>
                <td>11,10</td>
                <td>18,59</td>
            </tr>
            <tr>
                <td>Апшеронский филиал</td>
                <td>41 (31)</td>
                <td>41,94</td>
                <td>27,40</td>
                <td>34,36</td>
            </tr>
            <tr>
                <td>Новороссийский филиал</td>
                <td>3 (3)</td>
                <td>59,51</td>
                <td>9,06</td>
                <td>35,00</td>
            </tr>
            <tr>
                <td>Всего</td>
                <td>77 (58)</td>
                <td>116,93</td>
                <td>47,56</td>
                <td>87,95</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import HomeSlider from '@/components/HomeSlider.vue'
export default {
    components: {
        HomeSlider
    },
    data() {
        return {
            images: [
                require('@/assets/home/1.webp'),
                require('@/assets/home/2.jpg'),
                require('@/assets/home/3.jpg'),
            ],
        }
    }
}
</script>
<style lang="scss">
.descr {
    &__sliderWrap {
        width: var(--width);
        height: 600px;
        margin-bottom: 40px;
    }

    &__table {
        margin: auto;
        margin-bottom: 100px;
    }

    &__textsGrid {
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 20px;
    }

    &__textBlock {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px 40px;
        border-radius: 10px;
        background: var(--lightGray);
    }

    &__grid {
        display: grid;
        margin: 0 auto;
        width: 100%;
        // grid-template-columns: 1fr 1fr;
        grid-template-columns: 1fr;
        gap: 50px;
        align-items: center;

        &--second {
            grid-template-columns: 1fr 1fr;
            margin-top: 150px;
        }
    }

    &__imgGrid {
        display: grid;
        grid-template-columns: 2fr 3fr;
        grid-template-rows: 1fr 1fr 1fr;
        width: 100%;
        height: auto;
        gap: 20px;
        margin: 70px 0;

        &>img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 10px;

            &:first-child {
                grid-row-start: 1;
                grid-row-end: 4;
            }
        }
    }

    &__column {
        display: flex;
        flex-direction: column;
        align-items: center;

        &>img {
            margin-bottom: 40px;
            min-width: 450px;
            width: 500px;
        }
    }

    &__image {
        min-width: 500px;
        height: 600px;
        object-fit: cover;
        object-position: top;
        margin: auto;

    }

    &__list {
        &>li {
            margin-bottom: 20px;
            margin-left: 20px;
            list-style: disc;
        }
    }
}
</style>