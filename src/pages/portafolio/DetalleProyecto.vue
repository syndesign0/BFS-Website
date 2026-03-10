<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { proyectos } from "@/data/proyectos";
import ModalGaleria from "@/components/ModalGaleria.vue";
import TarjetaProyecto from "@/components/TarjetaProyecto.vue";

const route = useRoute();
const router = useRouter();

const slug = computed(() => String(route.params.slug || ""));
const proyecto = computed(() => proyectos.find((p) => p.slug === slug.value));

const modalAbierto = ref(false);
const imagenActiva = ref(0);

const abrirModal = (indice: number) => {
  imagenActiva.value = indice;
  modalAbierto.value = true;
};

const cerrarModal = () => {
  modalAbierto.value = false;
};

const relacionados = computed(() => {
  if (!proyecto.value) return [];
  return proyectos
    .filter(
      (p) =>
        p.slug !== proyecto.value!.slug &&
        p.categoria === proyecto.value!.categoria
    )
    .slice(0, 3);
});
</script>

<template>
  <section v-if="proyecto" class="space-y-10 animate-in-up">
    <Button variant="ghost" class="gap-2 w-fit" @click="router.back()">
      <ArrowLeft class="w-4 h-4" />
      Volver
    </Button>

    <header class="space-y-3">
      <p class="text-sm text-muted-foreground uppercase tracking-wide">
        {{ proyecto.categoria === "tresde" ? "Proyecto 3D" : "Proyecto de ropa" }}
      </p>

      <h1 class="text-3xl md:text-5xl font-semibold">
        {{ proyecto.titulo }}
      </h1>

      <p class="text-muted-foreground max-w-3xl">
        {{ proyecto.descripcion }}
      </p>
    </header>

    <div class="rounded-3xl overflow-hidden border">
      <img
        :src="proyecto.portada"
        :alt="proyecto.titulo"
        class="w-full max-h-162.5 object-cover"
      />
    </div>

    <section v-if="proyecto.videoYoutube" class="space-y-4">
      <h2 class="text-2xl font-semibold">Vídeo</h2>

      <div class="rounded-3xl overflow-hidden border">
        <iframe
          class="w-full aspect-video"
          :src="proyecto.videoYoutube"
          title="Vídeo del proyecto"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <section class="grid md:grid-cols-3 gap-4">
      <div class="p-5 rounded-3xl border">
        <h2 class="font-semibold">Resumen</h2>
        <p class="text-sm text-muted-foreground mt-2">
          {{ proyecto.resumen }}
        </p>
      </div>

      <div class="p-5 rounded-3xl border">
        <h2 class="font-semibold">Año</h2>
        <p class="text-sm text-muted-foreground mt-2">
          {{ proyecto.ano || "Sin especificar" }}
        </p>
      </div>

      <div class="p-5 rounded-3xl border">
        <h2 class="font-semibold">Categoría</h2>
        <p class="text-sm text-muted-foreground mt-2">
          {{ proyecto.categoria === "tresde" ? "3D" : "Ropa / Branding" }}
        </p>
      </div>
    </section>

    <section v-if="proyecto.herramientas?.length" class="space-y-3">
      <h2 class="text-2xl font-semibold">Herramientas</h2>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="herramienta in proyecto.herramientas"
          :key="herramienta"
          class="px-3 py-1 rounded-full border text-sm"
        >
          {{ herramienta }}
        </span>
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Etiquetas</h2>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="etiqueta in proyecto.etiquetas"
          :key="etiqueta"
          class="px-3 py-1 rounded-full border text-sm"
        >
          {{ etiqueta }}
        </span>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Galería</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <button
          v-for="(img, index) in proyecto.galeria"
          :key="img"
          type="button"
          class="rounded-3xl overflow-hidden border text-left hover:opacity-90 transition bg-muted w-full"
          @click="abrirModal(index)"
        >
          <img
            :src="img"
            :alt="`${proyecto.titulo} ${index + 1}`"
            class="w-full h-60 object-cover block"
          />
        </button>
      </div>

      <p class="text-sm text-muted-foreground">
        Haz click en una imagen para verla en pantalla completa.
      </p>
    </section>

    <section v-if="proyecto.enlaces?.length" class="space-y-3">
      <h2 class="text-2xl font-semibold">Enlaces</h2>

      <div class="flex flex-col gap-2">
        <a
          v-for="enlace in proyecto.enlaces"
          :key="enlace.href"
          :href="enlace.href"
          target="_blank"
          rel="noreferrer"
          class="underline text-sm"
        >
          {{ enlace.label }}
        </a>
      </div>
    </section>

    <section v-if="relacionados.length" class="space-y-4">
      <h2 class="text-2xl font-semibold">Proyectos relacionados</h2>

      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <TarjetaProyecto
          v-for="item in relacionados"
          :key="item.slug"
          :proyecto="item"
        />
      </div>
    </section>

    <ModalGaleria
      :abierto="modalAbierto"
      :imagenes="proyecto.galeria"
      :indice-inicial="imagenActiva"
      @cerrar="cerrarModal"
    />
  </section>

  <section v-else class="p-6 rounded-2xl border space-y-2">
    <h1 class="text-2xl font-semibold">Proyecto no encontrado</h1>
    <p class="text-muted-foreground">
      La URL no coincide con ningún proyecto del archivo de datos.
    </p>
  </section>
</template>

<style scoped>
.animate-in-up {
  animation: fadeUp 0.5s ease;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>