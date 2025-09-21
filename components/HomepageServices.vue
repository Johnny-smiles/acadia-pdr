<template>
    <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto px-6">
            <!-- four-wide grid on lg, two-wide on md, single on mobile -->
            <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <NuxtLink to="/paintless-dent-repair">
                        <ServiceCardSimple
                            title="Paintless Dent Repair"
                            description="Door dings, creases, and small collisions—no repainting."
                        />
                    </NuxtLink>
                </div>

                <div>
                    <NuxtLink to="/hail-repair">
                        <ServiceCardSimple
                            title="Hail Repair"
                            description="Insurance-friendly estimates and panel-by-panel correction."
                        />
                    </NuxtLink>
                </div>

                <div>
                    <NuxtLink to="/detailing">
                        <ServiceCardSimple
                            title="Detailing"
                            description="Interior & exterior detailing, scratch/scuff removal."
                        />
                    </NuxtLink>
                </div>

                <div>
                    <NuxtLink to="/ceramic-coating">
                        <ServiceCardSimple
                            title="Ceramic Coating"
                            description="Long-lasting protection and gloss for your finish."
                        />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ServiceCardSimple from '~/components/ServiceCardSimple.vue'
</script>
