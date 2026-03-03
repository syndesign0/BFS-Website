import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import PortafolioLayout from "@/pages/portafolio/PortafolioLayout.vue";
import ListaPortafolio from "@/pages/portafolio/ListaPortafolio.vue";
import DetalleProyecto from "@/pages/portafolio/DetalleProyecto.vue";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: "/portafolio",
      component: PortafolioLayout,
      children: [
        { path: "", redirect: "/portafolio/3d"},

        {
          path: "3d",
          name: "portafolio-3d",
          component: ListaPortafolio,
          props: { categoria: "tresde"},
        },
        {
          path: "ropa",
          name: "portafolio-ropa",
          component: ListaPortafolio,
          props: { categoria: "ropa" },
        },

        {
          path: "3d/:slug",
          name: "detalle-3d",
          component: DetalleProyecto,
          props: true,
        },
        {
          path: "ropa/:slug",
          name: "detalle-ropa",
          component: DetalleProyecto,
          props: true,
        },
      ]
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})