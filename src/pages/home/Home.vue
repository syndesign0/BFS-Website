<script setup lang="ts">
import { Button } from "@/components/ui/button";
import SeccionContacto from "@/components/SeccionContacto.vue";
import TarjetaProyecto from "@/components/TarjetaProyecto.vue";
import { proyectos } from "@/data/proyectos";

const destacados = proyectos.slice(0, 4);

const skills3D = ["Maya", "Blender", "Unreal Engine 5", "Rizom UV", "Arnold", "Substance Painter", "Substance Designer", "Marvelous Designer"];
const skillsDesign = ["Photoshop", "Illustrator", "Branding", "Garment design"];
const skillsWeb = ["Vue", "TypeScript", "Tailwind", "Shadcn UI"];
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 py-10 space-y-20">
    <section class="grid lg:grid-cols-2 gap-8 items-center">
      <div class="space-y-5">
        <p class="text-sm uppercase tracking-[0.25em] text-muted-foreground">
          Portfolio / Visual Identity / Design
        </p>

        <h1 class="text-4xl md:text-6xl font-semibold leading-tight">
          Portafolio personal de 3D, branding y diseño de ropa
        </h1>

        <p class="text-muted-foreground text-base md:text-lg max-w-xl">
          Selección de proyectos centrados en estética visual, composición, diseño conceptual y desarrollo de identidad.
        </p>

        <div class="flex flex-wrap gap-3">
          <Button as-child>
            <RouterLink to="/portafolio/3d">Ver 3D</RouterLink>
          </Button>

          <Button variant="outline" as-child>
            <RouterLink to="/portafolio/ropa">Ver ropa</RouterLink>
          </Button>

          <Button variant="secondary" as-child>
            <a href="/#contacto">Contacto</a>
          </Button>
        </div>
      </div>

      <div class="rounded-3xl overflow-hidden border">
        <video
          class="w-full aspect-video object-cover"
          autoplay
          muted
          loop
          playsinline
          src="/video/Birds_Color.mp4"
        />
      </div>
    </section>

    <section class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="rounded-2xl border p-5">
        <p class="text-3xl font-semibold">{{ proyectos.length }}</p>
        <p class="text-sm text-muted-foreground mt-1">Proyectos</p>
      </div>
      <div class="rounded-2xl border p-5">
        <p class="text-3xl font-semibold">2</p>
        <p class="text-sm text-muted-foreground mt-1">Disciplinas</p>
      </div>
      <div class="rounded-2xl border p-5">
        <p class="text-3xl font-semibold">2023–2025</p>
        <p class="text-sm text-muted-foreground mt-1">Periodo</p>
      </div>
      <div class="rounded-2xl border p-5">
        <p class="text-3xl font-semibold">Visual</p>
        <p class="text-sm text-muted-foreground mt-1">Enfoque</p>
      </div>
    </section>

    <section class="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
      <div class="rounded-3xl border p-6 md:p-8 space-y-4">
        <h2 class="text-2xl font-semibold">Perfil profesional</h2>
        <p class="text-muted-foreground leading-7">
          Soy estudiante de Diseño Creativo y Tecnologías con interés en el desarrollo visual de proyectos 3D, branding y diseño de prendas conceptuales. Mi trabajo se centra en construir identidades visuales con una estética marcada, combinando composición, técnica y narrativa.
        </p>
        <p class="text-muted-foreground leading-7">
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

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold">Herramientas y habilidades</h2>

      <div class="grid md:grid-cols-3 gap-4">
        <div class="rounded-3xl border p-6 space-y-4">
          <h3 class="font-semibold">3D</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in skills3D" :key="skill" class="rounded-full border px-3 py-1 text-sm">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="rounded-3xl border p-6 space-y-4">
          <h3 class="font-semibold">Diseño</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in skillsDesign" :key="skill" class="rounded-full border px-3 py-1 text-sm">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="rounded-3xl border p-6 space-y-4">
          <h3 class="font-semibold">Web</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in skillsWeb" :key="skill" class="rounded-full border px-3 py-1 text-sm">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <div class="flex items-end justify-between gap-4">
        <h2 class="text-2xl font-semibold">Selección de trabajos</h2>
        <div class="text-sm text-muted-foreground hidden sm:block">
          Click para ver detalle
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <TarjetaProyecto
          v-for="p in destacados"
          :key="p.slug"
          :proyecto="p"
        />
      </div>
    </section>

    <section id="contacto" class="space-y-4">
      <h2 class="text-2xl font-semibold">Contacto</h2>
      <SeccionContacto />
    </section>
  </main>
</template>