// nuxt.config.ts
export default defineNuxtConfig({
    // SSR + static output
    ssr: true,
    nitro: {
        preset: 'static',
        prerender: {
            crawlLinks: true,
            failOnError: false, // keep going even if some links/images 404 during crawl
            ignore: [
                '/_ipx/**',   // ignore IPX-transformed URLs
                '/privacy',   // add these pages later
                '/terms'
            ]
            // If you want to lock down to explicit pages only, set crawlLinks:false and add routes:[...]
        }
    },

    // <head> config for Acadia PDR
    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            title: 'Acadia PDR — Paintless Dent Repair & Detailing in Lakeland, MN',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content:
                        'Fast, high-quality paintless dent repair (PDR), hail repair, and detailing in Lakeland, MN. Mobile service and quick turnaround—preserve your OEM paint.'
                },
                { name: 'robots', content: 'index, follow' },

                /* Open Graph */
                { property: 'og:title',       content: 'Acadia PDR — Paintless Dent Repair & Detailing in Lakeland, MN' },
                { property: 'og:description', content: 'Fast, high-quality PDR, hail repair, and detailing in Lakeland, MN.' },
                { property: 'og:image',       content: 'https://www.acadiapdr.com/og-image.jpg' },
                { property: 'og:url',         content: 'https://www.acadiapdr.com' },
                { property: 'og:type',        content: 'website' },

                /* Twitter */
                { name: 'twitter:card',        content: 'summary_large_image' },
                { name: 'twitter:title',       content: 'Acadia PDR — Paintless Dent Repair & Detailing in Lakeland, MN' },
                { name: 'twitter:description', content: 'Fast, high-quality PDR, hail repair, and detailing in Lakeland, MN.' },
                { name: 'twitter:image',       content: 'https://www.acadiapdr.com/og-image.jpg' }
            ],
            link: [
                { rel: 'canonical', href: 'https://www.acadiapdr.com' },

                // Fonts (no @nuxtjs/google-fonts needed)
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700&display=swap'
                },

                // Favicon
                { rel: 'icon', type: 'image/png', href: '/favicon.png' }
            ],
            script: [
                /* Plausible Analytics (new domain) */
                {
                    src: 'https://plausible.io/js/script.js',
                    defer: true,
                    'data-domain': 'acadiapdr.com'
                },
                /* Google Tag Manager (head script) */
                {
                    type: 'text/javascript',
                    // Using "children" is Nuxt-friendly for inline script content
                    children: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WH87J4BK');
          `
                }
            ]
        }
    },

    // Nuxt Image (IPX)
    image: {
        provider: 'ipx',
        quality: 75,
        screens: { xs: 480, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 },
        formats: 'webp'
    },

    // Global CSS (your brand + utility classes live here)
    css: ['~/assets/main.css'],

    modules: [
        '@nuxt/image',
        '@nuxtjs/sitemap',
        '@nuxtjs/tailwindcss'
    ],

    tailwindcss: {
        cssPath: '~/assets/main.css',
        configPath: 'tailwind.config.js'
    },

    // Sitemap (module uses this for absolute URLs)
    site: {
        url: 'https://www.acadiapdr.com',
        name: 'acadia-pdr'
        // You can customize routes/exclude later if needed
    },

    // Compatibility date
    compatibilityDate: '2025-04-10'
})
