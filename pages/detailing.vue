<template>
    <main class="bg-white">
        <section class="bg-brand-gradient text-white py-16">
            <div class="max-w-7xl mx-auto px-6">
                <h1 class="text-4xl md:text-5xl font-bold">Detailing & Scratch Removal</h1>
                <p class="mt-3 text-white/90 max-w-2xl">
                    Interior & exterior packages with paint refinement and light scratch/scuff correction.
                </p>
                <div class="mt-6 flex flex-wrap gap-3">
                    <a :href="`tel:${siteConfig.phone}`" class="btn-primary">Call {{ siteConfig.phoneDisplay || prettyPhone }}</a>
                    <NuxtLink to="/contact" class="btn-accent text-black">Book a Detail</NuxtLink>
                </div>
            </div>
        </section>

        <section class="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-start">
            <div>
                <h2 class="text-2xl md:text-3xl font-bold">Packages That Fit Your Schedule</h2>
                <p class="mt-4 text-neutral-700">
                    From quick refreshes to full details, we tailor the package to your vehicle’s condition and your timeline.
                </p>
                <ul class="mt-6 space-y-2 text-neutral-700">
                    <li>• Express &amp; full interior/exterior options</li>
                    <li>• Light scratch &amp; scuff buffing</li>
                    <li>• Optional ceramic coating</li>
                </ul>
            </div>
            <div class="rounded-xl overflow-hidden shadow-md">
                <NuxtImg src="/detailing-example.jpg" alt="Detailing" class="w-full h-72 md:h-[22rem] object-cover"/>
            </div>
        </section>

        <section id="detailing" class="max-w-7xl mx-auto px-6 pb-20">
            <h3 class="text-xl md:text-2xl font-semibold">What’s Included</h3>
            <div class="grid md:grid-cols-3 gap-6 mt-6">
                <div class="card-box">Interior vacuum & wipe-down</div>
                <div class="card-box">Exterior wash & decontamination</div>
                <div class="card-box">Machine polish (package-dependent)</div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '~/site.config'
import { useHead } from '#imports'

const prettyPhone = computed(() => {
    const d = (siteConfig.phone || '').replace(/[^0-9]/g, '')
    if (d.length === 11 && d.startsWith('1')) return `(${d.slice(1,4)}) ${d.slice(4,7)}-${d.slice(7)}`
    if (d.length === 10) return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`
    return siteConfig.phone
})

const ld = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Detailing & Scratch Removal',
    provider: { '@type': 'LocalBusiness', name: siteConfig.siteName, telephone: siteConfig.phone, areaServed: ['Lakeland','St. Croix Valley','East Metro'] },
    serviceType: 'Automotive detailing and light scratch removal',
    url: `${siteConfig.siteUrl}/detailing`
}
useHead({ script: [{ type: 'application/ld+json', children: JSON.stringify(ld) }] })
</script>
