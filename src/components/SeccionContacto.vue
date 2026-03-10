<script setup lang="ts">
import { ref, computed } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, SendHorizonal } from "lucide-vue-next";

const nombre = ref("");
const email = ref("");
const mensaje = ref("");
const enviado = ref(false);
const exito = ref(false);

const emailValido = computed(() => /\S+@\S+\.\S+/.test(email.value));
const puedeEnviar = computed(
  () =>
    nombre.value.trim().length > 0 &&
    emailValido.value &&
    mensaje.value.trim().length >= 10
);

const enviar = () => {
  enviado.value = true;
  if (!puedeEnviar.value) return;

  exito.value = true;
  nombre.value = "";
  email.value = "";
  mensaje.value = "";
  enviado.value = false;

  setTimeout(() => {
    exito.value = false;
  }, 3500);
};
</script>

<template>
  <div class="grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
    <div class="rounded-3xl border p-6 md:p-8 space-y-4">
      <p class="text-sm uppercase tracking-[0.22em] text-muted-foreground">
        Contacto
      </p>

      <h3 class="text-2xl font-semibold">
        Disponible para proyectos, colaboraciones o contacto académico
      </h3>

      <p class="text-muted-foreground leading-7">
        Si quieres contactar por una colaboración, una propuesta o simplemente para saber más sobre el trabajo, puedes escribirme aquí.
      </p>

      <div class="space-y-3 pt-2">
        <div class="flex items-center gap-3">
          <Mail class="w-4 h-4" />
          <span class="text-sm">tuemail@ejemplo.com</span>
        </div>

        <div class="flex items-center gap-3">
          <Instagram class="w-4 h-4" />
          <a class="text-sm underline" href="https://instagram.com/fromsyn" target="_blank" rel="noreferrer">
            @fromsyn
          </a>
        </div>
      </div>
    </div>

    <form class="space-y-4 rounded-3xl border p-6 md:p-8" @submit.prevent="enviar">
      <div>
        <label class="text-sm font-medium">Nombre</label>
        <Input v-model="nombre" placeholder="Tu nombre" class="mt-2" />
        <p v-if="enviado && !nombre.trim()" class="text-xs mt-1 text-red-500">Campo obligatorio</p>
      </div>

      <div>
        <label class="text-sm font-medium">Email</label>
        <Input v-model="email" placeholder="tucorreo@email.com" class="mt-2" />
        <p v-if="enviado && !emailValido" class="text-xs mt-1 text-red-500">Email no válido</p>
      </div>

      <div>
        <label class="text-sm font-medium">Mensaje</label>
        <Textarea v-model="mensaje" placeholder="Cuéntame qué necesitas..." class="mt-2 min-h-[140px]" />
        <p v-if="enviado && mensaje.trim().length < 10" class="text-xs mt-1 text-red-500">
          Mínimo 10 caracteres
        </p>
      </div>

      <div class="flex items-center gap-3">
        <Button type="submit" class="gap-2">
          <SendHorizonal class="w-4 h-4" />
          Enviar
        </Button>

        <p v-if="exito" class="text-sm text-green-600">
          Mensaje enviado correctamente (demo).
        </p>
      </div>
    </form>
  </div>
</template>