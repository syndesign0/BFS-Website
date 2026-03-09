<script setup lang="ts">

import {computed, onMounted, onUnmounted, ref, watch} from "vue";
import { ChevronLeft, ChevronRight, X } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

const proprs = defineProps<{
  abierto: boolean;
  imagenes: string[];
  indiceInicial: number;
}>();

const emit = defineEmits<{
  (e: "cerrar"): void;
}>();

const indiceActual = ref(proprs.indiceInicial);

watch(
  () => proprs.indiceInicial,
  (nuevoValor) => {
    indiceActual.value = nuevoValor;
  }
);

const imagenActual= computed(() => proprs.imagenes[indiceActual.value]);

const anterior = () => {
  indiceActual.value =
    (indiceActual.value - 1 + proprs.imagenes.length) % proprs.imagenes.length;
};

const siguiente = () => {
  indiceActual.value = (indiceActual.value + 1) % proprs.imagenes.length;
};

const manejarTeclado = (e: KeyboardEvent) => {
  if (!proprs.abierto) return;

  if (e.key === "Escape") emit ("cerrar");
  if (e.key === "ArrowLeft") anterior();
  if (e.key === "ArrowRight") siguiente();
};

onMounted(() => {
  window.addEventListener("keydown", manejarTeclado);
});

onUnmounted(() => {
  window.removeEventListener("keydown", manejarTeclado);
});

</script>

<template>
  <Teleport to="body">
    <div
      v-if="abierto"
      class="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4"
    >
      <div class="relative w-full max-w-6xl">
        <div class="absolute -top-14 right-0">
          <Button variant="secondary" size="icon" @click="emit('cerrar')">
            <X class="w-5 h-5" />
          </Button>
        </div>

        <div class="relative">
          <img
            :src="imagenActual"
            alt="Imagen ampliada"
            class="w-full max-h-[85vh] object-contain rounded-2xl"
          />

          <button
            type="button"
            class="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40"
            @click="anterior"
          >
            <ChevronLeft class="w-6 h-6 text-white" />
          </button>

          <button
            type="button"
            class="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40"
            @click="siguiente"
          >
            <ChevronRight class="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
