<template lang="">
      <div class="side__navigation--empty">
        <div class="side__navigation">
          <div v-for="route in routes">
            <div class="side__linkWrap" >
              <router-link :to="route.path" active-class="active" :class="{'side__tariff': route.meta.title == 'Тарифы'}" class="side__link">{{ route.meta.title }}</router-link>
              <img v-if="route.children" @click="route.isOpen = !route.isOpen" class="side__linkWrap_image" :class="{'side__linkWrap_image--open': route.isOpen}" src="@/assets/arrow_right.svg" alt="">
            </div>
            <div v-if="route.isOpen">
              <div class="side__linkWrap" v-for="(subRoute, idx) in route.children" :key="idx">
                <router-link :to="route.path+'/'+subRoute.path" active-class="active" class="side__link side__link--sub">{{ subRoute.meta.title }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  data() {
    return {
      routes: [],
    }
  },
  mounted() {
    this.routes = this.$router.options?.routes
    this.routes = this.routes.map(route => {
      if (route.children) {
        route.isOpen = false
      }
      return route
    })
  },
}
</script>
<style lang="scss">
.side {
  &__navigation {
    width: 300px;
    height: 100vh;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .4);
    position: fixed;
    overflow-y: auto;
    padding-bottom: 60px;
    margin-top: 0;

    &--empty {
      width: 100%;
    }
  }

  &__tariff {
    background: var(--mainColor);
    padding: 10px 80px;
    color: white !important;
    border-radius: 4px;
    font-size: 18px !important;
    text-transform: uppercase;
    margin-top: 10px;

    &:hover {
      transition: .1s;
      background: var(--lightBlue);
    }
  }

  &__linkWrap {
    min-height: 45px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: center;
    text-align: left;

    &_image {
      width: 8px;
      padding: 4px;
      box-sizing: content-box;
      margin-left: 10px;
      transform: rotate(90deg);
      cursor: pointer;

      &--open {
        transform: rotate(-90deg);
      }

      &:hover {
        filter: brightness(0%)
      }
    }
  }

  &__link {
    @include baseText(16px);
    text-align: left;
    line-height: 1.25em;
    text-decoration: none;

    // padding: 10px 0;
    // border-bottom: 1px solid rgb(202, 202, 202);
    &--sub {
      margin-left: 20px;
    }

    &:hover {
      color: var(--mainColor);
    }
  }
}

.active {
  color: var(--red);
  text-decoration: underline !important;
}

@media screen and (max-width: $mediaQuery2) {
  .side {
    &__navigation {
      width: 100%;
      height: 100%;
      background: white;
      box-shadow: none;
      position: static;
      padding-bottom: 0;
      padding-top: 0;

      // left: 0;
      // top: 0;
      &--empty {
        width: 100%;
        height: 100%;
        // width: 100vw;
        // height: 100vh;
        // position: fixed;
        // left: -100%;
        // top: 0;
      }

      &--open {}
    }
  }
}
</style>