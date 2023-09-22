<template>
  <section class="func" :class="{'func--animation':animation,'func__wrap_main--animation':animation2}">
    <div class="func__line"></div>
    <div class="func__wrap">
      <h2 ref="target">Функционал</h2>
      <p>
        Одно предназначение и все функции для построения<br />
        дружественных отношений
      </p>
      <ul class="func__wrap_cards">
        <li
          v-for="(card, idx) in cards"
          :key="idx"
          class="func__wrap_cards-card"
        >
        <img :src="card.back" class="func__wrap_cards-card-back" alt="">
          <div class="func__wrap_cards-card-imgWrap">
            <img :src="card.img" alt="">
          </div>
          <h2>{{card.name}}</h2>
          <p v-html="card.text">
          </p>
        </li>
      </ul>
      <div class="func__wrap_main" ref="target2" >

        <div class="func__wrap_main-left">

            <div class="func__wrap_main-left-take">
                <h2>Мы не</h2>
                <p>стремимся заменить соцсети, битрикс, платформы обучения или КЭДО</p>
            </div>

            <div class="func__wrap_main-left-take">
                <h2>МЫ ДЕЛАЕМ</h2>
                <p>приложение с простым и понятным созданием мероприятий и возможностью внутреннего обучения. Внедрение займёт у вас минуты, результат будет надолго.</p>
            </div>
        </div>

        <div class="func__wrap_main-right" ref="phone">
            <img src="@/assets/func_back.png" alt="" >
            <div>
              <img src="@/assets/func_list_2.png" :style="`transform: translateY(${shift*0.45}px)`" alt="">
            </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script>
export default {
    data(){
        return{
            cards: [
                {
                    name: 'Клубы',
                    text: 'Коллеги будут находить себе друзей по интересам. Обучение <br> и задачи будут даваться легче. От друзей сложнее уйти, чем <br> с работы.',
                    img: require('@/assets/func/1.svg'),
                    back: require('@/assets/func/1b.svg'),
                },
                {
                    name: 'Развитие',
                    text: 'Удобная база знаний поможет сотруднику быстро адаптироваться, не зацикливаться на мелочах и эффективно влиться в работу.',
                    img: require('@/assets/func/2.svg'),
                    back: require('@/assets/func/2b.svg'),
                },
                {
                    name: 'Социальная сеть',
                    text: 'Поможет понять структуру, цели <br> и ценности компании. Встроенный мессенджер позволит настроить быстрые коммуникации. ',
                    img: require('@/assets/func/3.svg'),
                    back: require('@/assets/func/3b.svg'),
                },
                {
                    name: 'Онбординг и NPS',
                    text: 'Понятный игровой онбординг, который интересно проходить. Наши специалисты помогут в создании плана для вашей команды.',
                    img: require('@/assets/func/4.svg'),
                    back: require('@/assets/func/4b.svg'),
                },
            ],
            animation: false,
            animation2: false,
            shift: 0,
        }
    },
    mounted(){
      const callback = () => {
        // console.log(this.$refs.target.getBoundingClientRect().top);
        if(this.$refs.target.getBoundingClientRect().top < window.innerHeight*0.9){
          console.log("!!!!!!!"); 
          this.animation = true
          window.removeEventListener('scroll', callback)  
        }
      }
      window.addEventListener('scroll', callback)

      let koef = 0.78
      if(window.innerWidth<800){
        koef = 0.3
      }
      const callback2 = () => {
        console.log('func', this.$refs.target2.getBoundingClientRect().top);
        if(this.$refs.target2.getBoundingClientRect().top < window.innerHeight*koef){
          console.log("!!!!!!!"); 
          this.animation2 = true
          // window.removeEventListener('scroll', callback2)  
        }
      }
      window.addEventListener('scroll', callback2)

      window.addEventListener('scroll', () => {
        let distance = this.$refs.phone.getBoundingClientRect().bottom - window.innerHeight
        this.shift = distance
        console.log(this.shift);
      })
    },
}
</script>
<style lang="scss">
 $time: .7s;
