<script setup lang="ts">
import { Home } from 'lucide-vue-next'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
</script>

<template>
  <header class="w-full sticky top-0 z-50 backdrop-blur border-b">
    <div class="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">

      <RouterLink to="/" class="inline-flex items-center gap-2">
        <Home class="w-5 h-5""/>
        <span class="text-sm font-medium hidden sm:inline">Inicio</span>
      </RouterLink>

      <div class="flex items-center gap-2">
        <img src="/img/3dgifmaker49813.gif" alt="Logo" class="w-20 h-20">
        <span class="font-semibold tracking-tight hidden sm:inline">BornFromSyn</span>
      </div>

      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Portafolio</NavigationMenuTrigger>
            <NavigationMenuContent class="p-2">
              <div class="grid gap-1 min-w-52">
                <NavigationMenuLink as-child>
                  <RouterLink class="px-3 py-2 rounded hover:bg-muted" to="/portafolio/3d">
                    3D
                  </RouterLink>
                </NavigationMenuLink>
                <NavigationMenuLink as-child>
                  <RouterLink class="px-3 py-2 rounded hover:bg-muted" to="/portafolio/ropa">
                    Ropa
                  </RouterLink>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <a class="px-3 py-2 rounded hover:bg-muted" href="/#contacto">
                Contacto
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>
</template>