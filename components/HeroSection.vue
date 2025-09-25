<template>
    <section
        class="relative min-h-[56vh] sm:min-h-[60vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden bg-brand-gradient py-10 sm:py-14"
    >
        <!-- Decorative background image -->
        <NuxtImg
            src="/pdr-hero.jpg"
            alt=""
            aria-hidden="true"
            role="presentation"
            width="1800"
            height="900"
            sizes="(max-width: 1024px) 100vw, 1200px"
            preload
            fetchpriority="high"
            placeholder
            class="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay"
        />

        <!-- Soft dark veil -->
        <div class="absolute inset-0 bg-black/30" />

        <!-- Headline & CTAs -->
        <div
            class="relative z-10 text-center text-white px-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)] max-w-3xl mx-auto"
        >
            <p class="text-white/90 font-semibold tracking-wide mb-2">
                Acadia PDR • Lakeland, MN
            </p>

            <!-- Enhanced contrast: full white + stronger drop-shadow -->
            <h1
                class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg"
            >
                Paintless Dent Repair — Fast, Clean, and Mobile
            </h1>

            <!-- Enhanced contrast: full white + subtle drop-shadow -->
            <p class="mt-3 sm:mt-4 text-base sm:text-lg text-white drop-shadow-md">
                Hail, dings, door dents, and creases removed without repainting. We come to you, or drop off in Lakeland.
            </p>

            <div class="mt-6 sm:mt-8 flex flex-wrap gap-3 justify-center">
                <a :href="`tel:${siteConfig.phone}`" class="btn-primary">
                    Call {{ siteConfig.phoneDisplay || prettyPhone }}
                </a>
                <NuxtLink to="/contact" class="btn-accent text-black">
                    Get a Free Estimate
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '~/site.config'

const prettyPhone = computed(() => {
    const digits = (siteConfig.phone || '').replace(/[^0-9]/g, '')
    if (digits.length === 11 && digits.startsWith('1')) return `(${digits.slice(1,4)}) ${digits.slice(4,7)}-${digits.slice(7)}`
    if (digits.length === 10) return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
    return siteConfig.phone
})
</script>

<style scoped>
/* Buttons + gradient provided by your global CSS/Tailwind utilities */
</style>
