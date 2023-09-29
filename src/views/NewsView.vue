<template>
    <div class="news">
        <h2>Новости</h2>
        <div class="news__card">
            <h3>
                Постановление администрации
            </h3>
            <p>Постановление администрации муниципального образования Новопокровского района от 4 октября 2022 г. N 516 О начале отопительного периода 2022 - 2023 годов на территории муниципального образования Новопокровского района</p>
            <DownloadApp :folderName="folderName" name="МО Новопокровский р-н Постановление 516 от 04.10.2022г о начале отопительного сезона.pdf"/>
            <img src="@/assets/news/1.png" alt="">
        </div>

        <div class="news__card">
            <h3>
                Постановление администрации
            </h3>
            <p>Постановление администрации муниципального образования Апшеронского района от 10 октября 2022 г. N 914 О начале отопительного периода 2022 - 2023 годов на территории муниципального образования Апшеронского района</p>
            <DownloadApp :folderName="folderName" name="МО Апшеронский р-н Постановление 914 от 10.10.2022 о начале отопительного сезона.docx"/>
        </div>
        <div class="news__card">
            <h3>
                Постановление администрации
            </h3>
            <p>Постановление администрации муниципального образования Апшеронского района от 13 апреля 2023 г. N 338 О завершении отопительного периода 2022 - 2023 года на территории муниципального образования Апшеронского района </p>
            <DownloadApp :folderName="folderName" name="МО Апшеронский р-н Постановление 338 от 13.04.2023 об окончании отопительного сезона.jpg"/>
        </div>

        <div class="news__card">
            <h3>
                Официальное опубликование
            </h3>
            <p>Официальное опубликование нормативных правовых актов на сайте Администрации и городской Думы Краснодара, ссылка: </p>
            <a href="https://krd.ru/dokumenty/dokumenty-administratsii/ofitsialnoe-opublikovanie-normativnykh-pravovykh-aktov">https://krd.ru/dokumenty/dokumenty-administratsii/ofitsialnoe-opublikovanie-normativnykh-pravovykh-aktov</a>
            
        </div>

        <div class="news__card">
            <h3>
                Официальное опубликование
            </h3>
            <p>Официальное опубликование нормативных правовых актов на сайте Администрации муниципального образования Новопокровского района</p>
            <a href="https://krd.ru/dokumenty/dokumenty-administratsii/ofitsialnoe-opublikovanie-normativnykh-pravovykh-aktov">https://krd.ru/dokumenty/dokumenty-administratsii/ofitsialnoe-opublikovanie-normativnykh-pravovykh-aktov</a>
        </div>

        <div class="news__card">
            <h3>
                Официальное опубликование
            </h3>
            <p>Официальное опубликование нормативных правовых актов на сайте Администрации муниципального образования Апшеронского района</p>
            <a href="https://apsheronsk-oms.ru/documents/index.html ">https://apsheronsk-oms.ru/documents/index.html</a>
        </div>
    </div>
</template>
<script>
import DownloadApp from '@/components/DownloadApp.vue';
export default {
    data(){
        return{
            folderName: 'news,'
        }
    },
    components: {
        DownloadApp,
    }
}
</script>
<style lang="scss">
    .news{
        display: flex;
        flex-direction: column;
        align-items: center;
        &__card{
            @include card;
            & > a{
                text-align: left;
                align-items: flex-start;
            }
        }
    }
</style>