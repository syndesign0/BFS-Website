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
    const texto = busqueda.value.toLowerCase();

    const coincideBusqueda =
      proyecto.titulo.toLowerCase().includes(texto) ||
      proyecto.resumen.toLowerCase().includes(texto) ||
      proyecto.descripcion.toLowerCase().includes(texto);

    const coincideEtiqueta =
      etiquetaActiva.value === "Todas" ||
      proyecto.etiquetas.includes(etiquetaActiva.value);

    return coincideBusqueda && coincideEtiqueta;
  });
});

const tituloCategoria = computed(() =>
  props.categoria === "tresde" ? "Portafolio 3D" : "Portafolio de ropa"
);

const descripcionCategoria = computed(() =>
  props.categoria === "tresde"
    ? "Selección de entornos, renders y trabajos centrados en iluminación, composición y desarrollo visual para 3D."
    : "Selección de prendas conceptuales dentro del universo BornFromSyn, centradas en streetwear, simbología, capas y diseño experimental."
);
</script>

<template>
  <section class="space-y-8">
    <div class="rounded-3xl border overflow-hidden">
      <div class="grid min-h-[340px] lg:grid-cols-[1.2fr_0.8fr]">
        <div class="flex flex-col justify-center p-8 md:p-10 space-y-4">
          <p class="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {{ categoria === "tresde" ? "3D Visual Development" : "Clothing Brand" }}
          </p>

          <h1 class="text-3xl md:text-5xl font-semibold leading-tight">
            {{ tituloCategoria }}
          </h1>

          <p class="text-muted-foreground max-w-2xl text-sm md:text-base">
            {{ descripcionCategoria }}
          </p>

          <div class="flex flex-wrap gap-2 pt-2">
            <span
              v-for="etiqueta in etiquetasDisponibles.slice(1, 6)"
              :key="etiqueta"
              class="rounded-full border px-3 py-1 text-sm"
            >
              {{ etiqueta }}
            </span>
          </div>
        </div>

        <div class="h-[340px] lg:h-full overflow-hidden">
          <img
            :src="
              categoria === 'tresde'
                ? '/img/proyectos/Hospital/portada.jpg'
                : '/img/proyectos/bornfromsyn/STATIC-JACKET/Static_IGStory1.jpg'
            "
            :alt="tituloCategoria"
            class="h-full w-full object-cover no-invert"
          />
        </div>
      </div>
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