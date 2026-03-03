<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { proyectos } from "@/data/proyectos";

  const route = useRoute();

  const slug= computed(() => String(route.params.slug || ""));
  const proyecto = computed (() => proyectos.find((p) => p.slug === slug.value));

</script>


<template>
  <section class="space-y-4">
    <div v-if="proyecto" class="space-y-3">
      <h1 class="text-3xl font-semibold">
        {{ proyecto.titulo }}
      </h1>
      <p class="text-muted-foreground">
        {{ proyecto.descripcion }}
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols3 gap-4">
        <img
          v-for="img in proyecto.galeria"
          :key="img"
          :src="img"
          :alt="proyecto.titulo"
          class="w-full aspect-video object-cover rounded-2xl border"
      </div>
    </div>

    <div v-else class="p-6 rounded-2xl border">
      <p class="font-medium">
        Proyecto no encontrado.
      </p>
      <p class="text-sm text-muted-foreground">
        Revisa la URL o vuelve al listado del portafolio.
      </p>
    </div>
  </section>
</template>


<style scoped>

</style>