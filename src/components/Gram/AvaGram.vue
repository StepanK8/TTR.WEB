<template>
    <section class="gram " :class="{'gram--animation': animation}">
        <div class="gram__wrap">
            <div class="gram__wrap_left">
                <div class="gram__wrap_left-banners">
                    <a href="">IOS</a>
                    <a href="">Android</a>
                </div>
                <h2 class="gram__wrap_left-title">AVAgram</h2>
                <p class="gram__wrap_left-text" v-html="text"></p>
                
                <div class="gram__wrap_left-buttons">
                    <!-- <div class="gram__wrap_left-buttons-button">
                        Купить продукт
                    </div> -->
                    <div @click="$emit('openRequest')" class="gram__wrap_left-buttons-button">
                        Оставить заявку
                    </div>
                </div>
            </div>
            <div class="gram__wrap_right">
                <img src="@/assets/1_2.webp" @load="loadImage">
                <img src="@/assets/2_2.webp"  @load="loadImage">
                <img src="@/assets/3.png"  @load="loadImage">
            </div>


        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            animation: false,
            text: "",
            loadedImages: 0,
        }
    },
    
    mounted(){
        
    },
    methods:{
        start(){
            this.$emit('')
            console.log("start aniamtion");
            setTimeout(() => {
                this.animation = true
            }, 400)
            const textSrc = "Приложение внутренних коммуникаций для любой компании.".split('')
            textSrc.splice(22, 0, '<br>')
            textSrc.splice(36, 0, '<br>')
            let counter = 0
            setTimeout(() => {
                const interval = setInterval(() => {
                    this.text += textSrc[counter]
                    counter++
                    if(counter === textSrc.length-1){
                        clearInterval(interval)
                    }
                }, 28)
            }, 700)
        },
        loadImage(){
            this.loadedImages++
            console.log(this.loadedImages);
            if(this.loadedImages == 3){
                this.start()
            }
        },
    }
}
</script>
<style lang="scss">
    $time: .5s ease-out;
    .gram{
        background: var(--lightBlue);
        justify-content: center;
        display: flex;
        &__wrap{
            width: var(--width);
            height: calc(100vh - 80px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            &_left{
                display: flex;
                justify-content: flex-start;
                flex-direction: column;
                width: 475px;
                opacity: 0;
                transform: translateY(50px);
                transition: $time;
                &-banners{
                    display: flex;
                    & > a{
                        @include baseText(14px);
                        margin-right: 24px;
                        padding: 8px 12px;
                        color: var(--mainColor);
                        background-color: var(--accentBlue);
                        border-radius: 50px;
                    }
                }
                &-title{
                    @include baseText(84px);
                    color: var(--mainColor);
                    font-weight: 900;
                    font-family: "Montserrat-bd";
                }
                &-text{
                    @include baseText(var(--middle));
                    line-height: 1.7em;
                    height: 110px;
                }
                &-buttons{
                    display: flex;
                    justify-content: space-between;
                    gap: 24px;
                    margin-top: 34px;
                    opacity: 0;
                    transition: .7s ease;
                    transform: translateY(30px);
                    &-button{
                        @include blueButton;
                        &--white{
                            @include whiteButton;                        
                        }
                    }
                }
            }
            &_right{
                margin-top: auto;
                margin-bottom: auto;
                height: 820px;
                width: 100%;
                position: relative;
                padding-top: 20px;
                margin-right: -34px;
                opacity: 0;
                transition: $time;
                & > img{
                    object-fit: contain;
                    object-position: center;
                    width: 400px;
                    height: 800px;
                    position: absolute;
                    right: 0;
                    z-index: 10;
                    transition: 1.2s;
                    transition-timing-function: cubic-bezier(.19,.73,.13,1);
                    transition-timing-function: cubic-bezier(.37,-0.04,.26,1);
                    // transition-timing-function: cubic-bezier(.51,.06,.57,1.2);
                    // transition-timing-function: ease-in-out;
                    &:nth-child(2){
                        width: 367px;
                        right: 260px;
                        z-index: 9;
                        transform: translateX(240px);
                    }
                    &:nth-child(3){
                        width: 330px;
                        right: 500px;
                        z-index: 8;
                        transform: translateX(480px);
                        
                    }
                }
            }
        }
    }
    .gram--animation{
        .gram__wrap_left{
            transform: none;
            opacity: 1;
        }
        .gram__wrap_right{
            opacity: 1;
            & > img{
                &:nth-child(2){
                    transition-delay: .4s;
                    transform: none;
                }
                &:nth-child(3){
                    transition-duration: 1.15s;
                    transition-delay: .45s;
                    transform: none;
                }
            }
        }
        .gram__wrap_left-buttons{
            opacity: 1;
            transform: none;
            transition-delay: 2.1s;
        }
    }
    @media screen and (max-width: $mediaQuery1) {
        .gram__wrap_right{
            & > img{
                width: 350px;
                &:nth-child(2){
                    width: 310px;
                    right: 225px;
                    transform: translateX(220px);
                }
                &:nth-child(3){
                    width: 270px;
                    right: 440px;
                    transform: translateX(400px);
                
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .gram{
            &__wrap{
                flex-direction: column;
                height: auto;
                &_left{
                    width: 90vw;
                    margin-top: 16vw;
                    &-banners{
                        justify-content: center;
                    }
                    &-title{
                        text-align: center;
                        font-size: 17vw;
                    }
                    &-text{
                        margin-top: 5vw;
                        text-align: center;
                    }
                    &-buttons{
                        flex-direction: column;
                        gap: 4vw;
                    }
                }
                &_right{
                    width: 100vw;
                    margin: 0;
                    padding: 0;
                    height: 135vw;
                    padding-top: 2vw;
                    & > img{
                        height: 135vw;
                        width: 62vw;
                        &:nth-child(2){
                            width: 52vw;
                            right: 66vw;
                            margin-right: -21vw;
                            transform: none !important;
                        }
                        &:nth-child(3){
                            display: none;
                        }
                    }
                }
            }
        }
    }
</style>