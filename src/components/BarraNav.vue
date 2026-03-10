<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { Home, Sun, Moon } from "lucide-vue-next";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const pastHero = ref(false);
const modoInvertido = ref(false);

const handleScroll = () => {
  const hero = document.getElementById("hero-home");

  if (!hero) {
    pastHero.value = true;
    return;
  }

  const heroHeight = hero.offsetHeight - window.innerHeight;
  pastHero.value = window.scrollY > heroHeight;
};

const aplicarTema = (invertido: boolean) => {
  const html = document.documentElement;

  if (invertido) {
    html.classList.add("theme-invert");
  } else {
    html.classList.remove("theme-invert");
  }
};

const toggleTema = () => {
  modoInvertido.value = !modoInvertido.value;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);

  const guardado = localStorage.getItem("theme-invertido");
  modoInvertido.value = guardado === "true";
  aplicarTema(modoInvertido.value);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(modoInvertido, (valor) => {
  aplicarTema(valor);
  localStorage.setItem("theme-invertido", String(valor));
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
    :class="
      pastHero
        ? 'bg-[#2b2b2b]/95 backdrop-blur-md border-b border-white/10 text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)]'
        : 'bg-transparent text-white'
    "
  >
    <div class="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
      <RouterLink to="/" class="inline-flex items-center gap-2 hover:opacity-80 transition">
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

      <div class="flex items-center gap-3">
        <!-- Toggle light/dark -->
        <button
          type="button"
          @click="toggleTema"
          class="relative flex h-9 w-[78px] items-center rounded-full border border-white/15 bg-white/10 px-2 transition hover:bg-white/15"
          :aria-pressed="modoInvertido"
          aria-label="Cambiar modo de color"
        >
          <Sun class="w-4 h-4 text-white/80" />
          <Moon class="w-4 h-4 text-white/80 ml-auto" />

          <span
            class="absolute top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-white shadow-md transition-all duration-300"
            :class="modoInvertido ? 'left-[43px]' : 'left-[6px]'"
          />
        </button>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                class="bg-transparent text-inherit hover:bg-white/10 data-[state=open]:bg-white/10"
              >
                Portafolio
              </NavigationMenuTrigger>

              <NavigationMenuContent
                class="p-2 backdrop-blur-md bg-[#2b2b2b] border border-white/10 text-white"
              >
                <div class="grid gap-1 min-w-52">
                  <NavigationMenuLink as-child>
                    <RouterLink
                      class="px-3 py-2 rounded hover:bg-white/10 transition"
                      to="/portafolio/3d"
                    >
                      3D
                    </RouterLink>
                  </NavigationMenuLink>

                  <NavigationMenuLink as-child>
                    <RouterLink
                      class="px-3 py-2 rounded hover:bg-white/10 transition"
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
    </div>
  </header>
</template>