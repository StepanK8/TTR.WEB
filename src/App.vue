<template>
  <div class="main">
    <SidebarApp />

    <div class="main__wrap">
      <div class="main__content">

        <HeaderApp @openRequest="openRequest" @scrollTo="scroll" @toggleMobileWrap="toggleMobileWrap"
          :isOpenMobileMenu="isOpenMobileMenu" :triggerToShowHeader="triggerToShowHeader" />
        <!-- <HomeSlider :images="images"/> -->
        <div>
          <router-view>
          </router-view>
        </div>

      </div>
      <FooterApp />
    </div>
  </div>
  <!-- <HomeView @openRequest="openRequest" /> -->
  <RequestModal :isOpen="isOpenModal" @close="isOpenModal = false" />
</template>
<script>
import HeaderApp from '@/components/HeaderApp.vue'
import SidebarApp from './components/SidebarApp.vue'
import FooterApp from '@/components/FooterApp.vue'
import HomeView from '@/views/HomeView.vue'
import RequestModal from '@/components/RequestModal.vue'
export default {
  components: {
    HeaderApp,
    SidebarApp,
    HomeView,
    FooterApp,
    RequestModal,
  },
  data() {
    return {
      complexes: null,
      key: 0,
      triggerRequestModal: 0,
      blackStyle: null,
      theme: { color: "#BC07AE", grad: "linear-gradient(60.68deg, rgba(232, 1, 130, 0.758999) -28.22%, rgba(146, 0, 238, 0.961637) 28.1%, #7917E0 67.59%, rgba(132, 2, 127, 0.74) 126.05%)" },
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
      routerKey: 0,
    }
  },
  provide() {
    return {
      // theme: {color: this.color, grad: this.grad},
      color: this.color,
      grad: this.gradient,
      theme: this.theme
      // color: false,
      // grad: false,
    }
  },
  created() {
    console.log(this.$router)
    window.addEventListener('load', () => {
      console.log('document loaded');
      this.isLoaded = true
    })

    // this.$router.push({name: 'description'})
    const illustrations = require.context(
      '@/assets/home',
      true,
      /^(.*\.(?:jpg|png|jpeg))$/
    )
    console.log(illustrations.keys())


    // this.findRouteWithPath(decodeURI(window.location.pathname), this.$router.options.routes)

  },
  mounted() {
    let counter = 0 // подсчет всех страниц
    this.$router.options?.routes.forEach(r => {
      counter += 1
      if (r.children) {
        r.children.forEach(c => counter += 1)
      }
    })
    // addEventListener("popstate", (e) => {
    //   this.findRouteWithPath(decodeURI(window.location.pathname))
    // }, false);


    // this.findRouteWithPath(decodeURI(window.location.pathname), this.$router.options.routes)
  },
  methods: {
    openRequest() {
      console.log('openRequest');
      this.isOpenModal = true
    },
    scrollTop() {
      this.triggerToShowHeader++
    },
    scroll(idx) {
      // this.
      console.log(idx);
      this.isOpenMobileMenu = false
      this.triggerToShowHeader++
      setTimeout(() => {
        let el;
        switch (idx) {
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
    toggleMobileWrap() {
      console.log('toggleMobileWrap');
      this.isOpenMobileMenu = !this.isOpenMobileMenu
    },
    findRouteWithPath(path, routesToSearch = this.$router.options.routes, parentPath = '') {
      console.log('findRouteWithPath');
      for (const route of routesToSearch) {
        if (route.children) {
          const r = this.findRouteWithPath(path, route.children, parentPath + route.path)
          if (r) return this.$router.push({ name: r.name })
        }
        let newParentPath = parentPath ? parentPath + '/' : ''
        console.log(newParentPath + route.path, path);
        if (newParentPath + route.path === path) {
          console.log('push', route.name);
          this.$router.push({ name: route.name })
        }
      }
    }

  },
  watch: {
    // '$route.path'(v) {
    //   console.log('$route.meta.titles', decodeURI(window.location.pathname));
    //   this.findRouteWithPath(decodeURI(window.location.pathname), this.$router.options.routes)
    //   this.isOpenMobileMenu = false
    // }
  },
};
</script>

<style lang="scss">
@import '@/style/template.scss';
@import '@/style/reset.scss';
@import '@/style/requisites.scss';

h2 {
  @include baseText(28px);
  margin-bottom: 10px;
  // color: var(--mainColor);
  color: var(--black);
  font-weight: 400;
}

p {
  @include baseText(18px);
  color: rgb(0, 0, 0);
  color: #191B1F;
  line-height: 1.4em;
  text-align: justify;
}

table {
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

.separator {
  height: 40px;
}

.mute {
  opacity: 0.5;
}

a {
  color: var(--mainColor);
  text-decoration: underline;

  &:hover {
    color: var(--red)
  }
}

.main {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 300px 1fr;
  margin: 0 auto;
  overflow-x: hidden;

  &__content {
    margin: 0 auto;
    width: var(--width);
    flex-grow: 1;
    padding-bottom: 40px;


  }

  &__wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
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

@media screen and (max-width: $mediaQuery2) {
  .main {
    display: flex;
    flex-direction: column;

    &__content {
      width: 90vw;
    }

    &>.side__navigation--empty {
      display: none;
    }
  }

  p {
    @include baseText(16px);
    color: rgb(0, 0, 0);
    line-height: 1.4em;
    text-align: justify;
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
