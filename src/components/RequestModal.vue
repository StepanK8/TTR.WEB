<template>
    <div @click="$emit('close')" class="req" :class="{'req--hide':!isOpen}">
        <div ref="wrap" :style="`transform: scale(${transformWrap})`" @click.stop class="req__wrap" :class="{'req__wrap--hide':!isOpen}">
            <img  @click="$emit('close')" class="req__wrap_cross" src="@/assets/cross.svg" alt="">
            <h2 class="req__wrap_title">Оставить заявку</h2>
            <p class="req__wrap_text">Укажите своё имя и номер телефона. <br> Мы свяжемся с вами в ближайшее время.</p>

            <p class="req__wrap_label" >Имя*</p>
            <!-- <input v-model="name" type="text" placeholder="Имя"> -->

            <div class="req__wrap_inputWrap" :class="{'req__wrap_inputWrap--warning':nameWarning}">
                <input class="req__wrap_inputWrap-input" @focus="nameWarning = false" v-model="name" placeholder="Имя" type="text">
                <img class="req__wrap_inputWrap-img" src="@/assets/icon-error.svg" alt="">
                <p class="req__wrap_inputWrap-warningText" v-if="nameWarning">{{nameWarning}}</p>
            </div>

            <p class="req__wrap_label">Телефон*</p>
            <div class="req__wrap_inputWrap" :class="{'req__wrap_inputWrap--warning':phoneWarning}">
                <input  class="req__wrap_inputWrap-input" v-model="phoneNumber" @focus="focusPhoneNumber" @blur="blurPhoneNumber" placeholder="Телефон" v-mask="'+7(###)-###-##-##'" type="text">
                <img class="req__wrap_inputWrap-img" src="@/assets/icon-error.svg" alt="">
                <p class="req__wrap_inputWrap-warningText" v-if="phoneWarning">{{phoneWarning}}</p>
            </div>

            <p class="req__wrap_label">Комментарий</p>
            <textarea v-model="comment" type="text"></textarea>

            <p class="req__wrap_label">*поля обязательные для заполнения</p>
            <button @click="checkForm">Заказать звонок</button>
            <p class="req__wrap_label">Нажимая кнопку «Отправить», вы даёте согласие на обработку своих персональных данных и принимаете <a href=""> Политику конфиденциальности.</a></p>
        </div>
    </div>
    <ModalSended :isOpen="isOpenModalSended" :error="sendError" @close="isOpenModalSended = false"/>
