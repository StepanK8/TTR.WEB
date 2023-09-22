<template>
    <div class="homeSlider">
        <swiper
            :slides-per-view="1"
            :space-between="20"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :loop="true"
            class="homeSlider__swiper"
        >
        <swiper-slide v-for="(image, idx) in images" :key="idx">
            <div class="homeSlider__wrap">
                <img class="homeSlider__wrap_img" :src="image" alt="">
                <div class="homeSlider__wrap_navigWrap">
                    <div @click="prevSlide" class="homeSlider__wrap_navigWrap-button">
                        <img class="homeSlider__wrap_navigWrap-button-img" style="transform: rotate(-90deg)" src="@/assets/arrow.svg" alt="">
                    </div>
                    <div @click="nextSlide" class="homeSlider__wrap_navigWrap-button">
                        <img class="homeSlider__wrap_navigWrap-button-img" style="transform: rotate(90deg);" src="@/assets/arrow.svg" alt="">
                    </div>
                </div>
            </div>
        </swiper-slide>
        </swiper>

    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fade } from 'swiper';

export default {
    components:{
        Swiper,
        SwiperSlide,
    }, 
    props: {
        images: Array,
    },
    data(){
        return{
            slides: [
                1,2,3
            ],
            swiper: null,
            forceLoad: false,
            
        }
    },
    mounted(){
        // this.$refs.coverImg.forEach((img, idx) => {
        //     img.addEventListener('load', ()=>{
        //         if(!this.forceLoad){
        //             this.forceLoad = true
        //             this.$emit('forceLoad')
        //         }
        //         console.log('load');
        //         this.$refs.loader[idx].style.display = 'none'
        //     }, {once: true})
        // })
    },
    methods:{
        onSwiper(swiper){
            this.swiper = swiper 
        },  
        onSlideChange(){
            ////console.log(this.swiper?.activeIndex)
        },   
        nextSlide(){
            this.swiper.slideNext()
        },
        prevSlide(){
            this.swiper.slidePrev()
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/style/template.scss';
@import '@/style/swiperCustom.scss';
.homeSlider{
    background-color: var(--lightBlue);
    padding: 20px 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-top: 0px;
    &__swiper{
        width: var(--maxW);
    }
    &__wrap{
        height: 100%;
        
        border-radius: 7px;
        width: var(--maxW);
        margin: 0 auto;
        position: relative;
        &_loader{
        }
        &_img{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            // filter: brightness(70%);
            // border-radius: 7px;
        }
        &_mainWrap{
            position: absolute;
            top: 0;
            left: 0;
            padding-left: 48px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            &-title{
                font-family: "Halvar";
                font-size: 70px;
                color: white;
            }
            &-text{
                font-family: "Halvar";
                font-size: 25px;
                color: white;
                width: 310px;
                text-align: left;
            }
            &-button{
                @include blueButton;
                margin-top: 25px;
                cursor: pointer;
            }
        }
        &_navigWrap{
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
            &-button{
                width: 60px;
                height: 60px;
                background: #ffffffa8;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 10px;
                border-radius: 100px;
                backdrop-filter: blur(0.4px);
                margin: 20px;
                cursor: pointer;
                transition: 0.2s;
                &:last-child{
                }
                &:hover{
                    background: #ffffff;
                }
                &-img{
                    width:  13px;
                }
            }
        }
    }
}
</style>