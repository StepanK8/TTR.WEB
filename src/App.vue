<template>
  <div class="main">
    <div class="main__navigation--empty">
      <div class="main__navigation">
        <div v-for="route in $router.options?.routes">
          <div class="main__linkWrap" >
            <router-link  :to="route.path" class="main__link">{{ route.meta.title }}</router-link>
          </div>
          <div class="main__linkWrap" v-for="subRoute in route.children">
            <router-link :to="route.path+'/'+subRoute.path" class="main__link main__link--sub">{{ subRoute.meta.title }}</router-link>
          </div>

        </div>
        
        
      </div>
    </div>

    <div class="main__content">
      <HeaderApp 
        @openRequest="openRequest" 
        @scrollTo="scroll"
        @toggleMobileWrap="toggleMobileWrap" 
        :isOpenMobileMenu="isOpenMobileMenu" 
        :triggerToShowHeader="triggerToShowHeader"
      />
      <!-- <HomeSlider :images="images"/> -->
        <div >
          <router-view>
          </router-view>
        </div>

    </div>
  </div>
  <!-- <HomeView @openRequest="openRequest" /> -->
  <!-- <FooterApp @openRequest="openRequest" @scrollTo="scroll" @scrollTop="scrollTop" /> -->
  <RequestModal :isOpen="isOpenModal" @close="isOpenModal = false"/>
</template>
<script>
import HeaderApp from '@/components/HeaderApp.vue'
import FooterApp from '@/components/FooterApp.vue'
import HomeView from '@/views/HomeView.vue'
import RequestModal from '@/components/RequestModal.vue'
export default {
  components: {
    HeaderApp,
    HomeView,
    FooterApp,
    RequestModal,
  },
  data(){
    return{
      complexes: null,
      key: 0,
      triggerRequestModal: 0,
      blackStyle: null,
      theme: {color:"#BC07AE", grad: "linear-gradient(60.68deg, rgba(232, 1, 130, 0.758999) -28.22%, rgba(146, 0, 238, 0.961637) 28.1%, #7917E0 67.59%, rgba(132, 2, 127, 0.74) 126.05%)"},
      isOpenAuth: false,
      isLoaded: false,
      keyAuth: 0,
      isOpenModal: false,
      triggerToShowHeader: 0,
      isOpenMobileMenu: false,
      images: [
        require('@/assets/home/1.webp'),
        require('@/assets/home/2.jpg'),
        require('@/assets/home/3.jpg'),
      ],
    }
  },
  provide(){
    return{
      // theme: {color: this.color, grad: this.grad},
      color: this.color,
      grad: this.gradient,
      theme: this.theme
      // color: false,
      // grad: false,
    }
  },
  created(){
    console.log(this.$router)
    window.addEventListener('load', ()=>{
      console.log('document loaded');
      this.isLoaded = true
    }) 
    const illustrations = require.context(
      '@/assets/home',
      true,
      /^(.*\.(?:jpg|png|jpeg))$/
    )
    console.log(illustrations.keys())

    const findRouteWithPath = (path, routesToSearch = this.$router.options.routes, parentPath = '') => {
      for (const route of routesToSearch) {
        if (route.children) {
          const r = findRouteWithPath(path, route.children, parentPath + route.path)
          if (r) return this.$router.push({name: r.name})
        }
        console.log(parentPath +'/'+ route.path, path);
        if (parentPath +'/'+ route.path === path) {
          console.log('===');
          this.$router.push({name: route.name})
        }
      }
    }
    findRouteWithPath(decodeURI(window.location.pathname), this.$router.options.routes)
  },
   methods:{
    openRequest(){
      console.log('openRequest');
      this.isOpenModal = true
    },
    scrollTop(){
      this.triggerToShowHeader++
    },
    scroll(idx){
      // this.
      console.log(idx);
      this.isOpenMobileMenu = false
      this.triggerToShowHeader++
      setTimeout(() => {
          let el;
          switch (idx){
              case 0:
                  el = document.getElementsByClassName('gram__wrap')[0]
                  break
              case 1:
                  el = document.getElementsByClassName('solution__wrap')[0]
                  break
              case 2:
                  el = document.getElementsByClassName('func__wrap')[0]
                  break
              case 3:
                  el = document.getElementsByClassName('offer__wrap')[0]
                  break
          }
          console.log('el', el);
          window.scroll({
              top: el.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: 'smooth',
          })

      }, 50)
    },
    toggleMobileWrap(){
      console.log('toggleMobileWrap');
      this.isOpenMobileMenu = !this.isOpenMobileMenu
    },
   },
   watch:{
   },
};
</script>

<style lang="scss">
@import '@/style/template.scss';
@import '@/style/reset.scss';
h2{
    @include baseText(28px);
    margin-bottom: 10px;
    color: var(--mainColor);
    font-weight: 400;
  }
  p{
    @include baseText(18px);
    color: rgb(0, 0, 0);
    line-height: 1.4em;
    text-align: justify;
  }
  table{
    border-collapse: collapse;
    margin: 25px 0;
    border-style: solid;
    border: 1px solid #000000;
    td {
      border: 1px solid #000000;
      border-collapse: collapse;
      padding: 10px;
    }
  }
  .separator{
    height: 40px;
  }

.main{
  display: grid;
  width: 100%;
  grid-template-columns: 300px 1fr;
  margin: 0 auto;
  &__navigation{
    width: 300px;
    height: 100vh;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.4);
    position: fixed;
    &--empty{
      width: 100%;
    }
  }
  
  
  &__content{
    margin: 0 auto;
    width: var(--width);
    a{
      color: var(--mainColor);
      text-decoration: underline;
      &:hover{
        color: var(--red)
      }
    }
  }
  &__linkWrap{
    min-height: 45px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  &__link{
    @include baseText(16px);
    text-align: left;
    // padding: 10px 0;
    // border-bottom: 1px solid rgb(202, 202, 202);
    &--sub{
      margin-left: 20px;
    }
    &:hover{
      color: var(--mainColor);
    }
  }
}

/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
// @font-face {
//   font-family: "Montserrat";
//   src: url("@/fonts/Montserrat.ttf") format("truetype");
//   font-style: normal;
//   font-weight: normal;
// }

@font-face {
  font-family: "Montserrat-bd";
  src: url("@/fonts/Montserrat-bd.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("@/fonts/Montserrat-md.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "CeraPro";
  src: url("@/fonts/CeraPro.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "CeraProRegular";
  src: url("@/fonts/CeraPro-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "ArialNova";
  src: url("@/fonts/ArialNova.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "ArialBold";
  src: url("@/fonts/ArialNova-Bold.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Halvar";
  src: url("@/fonts/Halvar.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Halvar-bd";
  src: url("@/fonts/Halvar_bold.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Halvar-th";
  src: url("@/fonts/Halvar_thin.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: "Roman-md";
  src: url("@/fonts/Roman-md.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: "Neue-md";
  src: url("@/fonts/Neue.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

</style>
