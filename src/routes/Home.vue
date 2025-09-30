<script setup lang="ts">
import {ref} from 'vue'

const frontEndTech = ref([
    { 
        icon: "co-vue-js",
        name: "VueJS",
    },
    { 
        icon: "si-tailwindcss",
        name: "Tailwindcss",
    },
    { 
        icon: "co-typescript",
        name: "Typescript",
    },
    { 
        icon: "co-nuxt-js",
        name: "NuxtJS",
    },
    { 
        icon: "co-javascript",
        name: "Javascript",
    },
    { 
        icon: "co-html5",
        name: "HTML",
    },
    { 
        icon: "io-logo-css3",
        name: "CSS",
    },
    { 
        icon: "bi-bootstrap-fill",
        name: "Bootstrap",
    },
])

const backEndTech = ref([
    {
        icon: "co-typescript",
        name: "Typescript",
    },
    {
        icon: "co-go",
        name: "Go",
    },
    {
        icon: "co-nuxt-js",
        name: "NuxtJS",
    },
    {
        icon: "si-express",
        name: "ExpressJS",
    },
    {
        icon: "si-sqlite",
        name: "SQLite"  
    }
])
</script>

<template>
    <div class="py-8">
        <div class="w-200 mx-auto tracking-wide leading-10 px-5 md:px-0">
            <h1 class="text-5xl font-semibold text-accent">Hi! (ᵔᵕᵔ)◜</h1>
            <p class="text-xl pt-2 ps-1.5">
                Hello! My name is <span class="text-accent font-bold">Skip</span>. I'm a highschool student, and I'm currently working towards my end goal of being a <span class="text-accent font-bold">full-stack developer</span>!
            </p>

            <br>
            <h2 class="text-3xl font-bold tracking text-accent">As a developer</h2>
            <p class="text-xl pt-2 ps-1.5">
                I work alot with <span class="text-accent font-bold">Vue</span> and <span class="text-accent font-bold">Typescript</span> since I mostly do front-end. Though, I am interested in learning backend so I am currently learning <span class="text-accent font-bold">Go</span> in order to have more than just <span class="text-accent font-bold">Typescript</span> as a backend language. 
            <br><br>
                Personally i am a big fan of <span class="text-accent font-bold">customization</span>. My goal when developing apps is to make them as customizable as possible for me and others. In addition I am also interested in <span class="text-accent font-bold">open-source</span> software and actively try to find and make open-source alternatives.
            </p>
            
            <br>
            <h2 class="text-3xl font-bold text-accent">Experience</h2>
            <p class="text-xl pt-2 ps-1.5">
                I have worked two <span class="text-accent font-bold">internships</span>, at the first one I refactored old <span class="text-accent font-bold">jQuery</span> pages to <span class="text-accent font-bold">Vue</span>. At the second one i explored <span class="text-accent font-bold">Quasar</span> and <span class="text-accent font-bold">NestJS</span>.
            </p>
        </div>

        <div class="mx-auto w-200 mt-12">
            <!--<h1 class="text-5xl font-bold text-accent">Technologies</h1>-->
            <div class="border-1 border-slate-200 md:rounded-md inset-shadow-sm px-8 pt-4 pb-8 mt-2">
                <h2 class="text-2xl font-bold text-accent">Front-end</h2>
                <div class="flex gap-2 mt-2 flex-wrap">
                    <div v-for="item in frontEndTech"
                    class="gap-1 flex border-1 border-slate-300 rounded-full px-4 py-2 font-bold shadow-md">
                        <v-icon class="size-6" :name="item.icon"></v-icon>
                        <h3>{{ item.name }}</h3>
                    </div>
                </div>

                <h2 class="text-2xl font-bold text-accent mt-10">Back-end</h2>
                <div class="flex gap-2 mt-2 flex-wrap">
                    <div v-for="item in backEndTech"
                    class="gap-1 flex border-1 border-slate-300 rounded-full px-4 py-2 font-bold shadow-md">
                        <v-icon class="size-6" :name="item.icon"></v-icon>
                        <h3>{{ item.name }}</h3>
                    </div>
                </div>
            </div>  
        </div>
    </div>
    
  
</template>