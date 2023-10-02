import { createRouter, createWebHistory } from "vue-router";

const concessionsData = {
  'Апшеронский район': `
  Заключено КОНЦЕССИОННОЕ СОГЛАШЕНИЕ № 125 от 21.09.2022г. в отношении объектов теплоснабжения и горячего водоснабжения муниципального образования Апшеронский район
  <br> <br>
  Заключено КОНЦЕССИОННОЕ СОГЛАШЕНИЕ № 116 от 21.09.2022г. в отношении объектов теплоснабжения и горячего водоснабжения Хадыженского городского поселения Апшеронского района Краснодарского края
  `,
  'Новопокровский район': `
  Заключено КОНЦЕССИОННОЕ СОГЛАШЕНИЕ № 118 от 21.09.2022г. в отношении объектов теплоснабжения и горячего водоснабжения муниципального образования Новопокровский район  
  `,
}

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Главная",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about/DescriptionView.vue"),
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
  {
    path: "/филиалы",
    name: "subsidiaries",
    meta: {
      title: "Филиалы",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SubsidiariesView.vue"),
  },
  {
    path: "/нормативная-база",
    name: "base",
    meta: {
      title: "Нормативная База",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BaseView.vue"),
  },
  {
    path: "/раскрытие-информации",
    name: "info",
    meta: {
      title: "Раскрытие информации",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InfoView.vue"),
  },
  {
    path: "/закупки",
    name: "purchase",
    meta: {
      title: "Закупки",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PurchaseView.vue"),
    children: [
      {
        path: "план-закупок",
        name: "plan",
        meta: {
          title: "План закупок",
          folderName: 'plan',
          files: [
            'План закупки Инновационной продукции ООО ТТР 2022-2028.xls',
            'План закупки ТРУ - ООО ТТР - ред.1 от 08.12.2022.xls',
            'План закупки ТРУ - ООО ТТР - ред.2 от 28.04.2023.xls',
            'План закупки ТРУ - ООО ТТР - ред.3 от 05.05.2023.xls',
            'План закупки ТРУ - ООО ТТР - ред.4 от 10.05.2023.xls',
          ],
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FilesTemplate.vue"),
      },
      {
        path: "положение-о-закупках",
        name: "condition",
        meta: {
          title: "Положение о закупках",
          folderName: 'condition',
          files: [
            'Положение о закупках ТТР в редакции от 20.04.2023.pdf',
          ],
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FilesTemplate.vue"),
      },

    ],
  },
  {
    path: "/концессии",
    name: "concessions",
    meta: {
      title: "Концессии",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ConcessionsView.vue"),
    children: [
      {
        path: "апшеронский-филиал",
        meta: {
          title: "Апшеронский Филиал",
          html: concessionsData['Апшеронский район'],
        },
        name: "apsh",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/TextTemplate.vue"),
      },
      {
        path: "новопокровский-филиал",
        meta: {
          title: "Новопокровский Филиал",
          html: concessionsData['Новопокровский район'],
        },
        name: "novo",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/TextTemplate.vue"),
      },
    ],
  },
  {
    path: "/статус-ето",
    name: "eto",
    meta: {
      title: "Статус ЕТО",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EtoView.vue"),
  },
  {
    path: "/потребителям",
    name: "counsumers",
    meta: {
      title: "Потребителям",
    },
    children: [
      {
        path: "договор",
        meta: {
          title: "Договор",
          folderName: 'agreement',
          files: [
            'Государственный контракт теплоснабжения.rtf',
            'Договор на теплоснабжение на нежилые помещения в МКД.rtf',
            'Договор на теплоснабжение с УК, ТСЖ.rtf',
            'ПУБЛИЧНАЯ ОФЕРТА o заключении договора теплоснабжения.doc',
            'Типовой договор (теплоснабжение).doc',
          ],
        },
        name: "agreement",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FilesTemplate.vue"),
      },
      {
        path: "нормативы",
        meta: {
          title: "Нормативы",
        },
        name: "standards",
        children: [
          {
            path: "горячее-водоснабжение",
            meta: {
              title: "Горячее Водоснабжение",
            },
            name: "hotWaterApp",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/consumers/HotWaterApp.vue"),
          },
          {
            path: "отопление",
            meta: {
              title: "Отопление",
            },
            name: "heating",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/consumers/HeatingApp.vue"),
          },
        ],
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/consumers/StandardsView.vue"),
      },
      {
        path: "образцы-заявлений",
        meta: {
          title: "Образцы заявлений",
          folderName: 'examples',
          files: [
            'ОБРАЗЕЦ заявления для заключение договора на поставку тепловой энергии в квартиру при НЕПОСРЕДСТВЕННОЙ ФОРМЕ УПРАВЛЕНИЯ ДОМОМ.docx',
            'ОБРАЗЕЦ заявления для заключения 3-х договора на поставку тепловой энергии.docx',
            'ОБРАЗЕЦ заявления для заключения договора на поставку тепловой энергии  (категория Застройщик на пуско-наладку).docx',
            'ОБРАЗЕЦ заявления для заключения договора на поставку тепловой энергии с бюждетным учреждением.docx',
            'ОБРАЗЕЦ заявления для заключения договора на поставку тепловой энергии с ТСЖ,УК,ЖСК.docx',
            'ОБРАЗЕЦ заявления для заключения договора на постаку тепловой энергии с физ.лицом, ИП, юр. лицом - нежилое.docx',
            'ОБРАЗЕЦ заявления для исключения объекта из договора.docx',
            'ОБРАЗЕЦ заявления для расторжения договора.docx',
            'ОБРАЗЕЦ заявления на выдачу копии договора на поставку тепловой энергии.rtf',
            'ОБРАЗЕЦ заявления на заключение договора теплоснабжения _неж.пом.МКД.doc',
            'ОБРАЗЕЦ заявления на переуступку оплаты.docx',
          ],
        },
        name: "examples",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FilesTemplate.vue"),
      },
      {
        path: "перечень-документов",
        meta: {
          title: "Перечень документов",
          folderName: 'list_docs',
          files: [
            'Перечень документов для заключения договора теплоснабжения для УК,ТСЖ,ЖСК.rtf',
            'Перечень документов для заключения договора теплоснабжения физ.лица.docx',
            'Перечень документов для заключения договора теплоснабжения.docx',
          ],
        },
        name: "listDocs",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FilesTemplate.vue"),
      },

    ],
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ConsumersView.vue"),
  },
  {
    path: "/порядок-выполнения-технологического-подключения",
    name: "orderExecution",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OrderExecution.vue"),
    meta: {
      title: "Порядок выполнения технологического подключения",
    },
    children: [

      {
        path: "форма-заявки-на-заключение-договора",
        meta: {
          title: "Форма заявки на заключение договора",
          folderName: 'form',
          files: [
            'Заявка на подключение.docx',
          ],
        },
        name: "form",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FilesTemplate.vue"),
      },
      {
        path: "перечень-документов-и-сведений-к-заявке",
        meta: {
          title: "Перечень документов и сведений к заявке",
          folderName: 'list_doc_to_order',
          files: [
            'Перечень документов и сведений на подключение к системам теплоснабжения (ГВС).doc',
          ],
        },
        name: "list_doc_to_order",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FilesTemplate.vue"),
      },
      {
        path: "реквизиты-нормативных-правовых-актов",
        meta: {
          title: "Реквизиты нормативных правовых актов",
          folderName: 'details_of_acts',
          files: [
            'Информация-о-наличии-резерва-мощности-по-подключению-к-ГВС.docx',
            'Информация-о-наличии-резерва-мощности-по-подключению-к-отоплению.docx',
          ],
        },
        name: "details_of_acts",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/order_execution/DetailsActs.vue"),
      },
      {
        path: "телефоны-адреса-график-работы",
        meta: {
          title: "Телефоны адреса график работы",
        },
        name: "phones",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/order_execution/PhonesApp.vue"),
      },
      {
        path: "договор-технического-присоединения",
        meta: {
          title: "Договор технического присоединения",
          folderName: 'agreement_connection',
          files: [
            'Договор на подключение к системе теплоснабжения.docx',
          ],
        },
        name: "agreementConnection",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FilesTemplate.vue"),
      },
      {
        path: "информация-о-доступности-мощности",
        meta: {
          title: "Информация о доступности мощности",
          folderName: 'available',
          files: [
            'Информация-о-наличии-резерва-мощности-по-подключению-к-ГВС.docx',
            'Информация-о-наличии-резерва-мощности-по-подключению-к-отоплению.docx',
          ],
        },
        name: "available",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/FilesTemplate.vue"),
      },

    ],
  },

  {
    path: "/платные-услуги",
    name: "paidServices",
    meta: {
      title: "Платные услуги",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PaidServices.vue"),
    children: [
      {
        path: "апшеронский-филиал",
        meta: {
          title: "Апшеронский филиал",
          folderName: 'paidServices/apsh',
          files: [
            'Прайс на услуги.docx',
          ],
        },
        name: "paidNovo",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/DevLayout.vue"),
      },
      {
        path: "новопокровский-филиал",
        meta: {
          title: "Новопокровский филиал",
          folderName: 'paidServices/novo',
          files: [
            'Прайс на услуги.docx',
          ],
        },
        name: "paidApsh",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/DevLayout.vue"),
      },
      {
        path: "новороссийский-филиал",
        meta: {
          title: "Новороссийский филиал",
          folderName: 'paidServices/novoros',
          files: [
            'Прайс на услуги.docx',
          ],
        },
        name: "paidNovoros",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/DevLayout.vue"),
      },
    ]
  },
  {
    path: "/новости",
    name: "news",
    meta: {
      title: "Новости",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewsView.vue"),
  },
  {
    path: "/тарифы",
    name: "tariffs",
    meta: {
      title: "Тарифы",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TariffsView.vue"),
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
