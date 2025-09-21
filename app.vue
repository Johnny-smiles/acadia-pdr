<template>
    <div>
        <!-- Google Tag Manager (noscript): wrapped to avoid SSR hydration mismatch -->
        <ClientOnly>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-WH87J4BK"
                    height="0"
                    width="0"
                    style="display:none;visibility:hidden"
                ></iframe>
            </noscript>
        </ClientOnly>

        <NavBar />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
</script>
