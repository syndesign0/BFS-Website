<script setup lang="ts">

import { ref, computed } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, DivideCircle } from "lucide-vue-next";

const nombre = ref("");
const email = ref("");
const mensaje = ref("");
const enviado = ref(false);

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

  alert("Mensaje enviado !");
  nombre.value = "";
  email.value = "";
  mensaje.value = "";
  enviado.value = false;
}

</script>

<template>
  <div class="grid lg:grid-cols-2 gap-6">
    <form class="space-y-3 p-5 rounded-2xl border" @submit.prevent="enviar">

      <div>
        <label class="text-sm font-medium">Nombre</label>
        <Input v-model="nombre" placeholder="Tu nombre" />
        <p v-if="enviado && !nombre.trim()" class="text-xs mt-1 text-red-500" >Campo obligatorio</p>
      </div>

      <div>
        <label class="text-sm font-medium">Email</label>
        <Input v-model="email" placeholder="example@email.com" />
        <p v-if="enviado && !emailValido" class="text-xs mt-1 text-red-500" >Campo obligatorio</p>
      </div>

      <div>
        <label class="text-sm font-medium">Mensaje</label>
        <Textarea v-model="mensaje" placeholder="Cuéntame qué necesitas..." />
        <p v-if="enviado && mensaje.trim().length < 10" class="text-xs mt-1 text-red-500" >
          Mínimo 10 caracteres
        </p>
      </div>

      <Button type="submit">Enviar</Button>

    </form>

    <div class="p-5 rounded-2xl border space-y-3">

      <div class="flex items-center gap-2">
        <Mail class="w-4 h-4" />
        <span class="text-sm">syndesing0@gmail.com</span>
      </div>

      <div class="flex items-center gap-2">
        <Instagram class="w-4 h-4" />
        <a class="text-sm underline" href="https://instagram.com/fromsyn" target="_blank" rel="noreferrer">
          @fromsyn
        </a>
      </div>

      <div class="rounded-2xl overflow-hidden border">
        <iframe
        class="w-full h-48"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12317.450941184565!2d-0.35433053970338807!3d39.48372315070664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488259073375%3A0xfb410ba707ca33c9!2sUPV%20-%20Facultat%20de%20Belles%20Arts!5e0!3m2!1sen!2ses!4v1772931156563!5m2!1sen!2ses"
        />

      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>