<template>
    <main class="bg-white">
        <section class="bg-brand-gradient text-white py-16">
            <div class="max-w-7xl mx-auto px-6">
                <h1 class="text-4xl md:text-5xl font-bold">Paintless Dent Repair (PDR)</h1>
                <p class="mt-3 text-white/90 max-w-2xl">
                    Door dings, creases, and small collision dents removed without repainting — preserve your OEM finish.
                </p>
                <div class="mt-6 flex flex-wrap gap-3">
                    <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay || prettyPhone }}</a>
                    <NuxtLink to="/contact" class="btn-accent text-black">Get a Free Estimate</NuxtLink>
                </div>
            </div>
        </section>

        <section class="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-start">
            <div>
                <h2 class="text-2xl md:text-3xl font-bold">Why PDR?</h2>
                <p class="mt-4 text-neutral-700">
                    PDR gently massages metal from behind the panel to restore shape without fillers or paint.
                    It’s faster, keeps factory finish intact, and typically doesn’t appear on CarFax.
                </p>
                <ul class="mt-6 space-y-2 text-neutral-700">
                    <li>• Same-day on many single-panel jobs</li>
                    <li>• Mobile service available for minor dents</li>
                    <li>• Preserve OEM paint and vehicle value</li>
                </ul>
            </div>
            <div class="rounded-xl overflow-hidden shadow-md">
                <NuxtImg src="/pdr-hero.jpg" alt="Paintless Dent Repair" class="w-full h-72 md:h-[22rem] object-cover"/>
            </div>
        </section>

        <section id="pdr" class="max-w-7xl mx-auto px-6 pb-16">
            <h3 class="text-xl md:text-2xl font-semibold">Common PDR Repairs</h3>
            <div class="grid md:grid-cols-3 gap-6 mt-6">
                <div class="card-box">Door dings &amp; parking lot bumps</div>
                <div class="card-box">Sharp creases &amp; panel waves</div>
                <div class="card-box">Small collision dents (paint intact)</div>
            </div>
        </section>

        <section class="max-w-7xl mx-auto px-6 pb-20">
            <div class="bg-brand-gradient rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                    <h3 class="text-2xl font-bold">Ready for a fast quote?</h3>
                    <p class="text-white/90">Text photos of the dent (2–3 angles) for quickest estimate.</p>
                </div>
                <div class="flex gap-3">
                    <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay || prettyPhone }}</a>
                    <NuxtLink to="/contact" class="btn-accent text-black">Request Estimate</NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '~/site.config'
import { useHead } from '#imports'

const prettyPhone = computed(() => {
    const digits = (siteConfig.phone || '').replace(/[^0-9]/g, '')
    if (digits.length === 11 && digits.startsWith('1')) return `(${digits.slice(1,4)}) ${digits.slice(4,7)}-${digits.slice(7)}`
    if (digits.length === 10) return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
    return siteConfig.phone
})

/** Service JSON-LD */
const ld = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Paintless Dent Repair (PDR)',
    provider: { '@type': 'LocalBusiness', name: siteConfig.siteName, telephone: siteConfig.phone, areaServed: ['Lakeland','St. Croix Valley','East Metro'] },
    serviceType: 'Automotive dent repair without paint',
    url: `${siteConfig.siteUrl}/paintless-dent-repair` // ← updated
}
useHead({ script: [{ type: 'application/ld+json', children: JSON.stringify(ld) }] })
</script>
