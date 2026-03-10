<script setup lang="ts">
import { RouterView } from "vue-router";
import BarraNav from "@/components/BarraNav.vue";
import FooterWeb from "@/components/FooterWeb.vue";
</script>

<template>
  <BarraNav />

  <div class="theme-scope">
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </div>

  <FooterWeb />
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(14px);
}
</style>