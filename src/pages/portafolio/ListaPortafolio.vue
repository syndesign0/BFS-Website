<script setup lang="ts">
import { computed } from 'vue';
import type { CategoriaProyecto } from '@/data/proyectos';
import { proyectos } from '@/data/proyectos';

const props = defineProps<{ categoria: CategoriaProyecto }>();

const lista = computed(() => proyectos.filter((p) => p.categoria ===props.categoria));
</script>


<template>
  <section class="space-y-4">
    <h1 class="text-3xl font-semibold">
      {{ categoria === "tresde" ? "Portafolio 3D" : "Portafolio Ropa" }}
    </h1>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <RouterLink
        v-for="p in lista"
        :key="p.slug"
        class="rounded-2xl overflow-hidden border hover:shadow-sm transition"
        :to="`/portafolio/${p.categoria === 'tresde' ? '3d' : 'ropa'}/${p.slug}`"
      >
        <img :src="p.portada" :alt="p.titulo" class="w-full aspect-video object-cover" />
        <div class="p-4 space-y-2">
          <div class="font-semibold">{{ p.titulo }}</div>
          <div class="text-sm text-muted-foreground">{{ p.resumen }}</div>
        </div>
    </RouterLink>
    </div>
  </section>
</template>


<style scoped>

</style>