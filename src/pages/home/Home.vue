<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import SeccionContacto from "@/components/SeccionContacto.vue";
import FeaturedCarousel from "@/components/FeaturedCarousel.vue";
import { proyectos } from "@/data/proyectos";
import { useReveal } from "@/composables/useReveal";

useReveal();

const destacados = computed(() => {
  const slugsDestacados = [
    "hospital3d",
    "mercado3d",
    "bornfromsyn-static-jacket",
    "bornfromsyn-nox-denim",
    "bornfromsyn-cross-sweater",
    "bornfromsyn-fragments-tshirt",
  ];

  return slugsDestacados
    .map((slug) => proyectos.find((p) => p.slug === slug))
    .filter(Boolean);
});

const skills3D = ["Maya", "Blender", "Unreal Engine 5", "Rizom UV", "Arnold"];
const skillsDesign = ["Photoshop", "Illustrator", "Branding", "Garment design"];
const skillsWeb = ["Vue", "TypeScript", "Tailwind", "Shadcn UI"];

const progresoHero = ref(0);

const actualizarScroll = () => {
  const maxScroll = window.innerHeight * 1.1;
  const progreso = Math.min(window.scrollY / maxScroll, 1);
  progresoHero.value = progreso;
};

onMounted(() => {
  actualizarScroll();
  window.addEventListener("scroll", actualizarScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", actualizarScroll);
});

const estiloBoton = computed(() => {
  const p = progresoHero.value;

  const bgStart = Math.round(15 + (255 - 15) * p);
  const bgEnd = Math.round(26 + (232 - 26) * p);
  const text = Math.round(255 - (255 - 17) * p);
  const shadowOpacity = 0.34 - 0.16 * p;

  return {
    color: `rgb(${text}, ${text}, ${text})`,
    borderColor: "rgba(150, 150, 150, 0.7)",
    background: `linear-gradient(135deg, rgb(${bgStart}, ${bgStart}, ${bgStart}), rgb(${bgEnd}, ${bgEnd}, ${bgEnd}))`,
    boxShadow: `0 12px 32px rgba(0, 0, 0, ${shadowOpacity}), 0 2px 10px rgba(0, 0, 0, 0.08)`,
  };
});
</script>

<template>
  <main>
    <section id="hero-home" class="relative h-[160vh]">
      <div class="sticky top-0 h-screen overflow-hidden">
        <video
          class="absolute inset-0 h-full w-full object-cover scale-[1.03] no-invert"
          autoplay
          muted
          loop
          playsinline
          src="/video/Birds_Color.mp4"
        />

        <div class="absolute inset-0 bg-black/45"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>

        <div class="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1
            class="hero-title text-4xl md:text-6xl lg:text-7xl tracking-[0.15em] font-bold uppercase"
            style="font-family: Helvetica, Arial, sans-serif;"
          >
            BornFromSyn Portfolio
          </h1>

          <p class="hero-subtitle mt-4 max-w-2xl text-sm md:text-base text-white/80">
            3D, branding y diseño de ropa conceptual con enfoque en identidad visual,
            composición y atmósfera.
          </p>

          <div class="mt-10 flex flex-wrap items-center justify-center gap-6">
            <RouterLink
              to="/portafolio/3d"
              class="hero-btn"
              :style="estiloBoton"
            >
              Ver 3D
            </RouterLink>

            <RouterLink
              to="/portafolio/ropa"
              class="hero-btn"
              :style="estiloBoton"
            >
              Ver ropa
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-6xl px-4 py-10 space-y-20">
      <section class="reveal grid grid-cols-2 gap-4 md:grid-cols-4">
        <div class="rounded-2xl border p-5">
          <p class="text-3xl font-semibold">{{ proyectos.length }}</p>
          <p class="mt-1 text-sm text-muted-foreground">Proyectos</p>
        </div>
        <div class="rounded-2xl border p-5">
          <p class="text-3xl font-semibold">2</p>
          <p class="mt-1 text-sm text-muted-foreground">Disciplinas</p>
        </div>
        <div class="rounded-2xl border p-5">
          <p class="text-3xl font-semibold">2023–2025</p>
          <p class="mt-1 text-sm text-muted-foreground">Periodo</p>
        </div>
        <div class="rounded-2xl border p-5">
          <p class="text-3xl font-semibold">Visual</p>
          <p class="mt-1 text-sm text-muted-foreground">Enfoque</p>
        </div>
      </section>

      <section class="reveal grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="rounded-3xl border p-6 md:p-8 space-y-4">
          <h2 class="text-2xl font-semibold">Perfil profesional</h2>
          <p class="leading-7 text-muted-foreground">
            Soy estudiante de Diseño Creativo y Tecnologías con interés en el desarrollo visual de proyectos 3D, branding y diseño de prendas conceptuales. Mi trabajo se centra en construir identidades visuales con una estética marcada, combinando composición, técnica y narrativa.
          </p>
          <p class="leading-7 text-muted-foreground">
            Dentro del 3D me interesa especialmente la iluminación, la atmósfera y la presentación visual. En moda, exploro prendas conceptuales bajo el universo BornFromSyn, con referencias a simbología, capas, contraste y construcción experimental.
          </p>
        </div>

        <div class="grid gap-4">
          <div class="rounded-3xl border p-6 space-y-3">
            <h3 class="font-semibold">Estudios</h3>
            <p class="text-sm text-muted-foreground">
              Grado en Diseño Creativo y Tecnologías — UPV
            </p>
          </div>

          <div class="rounded-3xl border p-6 space-y-3">
            <h3 class="font-semibold">Intereses</h3>
            <p class="text-sm text-muted-foreground">
              Environment art, diseño conceptual, branding, garment design y dirección visual.
            </p>
          </div>
        </div>
      </section>

      <section class="reveal space-y-6">
        <h2 class="text-2xl font-semibold">Herramientas y habilidades</h2>

        <div class="grid gap-4 md:grid-cols-3">
          <div class="rounded-3xl border p-6 space-y-4">
            <h3 class="font-semibold">3D</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in skills3D"
                :key="skill"
                class="rounded-full border px-3 py-1 text-sm"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <div class="rounded-3xl border p-6 space-y-4">
            <h3 class="font-semibold">Diseño</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in skillsDesign"
                :key="skill"
                class="rounded-full border px-3 py-1 text-sm"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <div class="rounded-3xl border p-6 space-y-4">
            <h3 class="font-semibold">Web</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in skillsWeb"
                :key="skill"
                class="rounded-full border px-3 py-1 text-sm"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="reveal space-y-4">
        <div class="flex items-end justify-between gap-4">
          <div>
            <h2 class="text-2xl font-semibold">Selección de trabajos</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              Una selección en movimiento de proyectos 3D y ropa.
            </p>
          </div>
          <div class="hidden text-sm text-muted-foreground sm:block">
            Hover para pausar
          </div>
        </div>

        <FeaturedCarousel :proyectos="destacados as any" />
      </section>

      <section id="contacto" class="reveal space-y-4">
        <h2 class="text-2xl font-semibold">Contacto</h2>
        <SeccionContacto />
      </section>
    </div>
  </main>
</template>

<style scoped>
.hero-title {
  animation: titleReveal 1s ease forwards;
}

.hero-subtitle {
  animation: subtitleReveal 1.2s ease forwards;
}

.hero-btn {
  position: relative;
  overflow: hidden;
  border-radius: 9999px;
  padding: 0.9rem 1.7rem;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.2s ease;
}

.hero-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.24),
    transparent
  );
  transform: translateX(-120%);
  transition: transform 0.8s ease;
}

.hero-btn:hover::before {
  transform: translateX(120%);
}

.hero-btn:hover {
  transform: translateY(-2px);
}

@keyframes titleReveal {
  from {
    opacity: 0;
    transform: translateY(24px);
    letter-spacing: 0.28em;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    letter-spacing: 0.15em;
  }
}

@keyframes subtitleReveal {
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