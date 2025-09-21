<template>
    <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl md:text-5xl font-bold mb-16 text-center">
                Full-Service Dent Repair & Detailing
            </h2>

            <div class="grid gap-12 md:grid-cols-2">
                <NuxtLink to="/paintless-dent-repair" class="block hover:no-underline">
                    <ServiceCard
                        title="Paintless Dent Repair (PDR)"
                        :items="[
              'Door dings, creases, small collision dents',
              'No repainting — preserve OEM finish',
              'Same-day on many single-panel jobs'
            ]"
                    />
                </NuxtLink>

                <NuxtLink to="/hail-repair" class="block hover:no-underline">
                    <ServiceCard
                        title="Hail Damage Repair"
                        :items="[
              'Insurance-friendly estimating',
              'Panel-by-panel restoration',
              'Keeps CarFax clean'
            ]"
                    />
                </NuxtLink>

                <NuxtLink to="/detailing" class="block hover:no-underline">
                    <ServiceCard
                        title="Detailing & Scratch Removal"
                        :items="[
              'Interior & exterior packages',
              'Scratch / scuff buffing',
              'Finish refinement'
            ]"
                    />
                </NuxtLink>

                <NuxtLink to="/ceramic-coating" class="block hover:no-underline">
                    <ServiceCard
                        title="Ceramic Coating"
                        :items="[
              'Long-lasting protection & gloss',
              'Easier washes, hydrophobic beading',
              'Available after PDR or detailing'
            ]"
                    />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/ServiceCard.vue'
</script>
