<template>
  <section class="solution" :class="{'solution--animation': animation}" ref="parent">
    <span class="solution__line"></span>
    <div class="solution__wrap">
      <h2 class="solution__wrap_title">Проблема</h2>
      <div ref="takes" class="solution__wrap_problems">
        <div class="solution__wrap_problems-problem" :style="`transform: translateY(${shift}px)`" ref="take1">
          <h2>{{percent1}}%</h2>
          <p>
            Увольнений приходится на то, что человек <br/>
            не смог найти себя в коллективе.
          </p>
        </div>
        <div class="solution__wrap_problems-problem" :style="`transform: translateY(${shift2}px)`" ref="take2">
          <h2>{{percent2}}%</h2>
          <p>
            От фонда оплаты труда компании тратят на <br />
            онбординг и адаптацию.
          </p>
        </div>
      </div>
      <div class="solution__wrap_main" ref="target">
        <div class="solution__wrap_main-left">
          <img class="solution__wrap_main-left-img" src="@/assets/solution_2.png" alt="" />
          <img class="solution__wrap_main-left-banner" src="@/assets/fly_banner.png" alt="">
        </div>
        <div class="solution__wrap_main-right">
          <h2>Решение</h2>
          <p>
            Приложение, специализированное под решение задач внутренних коммуникаций и онбординга. То, что вовлекает, знакомит и не является рутиной или бюрократией.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      animation: false,
      shift: 100,
      shift2: 240,
      percent1: 0,
      percent2: 0,
    }
  },
  mounted(){
    const callback = () => {
      console.log(this.$refs.target.getBoundingClientRect().top);
      if(this.$refs.target.getBoundingClientRect().bottom < window.innerHeight*1.4){
        // console.log("!!!!!!!"); 
        this.animation = true
        window.removeEventListener('scroll', callback)  
      }
    }
    window.addEventListener('scroll', callback)

    const callback2 = () => {
      console.log(this.$refs.takes.getBoundingClientRect().top);
      if(this.$refs.takes.getBoundingClientRect().top < window.innerHeight*0.8){
        let frames = 15
        let percent1final = 21
        let percent2final = 12
        let timeInterval = 20
        let i = 0
        const increment = () => {
          this.percent1 = Math.round(percent1final/frames*i)
          this.percent2 = Math.round(percent2final/frames*i)
          console.log(i);
          i++
          timeInterval *= 1.12
          if(i > frames){
            return
            clearInterval(interval)
          }
          setTimeout(() => {
            increment()
          }, timeInterval)
        } 
        // const interval = setInterval(increment, timeInterval)
        increment()

        window.removeEventListener('scroll', callback2)
      }
    }
    window.addEventListener('scroll', callback2)

    window.addEventListener('scroll', () => {
      // console.log('take', this.$refs.takes.getBoundingClientRect().bottom - window.innerHeight)
     let distance = this.$refs.takes.getBoundingClientRect().bottom - window.innerHeight
     if(distance < 0 && distance > -700 ){
        this.shift = distance*0.14 + 100
        this.shift2 = distance*0.345 + 240
     }
     else if(distance < -700){
        this.shift = -700*0.14 + 100
        this.shift2 = -700*0.345 + 240
     }
    })
    // let options = {
    //   // root: null,
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const trueCallback = () => {
    //   console.log('!!');
    // }
    // const observer = new IntersectionObserver( trueCallback, options );
    // setTimeout(() => {
    //   observer.observe(this.$refs.target);
    // }, 1000)
    
    
  },

}
</script>
<style lang="scss">
$time: .8s;
.solution {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  &__line{
    position: absolute;
    z-index: 1;
    height: 360px;
    width: 48vw;
    left: 0;
    bottom: 138px;
    background: var(--accentBlue);
    opacity: 0;
    transition: $time;
    transition-delay: .1s;
    width: 0;
  }
  &__wrap {
    // width: var(--width);
    width: 1200px;
    padding-top: 76px;
    position: relative;
    z-index: 3;
    &_title {
      @include baseText();
    }
    &_problems {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      &-problem {
        & > h2 {
          @include baseText(64px);
          color: var(--mainColor);
        }
        & > p {
          @include baseText;
        }
      }
    }
    &_main {
      display: flex;
      justify-content: space-between;
      margin-top: 166px;
      &-left{
        transform:  translateX(-60px);
        opacity: 0;
        transition: .7s;
        position: relative;
        &-img {
          height: 820px;
          margin-left: 70px;
        }
        &-banner{
          position: absolute;
          left: 128px;
          top: 335px;
          width: 297px;
          transition: .7s ease;
        }
      }
      &-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        transform: translateY(140px);
        opacity: 0;
        transition: $time;
        & > h2 {
        }
        & > p {
            @include baseText;
            width: 460px;
            margin-top: 20px;
            line-height: 1.6em;
        }
      }
    }
  }
  
}
.solution--animation{
  .solution__wrap_main-right{
    opacity: 1;
    transform: none;
  }
  .solution__wrap_main-left{
    opacity: 1;
    transform: none;
    &-banner{
      transform: translateX(100px);
      box-shadow: -32px 23px 30px -7px rgba(0, 0, 0, 0.15);
      transition-delay: .4s;
    }
  }
  .solution__line{
    opacity: 1;
    transform: none;
    width: 48vw;
    transition-delay: .5s;
  }
}
@media screen and (min-width: 2200px) {
  .solution--animation{
    .solution__line{
      left: calc((50vw - var(--width)/2) - 12px);
      width: calc(var(--width)/2);
    }
  }
}
@media screen and (max-width: $mediaQuery2) {
  .solution{
    &__line{
      width: 100vw;
      height: 60vw;
      bottom: 23vw
    }
    &__wrap{
      width: 90vw;
      padding-top: 12vw;
      &_title{
        text-align: center;
        margin-bottom: 2vw;
      }
      &_problems{
        flex-direction: column;
        &-problem{
          display: flex;
          align-items: center;
          flex-direction: column;
          transform: none !important;
          margin-bottom: 20vw;
          & > h2{
            text-align: center;
            font-weight: 900;
            font-family: "Montserrat-bd";
          }
          & > p{
            text-align: center;
            width: 70vw;
          }
        }
      }
      &_main{
        flex-direction: column-reverse;
        margin-top: 5vw;
        &-left{
          opacity: 1;
          transform: none;
          margin-top: 18vw;
          display: flex;
          justify-content: center;
          &-img{
            margin-left: 0;
            width: 70vw;
            object-position: center;
            object-fit: contain;
            height: auto;
            display: block;
            justify-content: center;
             align-items: center;
            transition: $time;
            transition-delay: 1s;
            
          }
          &-banner{
            left: 18vw;
            top: 54vw;
            width: 50vw;
          }
        }
        &-right{
          opacity: 1;
          transform: none;
          & > h2{
            text-align: center;
          }
          & > p{
            width: 90vw;
            text-align: center;
            font-size: var(--little);
          }
        }
      }
    }
  }
  .solution--animation{
    .solution__wrap_main-right{
      opacity: 1;
      transform: none;
    }
    .solution__wrap_main-left{
      opacity: 1;
      transform: none;
      &-banner{
        transform: translateX(10vw);
        box-shadow: -32px 23px 30px -7px rgba(0, 0, 0, 0.15);
        transition-delay: .9s;
      }
    }
    .solution__line{
      opacity: 1;
      transform: none;
      width: 100vw;
      
    }
}
}
</style>