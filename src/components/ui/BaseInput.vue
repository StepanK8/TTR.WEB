<template>
  <div class="input-wrapper" :class="{'input-wrapper--warning':warning, 'input-wrapper--noLabel': label == false}">
    <input
      @focus="$emit('v-focus')" 
      @blur="$emit('v-blur')"
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      required
      v-if="type == 'phone'"
      v-mask="'+7 (###) ###-##-##'"
    />
    <input
      @focus="$emit('v-focus')" 
      @blur="$emit('v-blur')"
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      required
      v-else
    />
    <label v-if="label" class="label">{{ label }}</label>
    <img class="input-warning" src="@/assets/error.png" alt="">
  </div>
  <p class="input-warning-text" :class="{'input-warning-text--show':warning}">{{warning}}</p>
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      modelValue: String,
      label: {
        type: String,
        default: '',
      },
      borderRadius: {
        type: String,
        default: '4px',
      },
      warning:{
        type: [Boolean, String],
        default: false,
      },
      type: {
        type: [String],
        default: "",
      }
    },
    data() {
      return {
        valueToShow: "",
      }
    },
    created(){
      this.valueToShow = this.modelValue
    },
    methods:{
    },
  }
</script>
<style lang="scss" scoped>
  $background: transparent;
  .input {
    user-select: text;
    font-family: 'Halvar';
    padding: 12px 4px 4px 20px;
    font-size: inherit;
    width: 100%;
    height: 100%;
    border-radius: v-bind(borderRadius);
    border: 1px solid #6B717B;
    color: inherit;
    // user-select: none !important;
    user-select: text !important;
    position: relative;
    background: $background;
    font-size: 18px;
    // margin-bottom: 10px;
    &-warning{
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: auto;
      transform: scale(0.4);
      display: none;
      &-text{
        color: #f24e06;
        font-size: 14px;
        font-weight: 400;
        font-family: 'Halvar';
        margin: 2px 0px;
        opacity: 0;
        pointer-events: none;
        margin-bottom: 4px;
        margin-left: 5px;
        width: 100%;
        text-align: left;
        &--show{
          opacity: 1;
          pointer-events: all;
        }
        
      }
    }
  }
  .input-wrapper {
    position: relative;
    height: 53px;
    width: 100%;
    border-radius: v-bind(borderRadius);
    font-size: inherit;
    background: $background;
    color: #2c3e50;
    
    &--warning{
      .input{
        border: 2px solid #f24e06;
        &-warning{
          display: block;
        }
      }
    }
    &--noLabel{
      .input{
        padding-top: 4px;
      }
    }
    .input:focus,
    .input:valid {
      & + .label {
        top: 3px;
        left: -1px;
        height: 35%;
        background: transparent;
        font-size: 0.7em;
        padding: 4px 8px 4px 2px;
      }
    }
    .label {
      cursor: text;
      pointer-events: none;
      font-size: inherit;
      font-family: inherit;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 20px;
      transition: font-size, 0.2s;
      background: transparent;
      user-select: text !important;
      color: #cfcfcf;
      font-family: 'Halvar';
      font-size: 18px;
    }
  }
  @media screen and (max-width: $mediaQuery2) {
    $mobileTextSize: 4vw;
    .input{
      font-size: $mobileTextSize;
    }
  }
</style>
