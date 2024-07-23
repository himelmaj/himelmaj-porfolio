import NextJS from "@/components/icons/NextJS.astro"
import Tailwind from "@/components/icons/Tailwind.astro"
import AstroBuild from "@/components/icons/AstroBuild.astro"
import Laravel from "@/components/icons/Laravel.astro"
import Supabase from "@/components/icons/Supabase.astro"
import Livewire from "@/components/icons/Livewire.astro"


export default {
    NEXT: {
        name: 'NextJS',
        class: "bg-black gap-x-1 text-white",
        icon: NextJS
    },
    TAILWIND: {
        name: 'Tailwind',
        class: "bg-[#0f172a] gap-x-1 text-white",
        icon: Tailwind
    },
    LARAVEL: {
        name: 'Laravel',
        class: "bg-white gap-x-1 text-white text-red-600 border-white dark:border-white hover:border-white hover:dark:border-white",
        icon: Laravel
    },
    DRIZZLE: {
        name: 'drizzle',
        class: "bg-[#111111] gap-x-1 text-white",
        icon: null
    },
    SUPABASE: {
        name: 'Supabase',
        class: "bg-[#1c1c1c] gap-x-1 text-white",
        icon: Supabase
    },
    LIVEWIRE: {
        name: 'Livewire',
        class: "bg-[#0e172a] gap-x-1 text-white",
        icon: Livewire
    },
    ASTRO: {
        name: 'Astro',
        class: "bg-[#23262f] text-white",
        icon: AstroBuild
    },
}