</template>
<script>
import BaseInput from '@/components/ui/BaseInput.vue'
import ModalSended from '@/components/ModalSended.vue'
import {postForm} from '@/api/postForm.js'
export default {
    components:{
        BaseInput,
        ModalSended,
    },
    data(){
        return{
            transformWrap: 1,
            wrapHeight: 600,

            name: "",
            phoneNumber: "",
            comment: "",
            
            nameWarning: false,
            phoneWarning: false,


            isOpenModalSended: false,
            sendError: false,
        }
    },
    props:{
        isOpen: Boolean,
    },
    methods:{
        focusPhoneNumber(){
            this.phoneWarning = false
            if(this.phoneNumber.length == 0){
                this.phoneNumber = "+7("
            }
        },
        blurPhoneNumber(){
            console.log(this.phoneNumber);
            if(this.phoneNumber == "+7("){
                this.phoneNumber = "" 
            }
        },
        checkForm(){
            if(this.phoneNumber.length == 0){
                this.phoneWarning = 'Обязательное поле'
            }
            else if(this.phoneNumber.length != 17){
                this.phoneWarning = 'Некорректный номер телефона'
            }
            else{
                this.phoneWarning = false
            }

            if(this.name.length == 0){
                this.nameWarning = 'Обязательное поле'
            }
            else{
                this.nameWarning = false
            }
            if(this.nameWarning == false && this.phoneWarning == false){
                console.log('SendForm');
                postForm({
                    name: this.name,
                    number: this.phoneNumber,
                    comment: this.comment,
                })
                .then(res => {
                    this.$emit('close')
                    this.isOpenModalSended = true
                    this.sendError = false
                    this.name = ""
                    this.phoneNumber = ""
                    this.comment = ""
                    console.log('success');
                })
                .catch(() => {
                    this.$emit('close')
                    this.isOpenModalSended = true
                    this.sendError = true
                    console.log('error');
                })
            }
        },
        checkHeight(){
            console.log(this.$refs.wrap.getBoundingClientRect().height*1.1, window.innerHeight);
            if(this.wrapHeight*1.1 > window.innerHeight){
                this.transformWrap = window.innerHeight / (this.wrapHeight * 1.1) 
                console.log('transformWrap' , this.transformWrap);
            }
            // if(window.innerHeight > this.wrapHeight*1.1){
            //     this.transformWrap = 1
            // }
        },

    },
    watch:{
        isOpen(){
            this.checkHeight()
        },
    },
    mounted(){
        this.wrapHeight = this.$refs.wrap.getBoundingClientRect().height
        this.checkHeight()
        window.addEventListener('resize', this.checkHeight)
        // if(this.$refs.wrap.getBoundingClientRect().height > window.innerHeight*0.9 ){
        //     this.transformWrap = window.innerHeight*0.9 / this.$refs.wrap.getBoundingClientRect().height
        // }
    },
    computed:{
        clearPhone(){
            return this.phoneNumber.replace()
        }
    },
}
</script>
<style lang="scss">
    .req{
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 200;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #00000065;
        // transition: .2s;
        opacity: 1;
        pointer-events: all;
        // backdrop-filter: blur(5px);
        &--hide{
            opacity: 0;
            pointer-events: none;
        }
        &__wrap{
            width: 600px;
            border-radius: 4px;
            background: white;
            padding: 48px;
            position: relative;
            opacity: 1;
            transition-delay: .1s;
            &--hide{
                // opacity: 0;
                // pointer-events: none;
            }
            &_cross{
                position: absolute;
                top: 20px;
                right: 20px;
                cursor: pointer;
                padding: 10px;
            }
            &_title{
                @include baseText(var(--big));
                text-align: center;
                margin-bottom: 24px;
            }
            &_text{
                @include baseText;
                text-align: center;
                margin-bottom: 48px;
            }
            &_label{
                font-size: 16px;
                text-align: left !important;
                color: black;
                & > a{
                    color: var(--mainColor);
                    text-decoration: underline;
                }
            }
            
            &_inputWrap{
                margin-top: 8px;
                position: relative;
                margin-bottom: 36px;
                &--warning{
                    .req__wrap_inputWrap-input{
                        border: 2px solid var(--warning) !important;
                    }
                    .req__wrap_inputWrap-img{
                        opacity: 1;
                    }
                }
                &-input{
                    @include baseText;
                    height: 56px;
                    border: 1px solid #6B717B;
                    border-radius: 4px;
                    background: #F2F5F7;
                    width: 100%;
                    padding-left: 16px;
                    
                    font-size: var(--little);

                    &::placeholder{
                        font-size: var(--little);
                    }
                }
                &-warningText{
                    @include baseText(12px);
                    color: var(--warning);
                    position: absolute;
                    margin-top: 4px;
                    margin-left: 8px;
                }
                &-img{
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 100%;
                    transform: scale(0.4);
                    opacity: 0;
                }
            }
            & > textarea{
                @include baseText;
                height: 150px;
                border: 1px solid #6B717B;
                border-radius: 4px;
                background: #F2F5F7;
                width: 100%;
                margin-top: 8px;
                padding-left: 16px;
                margin-bottom: 20px;
                font-size: var(--little);
                padding: 16px 10px;
                resize: none;
                &::placeholder{
                    font-size: var(--little);
                }
            }
            & > button{
                @include blueButton;
                margin-top: 24px;
                margin-bottom: 24px;
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .req{
            // overflow: auto;
            &__wrap{
                width: 100vw;
                height: 100vh;
                width: auto;
                overflow: auto;
                padding: 8vw  5vw;
                &_cross{
                    margin: 2vw 1vw;
                    padding: 4vw 4vw;
                    top: 0;
                    right: 0;
                }
                & > textarea{
                    height: 25vw;
                }
            }
        }
    }
</style>