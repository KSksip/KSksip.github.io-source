<script setup>
import { ref } from 'vue';

const feature = ref();
</script>

<template>
  <div class="font-IBMPlexMono sticky top-0">
    <nav class="font-adwaita flex bg-white grow-0 flex-row border-b-1 border-slate-200 p-2 justify-center h-13 text-2xl 
    [&_div]:w-1/3 [&_div]:flex">
        <div>
            <a href="https://github.com/KSksip" class="flex gap-2">
              <v-icon class="size-8" name="fa-github" />
              <h2 class="font-bold">KSksip</h2>
            </a>
        </div>
        <div class="justify-center gap-6">
            <!--<router-link to="/">Home</router-link>
            <router-link to="/projects">Projects</router-link>-->
        </div>

        <div>

        </div>
        
    </nav>
  </div>
</template>

