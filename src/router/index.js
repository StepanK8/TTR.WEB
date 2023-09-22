import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Главная",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/о-компании",
    meta: {
      title: "О компании",
    },
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    children: [
      {
        path: "описание-деятельности",
        meta: {
          title: "Описание деятельности",
        },
        name: "description",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/about/DescriptionView.vue"),
      },
      {
        path: "реквизиты",
        meta: {
          title: "Реквизиты",
        },
        name: "requisites",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/about/RequisitesView.vue"),
      },
      {
        path: "устав-и-нормативные-документы",
        meta: {
          title: "Устав и нормативные документы",
          folderName: 'charter',
          files: [
            'Устав ООО ТТР.pdf',
            'Свидетельство ИНН_ОГРН_ ООО ТТР.pdf',
          ],
        },
        name: "charter",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FilesTemplate.vue"),
      },
      {
        path: "структура-ооо-ттр",
        meta: {
          title: 'Структура ООО "ТТР"',
        },
        name: "structure",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/about/StructureApp.vue"),
      },
      {
        path: "вакансии",
        meta: {
          title: 'Вакансии',
        },
        name: "vacancies",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/about/VacanciesApp.vue"),
      },

    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})



// const lastRoute = {
//   value: null
// }
// router.beforeEach((from, to, next) => {
//   const path = decodeURI(window.location.pathname)
//   console.log(path, window.location.pathname);

//   if (!lastRoute.value && lastRoute.value !== window.location.pathname) {
//     // const r = findRouteWithPath(decodeURI(window.location.pathname))
//     next(decodeURI(window.location.pathname))
//   }
// })
export default router;
export { routes };
