<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { Home } from "lucide-vue-next";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const route = useRoute();
const pastHero = ref(false);

const handleScroll = () => {
  const hero = document.getElementById("hero-home");

  if (!hero) {
    pastHero.value = true;
    return;
  }

  const heroHeight = hero.offsetHeight - window.innerHeight;
  pastHero.value = window.scrollY > heroHeight;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const enHome = computed(() => route.path === "/");
const enPortafolio = computed(() => route.path.startsWith("/portafolio"));
const en3D = computed(() => route.path.startsWith("/portafolio/3d"));
const enRopa = computed(() => route.path.startsWith("/portafolio/ropa"));
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
    :class="
      pastHero || !enHome
        ? 'bg-[#2b2b2b]/95 backdrop-blur-md border-b border-white/10 text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)]'
        : 'bg-transparent text-white'
    "
  >
    <div class="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 transition"
        :class="enHome ? 'opacity-100' : 'opacity-80 hover:opacity-100'"
      >
        <Home class="w-5 h-5" />
        <span class="text-sm font-medium hidden sm:inline">Inicio</span>
      </RouterLink>

      <div class="flex items-center gap-2">
        <img
          src="/img/3dgifmaker49813.gif"
          alt="Logo"
          class="w-20 h-20 invert contrast-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
        />
        <span class="font-semibold tracking-tight hidden sm:inline">
          Portafolio
        </span>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              class="bg-transparent text-inherit hover:bg-white/10 data-[state=open]:bg-white/10"
              :class="enPortafolio ? 'ring-1 ring-white/15' : ''"
            >
              Portafolio
            </NavigationMenuTrigger>

            <NavigationMenuContent
              class="p-2 backdrop-blur-md bg-[#2b2b2b] border border-white/10 text-white"
            >
              <div class="grid gap-1 min-w-52">
                <NavigationMenuLink as-child>
                  <RouterLink
                    class="px-3 py-2 rounded transition"
                    :class="en3D ? 'bg-white/15' : 'hover:bg-white/10'"
                    to="/portafolio/3d"
                  >
                    3D
                  </RouterLink>
                </NavigationMenuLink>

                <NavigationMenuLink as-child>
                  <RouterLink
                    class="px-3 py-2 rounded transition"
                    :class="enRopa ? 'bg-white/15' : 'hover:bg-white/10'"
                    to="/portafolio/ropa"
                  >
                    Ropa
                  </RouterLink>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <a
                class="px-3 py-2 rounded hover:bg-white/10 transition"
                href="/#contacto"
              >
                Contacto
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>
</template>