<script setup>
import { ref } from 'vue';

const feature = ref();
</script>

<template>
  <div>
    <nav class="font-adwaita flex grow-0 flex-row border-b-1 border-slate-200 p-2 justify-center text-xl 
    [&_div]:w-1/3 [&_div]:flex">
        <div>
            <a href="https://github.com/KSksip" class="flex">
                <v-icon class="size-8 -translate-y-0.5" name="fa-github" />
            </a>
        </div>
        <div class="justify-center gap-6
        [&_a]:animate-(--cool-underline-shyt)">
            <h3><a href="">Home</a></h3>
            <h3><a href="">Projects</a></h3>
        </div>
        <div></div>
        
    </nav>
  </div>
</template>

