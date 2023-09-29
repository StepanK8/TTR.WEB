<template>
    <div class="subsid">
        <div class="subsid__card">
            <div class="subsid__card_left">

                <div class="subsid__row" v-for="config in data.configs">
                    <p class="subsid__title">{{ config[0] }}</p>
                    <p class="subsid__text"
                        v-html="config[1].replace('ООО «ТЕПЛОТРАНСРЕМОНТ»', '<br>ООО «ТЕПЛОТРАНСРЕМОНТ»')"></p>
                </div>
                <div class="subsid__phone">
                    <p>ТЕЛЕФОН ГОРЯЧЕЙ ЛИНИИ ПРИ АВАРИЯХ</p>
                    <p>{{ data.phone }}</p>
                </div>


            </div>
            <div class="subsid__card_right">
                <div v-html="data.map"></div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        data: Object,
    },
    created() {

    },
}
</script>
<style lang="scss">
.subsid {
    &__card {
        display: flex;
        width: 80%;
        align-items: center;
        height: 750px;
        margin: 80px auto 40px;
        box-shadow: var(--shadow);
        border-radius: 15px;

        &_left {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 35px;
        }

        &_right {
            height: 100%;

            &>div {
                height: 100%;
            }
        }
    }

    &__title {
        @include baseText(18px);
        color: rgb(0, 0, 0);
        text-align: center;
        font-weight: 400;
        font-size: 26px;
        margin-bottom: 10px;
    }

    &__text {
        @include baseText(18px);
        color: rgb(77, 77, 77);
        text-align: center;
        font-weight: 400;
    }

    &__row {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;


        &:first-child {
            font-size: 20px;
            font-weight: 400;

            &>p {

                &:nth-child(1) {
                    color: var(--gray);
                    display: none;

                }

                &:nth-child(2) {
                    font-size: 28px;
                    font-weight: 700;
                    color: var(--black);
                    // color: var(--mainColor);
                    padding-bottom: 14px;
                    border-bottom: 2px solid #d6d6d6;
                }
            }
        }
    }

    &__phone {
        // border: 3px solid red;
        width: 500px;
        height: 100px;
        margin: 20px auto 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--lightGray);
        // box-shadow: var(--shadow);
        border-radius: 14px;

        &>p {
            font-weight: 700;
            font-size: 20px;

            &:nth-child(1) {}

            &:nth-child(2) {
                color: var(--red);
                font-size: 28px;
            }
        }
    }

    iframe {
        width: 600px;
        height: 100%;
    }
}

@media screen and (max-width: $mediaQuery1) {
    .subsid {
        &__card {
            width: 100%;
            margin-left: 0;
            margin-right: 0;

            &_left {
                padding-left: 0;
                padding-left: 20px;
            }

            &_right {
                width: 550px;
            }
        }
    }
}

@media screen and (max-width: $mediaQuery1-1) {
    .subsid {
        &__card {
            &_left {
                width: 500px;
            }
        }

        &__phone {
            width: 100%;
        }

        iframe {
            width: 500px;
        }
    }
}
</style>