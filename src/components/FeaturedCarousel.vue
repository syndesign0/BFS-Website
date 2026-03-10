<script setup lang="ts">
import { computed } from "vue";
import type { Proyecto } from "@/data/proyectos";
import TarjetaProyecto from "@/components/TarjetaProyecto.vue";

const props = defineProps<{
  proyectos: Proyecto[];
}>();

const proyectosDuplicados = computed(() => [
  ...props.proyectos,
  ...props.proyectos,
]);
</script>

<template>
  <div class="featured-marquee overflow-hidden">
    <div class="featured-track">
      <div
        v-for="(proyecto, index) in proyectosDuplicados"
        :key="`${proyecto.slug}-${index}`"
        class="featured-item"
      >
        <TarjetaProyecto :proyecto="proyecto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.featured-marquee {
  width: 100%;
}

.featured-track {
  display: flex;
  width: max-content;
  gap: 1rem;
  animation: marqueeScroll 34s linear infinite;
}

.featured-marquee:hover .featured-track {
  animation-play-state: paused;
}

.featured-item {
  width: min(320px, 78vw);
  flex: 0 0 auto;
}

@keyframes marqueeScroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 0.5rem));
  }
}
</style>