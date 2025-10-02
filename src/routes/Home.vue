<script setup lang="ts">
import {ref} from 'vue'



const tech = ref({
    frontEnd: [
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
    ],


    backEnd: [
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
        },
    ],
})

</script>

<template>
    <div class="tracking-wide leading-10 px-5 md:px-0">
        <h1 class="text-5xl font-semibold dark:text-accent-2 text-accent">Hi! (ᵔᵕᵔ)◜</h1>
        <p class="text-xl pt-2 ps-1.5">
            Hello! My name is <span class="text-accent dark:text-accent-2 font-bold">Skip</span>. I'm a highschool student, and I'm currently working towards my end goal of being a <span class="text-accent dark:text-accent-2 font-bold">full-stack developer</span>!
        </p>

        <br>
        <h2 class="text-3xl font-bold tracking text-accent dark:text-accent-2">As a developer</h2>
        <p class="text-xl pt-2 ps-1.5">
            I work alot with <span class="text-accent dark:text-accent-2 font-bold">Vue</span> and <span class="text-accent dark:text-accent-2 font-bold">Typescript</span> since I mostly do front-end. Though, I am interested in learning backend so I am currently learning <span class="text-accent dark:text-accent-2 font-bold">Go</span> in order to have more than just <span class="text-accent dark:text-accent-2 font-bold">Typescript</span> as a backend language. 
        <br><br>
            Personally i am a big fan of <span class="text-accent dark:text-accent-2 font-bold">customization</span>. My goal when developing apps is to make them as customizable as possible for me and others. In addition I am also interested in <span class="text-accent dark:text-accent-2 font-bold">open-source</span> software and actively try to find and make open-source alternatives.
        </p>
        
        <br>
        <h2 class="text-3xl font-bold dark:text-accent-2 text-accent">Experience</h2>
        <p class="text-xl pt-2 ps-1.5">
            I have worked two <span class="text-accent dark:text-accent-2 font-bold">internships</span>, at the first one I refactored old <span class="text-accent dark:text-accent-2 font-bold">jQuery</span> pages to <span class="text-accent dark:text-accent-2 font-bold">Vue</span>. At the second one i explored <span class="text-accent dark:text-accent-2 font-bold">Quasar</span> and <span class="text-accent dark:text-accent-2 font-bold">NestJS</span>.
        </p>
    </div>

    <div class="mt-12">
        <div class="border-t-1 border-b-1 md:border-1 dark:border-zinc-700 border-zinc-200 md:rounded-md inset-shadow-sm px-8 pt-4 pb-8 mt-2">
            <div v-for="i in 2" class="even:mt-10">
                <h2 class="text-2xl dark:text-accent-2 text-center md:text-start font-bold text-accent">{{ i == 1 ? "Front-end" : "Back-end" }}</h2>
                <div class="flex justify-center md:justify-start gap-2 mt-2 flex-wrap">
                    <div v-for="item in i == 1 ? tech.frontEnd : tech.backEnd"
                    class="gap-1 flex border-1 dark:bg-zinc-700 bg-white dark:border-zinc-600 border-zinc-300 rounded-full px-4 py-2 font-bold shadow-md
                    hover:scale-105 transition-transform">
                        <v-icon class="size-6" :name="item.icon"></v-icon>
                        <h3>{{ item.name }}</h3>
                    </div>
                </div>
            </div>
        </div>  
    </div>  
</template>