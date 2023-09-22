<template>
    <div class="footer">
        <div class="footer__wrap">
                <div class="footer__wrap_logoRow">
                    <img src="@/assets/logo.png" alt="">
                    <p>AVAgram</p>
                </div>
                <div class="footer__wrap_navRow">
                    <p>Приложение внутренниих коммуникаций <br> для любой компании.</p>
                    <div class="footer__wrap_navRow-nav">
                        <p v-for="(link, idx) in links" :key="idx" @click="$emit('scrollTo', idx)">{{link.name}}</p>
                    </div>
                </div>
                <div class="footer__wrap_offerRow">
                    <div class="footer__wrap_offerRow-buttons">
                        <!-- <button>Купить продукт</button> -->
                        <button @click="$emit('openRequest')">Оставить заявку</button>
                    </div>
                    <div class="footer__wrap_navRow-nav footer__wrap_navRow-nav--mobile">
                        <p v-for="(link, idx) in links" :key="idx" @click="$emit('scrollTo', idx)">{{link.name}}</p>
                    </div>
                    <div class="footer__wrap_offerRow-info">
                        <a href="tel:+79184167161"> +7 918 416 71 61</a>
                        <a href="mailto:admin@axas.ru"> admin@axas.ru</a>
                        <a href="https://avacore.ru"> avacore.ru</a>
                    </div>
                </div>
                <div class="footer__wrap_bottomRow">
                    <p>© 2023 AVAgram</p>
                    <div @click="scrollUp">
                        <img src="@/assets/arrow.svg" alt="">
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            links: [
                {name: 'Главная', link: ''},
                {name: 'О продукте', link: ''},
                {name: 'Функционал', link: ''},
                {name: 'Контакты', link: ''},
            ]
        }
    },
    methods:{
        scrollUp(){
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
    .footer{
        display: flex;
        justify-content: center;
        background: #fff;
        &__wrap{
            width: 1200px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 70px 0;
            &_logoRow{  
                display: flex;
                justify-content: flex-start;
                width: 100%;
                & > img{
                    width: 40px;
                    height: 40px;
                    margin-right: 24px;
                }
                & > p{
                    @include baseText(32px);
                }
            }
            &_navRow{
                margin-top: 36px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                
                & > p{
                    @include baseText(var(--little));
                }
                &-nav{
                    display: flex;
                    justify-content: flex-end;
                    &--mobile{
                        display: none
                    }
                    & > p{
                        cursor: pointer;
                        @include baseText(14px);
                        text-transform: uppercase;
                        color: rgba(25, 29, 31, 0.7);
                        margin-left: 46px;
                        transition: .1s;
                        &:hover{
                            color: rgba(25, 29, 31, 1);
                        }
                    }
                }
            }
            &_offerRow{
                display: flex;
                justify-content: space-between;
                width: 100%;
                margin-top: 36px;
                &-buttons{
                    display: flex;
                    flex-direction: column;
                    width: 224px;
                    & > button{
                        @include blueButton;
                        margin-bottom: 15px;
                        &:nth-child(2){
                            @include whiteButton;
                        }
                    }
                }
                &-info{
                    & > a{
                        text-align: right;
                        display: block;
                        @include baseText;
                        font-weight: 700;
                        margin-bottom: 16px;

                    }
                }
            }
            &_bottomRow{
                display: flex;
                justify-content: space-between;
                width: 100%;
                align-items: flex-end;
                margin-top: 50px;
                & > p{
                    @include baseText(12px);
                    color: #191D1FB5;
                }
                & > div{
                    width: 52px;
                    height: 52px;
                    border-radius: 40px;
                    background: var(--accentBlue);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: .2s;
                    cursor: pointer;
                    &:hover{
                        filter: brightness(90%)
                    }
                    & > img{
                        height: 23px;
                        object-fit: contain;
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .footer{
            &__wrap{
                width: 90vw;
                &_navRow{
                    & > p{
                        width: 79vw;
                        & > br{
                            display: none;
                        }
                    }
                    &-nav{
                        display: none;
                        &--mobile{
                            display: flex !important;
                            flex-direction: column;
                            & > p{
                                margin-left: 0;
                                margin-top: 12vw;
                                font-weight: 700;
                                // font-size: ;
                            }
                        }
                    }
                }
                &_offerRow{
                    flex-direction: column;
                    &-buttons{
                        width: 100%;
                        & > button{
                            height: 14vw;
                            font-size: 20px;
                            &:nth-child(2){
                                height: 14vw;
                                font-size: 20px;
                            }
                        }
                    }
                    &-info{
                        margin-top: 10vw;
                        & > a{
                            text-align: left;
                        }
                    }
                }
                &_bottomRow{
                    justify-content: center;
                    & > div{
                        position: absolute;
                        right: 5vw;
                        transform: translateY(-25vw);
                    }
                }
            }
        }
    }
</style>