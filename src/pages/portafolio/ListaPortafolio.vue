<script setup lang="ts">
import { computed, ref } from "vue";
import type { CategoriaProyecto } from "@/data/proyectos";
import { proyectos } from "@/data/proyectos";
import TarjetaProyecto from "@/components/TarjetaProyecto.vue";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const props = defineProps<{ categoria: CategoriaProyecto }>();

const busqueda = ref("");
const etiquetaActiva = ref<string>("Todas");

const proyectosCategoria = computed(() =>
  proyectos.filter((p) => p.categoria === props.categoria)
);

const etiquetasDisponibles = computed(() => {
  const todasLasEtiquetas = proyectosCategoria.value.flatMap((p) => p.etiquetas);
  const etiquetasUnicas = [...new Set(todasLasEtiquetas)];
  return ["Todas", ...etiquetasUnicas];
});

const proyectosFiltrados = computed(() => {
  return proyectosCategoria.value.filter((proyecto) => {
    const coincideBusqueda =
      proyecto.titulo.toLowerCase().includes(busqueda.value.toLowerCase()) ||
      proyecto.resumen.toLowerCase().includes(busqueda.value.toLowerCase()) ||
      proyecto.descripcion.toLowerCase().includes(busqueda.value.toLowerCase());

    const coincideEtiqueta =
      etiquetaActiva.value === "Todas" ||
      proyecto.etiquetas.includes(etiquetaActiva.value);

    return coincideBusqueda && coincideEtiqueta;
  });
});
</script>

<template>
  <section class="space-y-6">
    <div class="space-y-2">
      <h1 class="text-3xl font-semibold">
        {{ categoria === "tresde" ? "Portafolio 3D" : "Portafolio de ropa" }}
      </h1>

      <p class="text-sm text-muted-foreground">
        Explora los proyectos, filtra por etiqueta o busca por nombre y descripción.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-[1fr_auto]">
      <Input
        v-model="busqueda"
        placeholder="Buscar proyectos..."
        class="w-full"
      />

      <Button
        variant="outline"
        @click="
          busqueda = '';
          etiquetaActiva = 'Todas';
        "
      >
        Limpiar filtros
      </Button>
    </div>

    <div class="flex flex-wrap gap-2">
      <button
        v-for="etiqueta in etiquetasDisponibles"
        :key="etiqueta"
        type="button"
        @click="etiquetaActiva = etiqueta"
        class="rounded-full border px-3 py-1 text-sm transition"
        :class="
          etiquetaActiva === etiqueta
            ? 'bg-foreground text-background border-foreground'
            : 'bg-background text-foreground hover:bg-muted'
        "
      >
        {{ etiqueta }}
      </button>
    </div>

    <div class="flex items-center justify-between text-sm text-muted-foreground">
      <span>{{ proyectosFiltrados.length }} proyecto(s)</span>
      <span>Filtro actual: {{ etiquetaActiva }}</span>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <TarjetaProyecto
        v-for="proyecto in proyectosFiltrados"
        :key="proyecto.slug"
        :proyecto="proyecto"
      />
    </div>

    <div
      v-if="proyectosFiltrados.length === 0"
      class="rounded-2xl border p-8 text-center text-muted-foreground"
    >
      No se han encontrado proyectos con esos filtros.
    </div>
  </section>
</template>