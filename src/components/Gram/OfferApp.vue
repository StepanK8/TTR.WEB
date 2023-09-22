<template>
  <section ref="target" class="offer" :class="{'offer--animation': animation}">
    <div class="offer__wrap">

        <div class="offer__wrap_left">
            <h2>Хотите так же?</h2>
            <p class="offer__wrap_left-text">Закажите обратный звонок и мы <br> обязательно с Вами свяжемся</p>
            <BaseInput :label="'Имя'" :warning="nameWarning" v-model="name"/>
            <BaseInput :type="'phone'" :warning="phoneWarning" v-model="phone" :label="'Телефон'" />
            <!-- <input type="text" placeholder="Имя">
            <input type="text" placeholder="Телефон" v-mask="'+7(###)-###-##-##'"> -->
            <button @click="checkForm">Заказать звонок</button>
        </div>

        <div class="offer__wrap_right">
          <img src="@/assets/offer.png" alt="">
        </div>
    </div>
  </section>
  <ModalSended :isOpen="isOpenModalSended" :error="sendError" @close="isOpenModalSended = false"/>
</template>
<script>
import BaseInput from '@/components/ui/BaseInput.vue'
import ModalSended from '@/components/ModalSended.vue'
import {postForm} from '@/api/postForm.js'
export default {
  components: {
    BaseInput,
    ModalSended,
  },
    data(){
        return{
          animation: false,
          phone: "",
          name: "",
          phoneWarning: false,
          nameWarning: false,

          nameWarning: false,
          phoneWarning: false,


          isOpenModalSended: false,
          sendError: false,
        }
    },
    mounted(){
      const callback = () => {
        console.log(this.$refs.target.getBoundingClientRect().top);
        if(this.$refs.target.getBoundingClientRect().top < window.innerHeight*0.5){
          console.log("!!!!!!!"); 
        this.animation = true
          window.removeEventListener('scroll', callback)  
        }
      }
      window.addEventListener('scroll', callback)
    },
    methods: {
      checkForm(){
        if(this.phone == ""){
          this.phoneWarning = 'Обязательное поле'
        }
        else if(this.phone.length != 18){
          this.phoneWarning = 'Некорректный номер телефона'
        }
        else{
          this.phoneWarning = false
        }

        if(this.name == ""){
          this.nameWarning = 'Обязательное поле'
        }
        else{
          this.nameWarning = false
        }
        console.log(this.nameWarning, this.phoneWarning);
        if(!this.phoneWarning && !this.nameWarning){
          this.sendForm()
        }
      },
      sendForm(){
        postForm({
            name: this.name,
            number: this.phone,
            Comment: '-',
        })
        .then(() => {
            this.$emit('close')
            this.isOpenModalSended = true
            this.sendError = false
            console.log('success');
            this.name = ""
            this.phone = ""
        })
        .catch(() => {
            this.$emit('close')
            this.isOpenModalSended = true
            this.sendError = true
            console.log('error');
        })
      },
}
}
</script>
<style lang="scss">
.offer{
  display: flex;
  justify-content: center;
  background: #F2F5F7;
  &__wrap {
    width: 1200px;
    display: flex;
    align-items: center;
    padding-top: 80px;
    display: flex;
    justify-content: space-between;
    &_left{
        display: flex;
        flex-direction: column;
        &-text{
          margin-bottom: 32px;
        }
        & > h2{
            @include baseText(64px);
            color: var(--mainColor);
            line-height: 1.2em
        }
        & > p{
           @include baseText; 
          //  margin-bottom: 32px;
        }
        & > input{
            height: 54px;
            border: 1px solid #6B717B;
            background: transparent;
            margin-bottom: 16px;
            font-size: var(--little);
            padding-left: 16px;
            border-radius: 4px;
            &::placeholder{
              color: var(--DeepGray);
            }
            &:focus-visible{
              &::placeholder{
                opacity: 0;
              }
            }
        }
        & > button{
            @include blueButton;
            margin-top: 8px;
        }
    }
    &_right{
      overflow: hidden;
      & > img{
        height: 450px;
        transform: translateY(470px);
        transition: 1s ease;
      }
    }
  }
}
.offer--animation{
  .offer__wrap_right{
    & > img{
      transform: none;
    }
  }
}
@media screen and (max-width: $mediaQuery2) {
  .offer{
    &__wrap{
      width: 90vw;
      flex-direction: column;
      &_left{
        & > h2{
          font-size: 36px;
          text-align: center;
        }
        & > p{
          text-align: center;
          font-size: 20px;
          width: 90vw;
          margin-top: 3vw;
          & > br{
            display: none;
          }
        }
      }
      &_right{
        & > img{
          object-fit: contain;
          object-position: bottom;
        }
      }
    }
  }
}
</style>