.func{
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &__line{
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 154px;
    height: 365px;
    width: 48vw;
    background-color: var(--accentBlue);
    width: 0;
    opacity: 0;
    transition: .8s;
  }
  &__wrap {
    width: var(--width);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 80px;
    & > h2 {
      @include baseText(var(--big));
      transition: $time;
      opacity: 0;
      transform: translateY(100px);
    }
    & > p {
      margin-top: 15px;
      @include baseText;
      text-align: center;
      line-height: 1.5em;
      transition: $time;
      opacity: 0;
      transform: translateY(100px);
    }
    &_cards {
      width: 100%;
      margin-top: 78px;
      display: flex;
      justify-content: space-between;
      &-card {
        background: var(--lightGray);
        width: 350px;
        height: 335px;
        padding: 28px;
        position: relative;
        transition: $time;
        transform: translateY(100px);
        opacity: 0;
        & > :not(img){
            position: relative;
            z-index: 2;
        }
        &-back{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            left: 0;
            top: 0;
            z-index: 0;
        }
        &-imgWrap {
          width: 54px;
          height: 54px;
          background-color: var(--accentBlue);
          border-radius: 4px;
          display: flex; 
          justify-content: center;
          align-items: center;
          
        }
        & > h2 {
          @include baseText(24px);
          margin-top: 32px;
          margin-bottom: 18px;
        }
        & > p {
          @include baseText(var(--little));
          line-height: 1.8em;
        }
      }
    }
    &_main{
        width: 1200px;
        margin-top: 170px;
        display: flex;
        justify-content: space-between;
        &-left{
            width: 470px;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            padding-bottom: 154px;
            transform: translateY(100px);
            opacity: 0;
            transition: transform $time, opacity .3s;
            &-take{
                & > h2{
                    @include baseText;
                    text-transform: uppercase;
                    margin-top: 80px;
                    margin-bottom: 10px;
                }
                & > p{
                    margin-top: 0px;
                    @include baseText;
                }
            }
        }
        &-right{
            position: relative;
            z-index: 2;
            transform: translateX(100px);
            opacity: 0;
            transition: $time;
            & > img{
              z-index: 10;
                position: relative;
                height: 820px;
            }
            & > div{
              position: absolute;
              background: rgba(0, 128, 0, 0.432);
              width: 327px;
              height: 642.2px;
              top: 22px;
              left: 45px;
              z-index: 9;
              overflow: hidden;
              & > img{
                width: 100%;
                margin-top: -200px;
              }
            }
        }
    }
  }
}
.func--animation{
  .func__wrap{
    & > h2{
      transform: none;
      opacity: 1;
    }
    & > p{
      transform: none;
      opacity: 1;
      transition-delay: 0.1s;
    }
  }
  .func__wrap_cards-card{
    opacity: 1;
    transform: none;
    transition-delay: .2s;
    &:nth-child(2){
      transition-delay: .3s;
    }
    &:nth-child(3){
      transition-delay: .4s;
    }
    &:nth-child(4){
      transition-delay: .5s;
    }
  }
}
.func__wrap_main--animation{
  .func__wrap_main-left{
    transform: none;
    opacity: 1;
  }
  .func__wrap_main-right{
      transform: none;
      opacity: 1;
      transition-delay: .2s;
  }
  .func__line{
    width: 50vw;
    opacity: 1;
    transition-delay: .35s;
  }
}
@media screen and (min-width: 2200px) {
  .func__line{
    right: calc((50vw - var(--width)/2) - 12px);
    width: calc(var(--width)/2);
  }
  .func__wrap_main--animation{
    .func__line{
      right: calc((50vw - var(--width)/2) - 12px);
      width: calc(var(--width)/2);
    }
  }
  
}
@media screen and (max-width: $mediaQuery1) {
  .func{
    .func__wrap_cards-card{
      width: 300px;
      padding: 20px;
      height: 340px;
      & > p{
        line-height: 1.7em;
        font-size: 15px;
      }
    }
  }
}
@media screen and (max-width: $mediaQuery2) {
  .func{
    &__line{
      width: 100vw !important;
      height: 60vw;
      bottom: 23vw;
      left: 0;
    }
    &__wrap{
      width: 90vw;
      & > p{
        width: 80vw;
        font-size: var(--little);
        opacity: 1;
        transform: none;
        & > br{
          display: none;
        }
      }
      & > h2{
        opacity: 0;
        transform: none;
      }
      &_cards{
        flex-direction: column;
        opacity: 1;
        transform: none;
        align-items: center;
        width: 100%;
        gap: 5vw;
        margin-top: 6vw;
        &-card{
          opacity: 1;
          transform: none;
          width: 100% !important;
          & > p{
            font-size: var(--middle) !important;
          }
        }
      }
      &_main{
        width: 90vw;
        flex-direction: column;
        margin-top: 10vw;
        &-left{
          width: 100%;
          opacity: 1;
          transform: none;
          padding-bottom: 10vw;
          &-take{
            & > h2{
              text-align: center;
              margin-top: 2vw;
              margin-bottom: 3vw;
              font-size: 20px;
            }
            & > p{
              text-align: center;
              margin-bottom: 16vw;
            }
            &:nth-child(2){
              & > p{
                width: 80vw;
                margin-left: auto;
                margin-right: auto;
              }
            }
          }
        }
        &-right{
          display: flex;
          justify-content: center;
          & > img{
            width: 70vw;
            height: auto;
            opacity: 1;
            transform: none;
            object-fit: contain;
          }
          & > div{
            width: 55vw;
            left: 16vw;
            height: 105vw;
            & > img{
            }
          }
        }
      }
    }
  }
  .func__wrap_main--animation{
    .func__wrap_main-left{
      transform: none;
      opacity: 1;
    }
    .func__wrap_main-right{
        transform: none;
        opacity: 1;
        transition-delay: .2s;
    }
    .func__line{
      opacity: 1;
      transition-delay: .35s;
      left: 0;
    }
  }
}
</style>