<script lang="ts" setup>
import BarraNav from '@/components/BarraNav.vue';
import { Button } from "@/components/ui/button";
import SeccionContacto from "@/components/SeccionContacto.vue";
import { proyectos } from '@/data/proyectos';
import TarjetaProyecto from "@/components/TarjetaProyecto.vue";

const destacados = proyectos.slice(0,4)
</script>

<template>

  <BarraNav />
  <RouterView />

  <main class="mx-auto max-w-6xl px-4 py-8 space-y-16">

    <section class="grid lg:grid-cols-2 gap-8 items-center">
      <div class="space-y-4">
        <h1 class="text-4xl font-semibold leading-tight">
          Portafolio Personal
        </h1>
        <p class="text-muted-foreground">
          Trabajos de 3d y diseño de ropa / branding.
        </p>
          <div class="flex gap-3">
            <button as-child>
              <RouterLink to="/portafolio/3d">Ver trabajo 3D</RouterLink>
            </button>
            <button variant="outline" as-child>
              <RouterLink to="/portafolio/ropa">Ver trabajo Ropa</RouterLink>
            </button>
          </div>
      </div>

      <div class="rounded-2xl overflow-hidden border">
        <video class="w-full h-full object-cover" autoplay muted loop playsinline src="/video/Birds_Color.mp4" />
      </div>
    </section>

    <section class="grid md:grid-cols-3 gap-4">
      <div class="p-5 rounded-2xl border">
        <h2 class="font-semibold">
          Estudios
        </h2>
        <p class="text-sm text-muted-foreground mt-2">
          Grado en Diseño Creativo y Tecnologías — UPV
        </p>
      </div>

      <div class="p-5 rounded-2xl border">
        <h2 class="font-semibold">Habilidades</h2>
        <ul class="text-sm text-muted-foreground mt-2 list-disc ml-5">
          <li>Vue + TypeScript</li>
          <li>Tailwind/CSS</li>
          <li>Shadcn UI</li>
          <li>Maya/3D</li>
          <li>Adobe Suite</li>
        </ul>
      </div>

      <div class="p-5 rounded-2xl border">
        <h2 class="font-semibold">Otros</h2>
        <p class="text-sm text-muted-foreground mt-2">Interés en environment art, branding y contenido visual.</p>
      </div>
    </section>

    <section class="space-y-4">
  <div class="flex items-end justify-between gap-4">
    <h2 class="text-2xl font-semibold">Selección de trabajos</h2>
    <div class="text-sm text-muted-foreground hidden sm:block">
      Click para ver detalle
    </div>
  </div>

  <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
    <TarjetaProyecto
      v-for="p in destacados"
      :key="p.slug"
      :proyecto="p"
    />
  </div>
</section>

    <section id="contacto" class="space-y-4">
      <h2 class="text-2xl font-semibold">Contacto</h2>
      <SeccionContacto/>
    </section>
  </main>

</template>

<style scoped>

</style>