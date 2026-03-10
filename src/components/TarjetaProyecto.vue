<script setup lang="ts">
import type { Proyecto } from "@/data/proyectos";

defineProps<{
  proyecto: Proyecto;
}>();
</script>

<template>
  <RouterLink
    :to="`/portafolio/${proyecto.categoria === 'tresde' ? '3d' : 'ropa'}/${proyecto.slug}`"
    class="group relative block overflow-hidden rounded-3xl border bg-black no-invert"
  >
    <div class="relative aspect-[4/5] w-full overflow-hidden">
      <img
        :src="proyecto.portada"
        :alt="proyecto.titulo"
        class="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div class="absolute inset-x-0 bottom-0 p-4 text-white">
        <div class="mb-2 flex flex-wrap gap-2">
          <span
            v-for="etiqueta in proyecto.etiquetas.slice(0, 3)"
            :key="etiqueta"
            class="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[11px] backdrop-blur"
          >
            {{ etiqueta }}
          </span>
        </div>

        <h3 class="text-lg font-semibold leading-tight">
          {{ proyecto.titulo }}
        </h3>

        <p class="mt-1 line-clamp-2 text-sm text-white/80">
          {{ proyecto.resumen }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>