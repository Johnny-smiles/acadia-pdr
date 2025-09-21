// site.config.ts
export const siteConfig = {
    siteName: "Acadia PDR",
    siteUrl: "https://www.acadiapdr.com",

    // Contact
    phone: "+1-763-443-9119",            // E.164 for tel: links
    phoneDisplay: "(763) 443-9119",      // Pretty display
    email: "info@acadiapdr.com",

    // Location
    location: {
        street: "404 St Croix Trail N",
        city: "Lakeland",
        state: "MN",
        zip: "55043",
        country: "US",
        latitude: "",    // optional
        longitude: ""    // optional
    },

    // Business meta
    description:
        "Fast, high-quality paintless dent repair (PDR), hail repair, and detailing in Lakeland, MN. Mobile service and quick turnaround—preserve your OEM paint.",
    hours: "Mo-Fr 08:00-18:00, Sa 09:00-14:00",

    // Assets
    socialImage: "/og-image.jpg",
    favicon: "/favicon.png",

    // Theme
    theme: {
        primaryColor:  "#0f8f93",  // teal
        secondaryColor:"#f5f7f9",  // light bg
        accentColor:   "#ffd166",  // warm CTA
        fontFamily:    ["Inter", "system-ui", "sans-serif"],
        borderRadius:  "0.75rem"
    },

    // Hero copy (used in Index sections below if you want to bind it)
    hero: {
        eyebrow: "Acadia PDR • Lakeland, MN",
        headline: "Paintless Dent Repair — Fast, Clean, and Mobile",
        subheadline:
            "Hail, dings, door dents, and creases removed without repainting. We come to you, or drop off in Lakeland.",
        ctaPrimaryLabel: "Call for Estimate",
        ctaSecondaryLabel: "Get a Free Quote"
    },

    // Services summary (HomepageServices already handles grid; this supports extra sections on index)
    services: [
        {
            title: "Paintless Dent Repair",
            blurb: "Door dings, creases, and small collisions corrected without repainting.",
            bullets: ["Mobile or drop-off", "Same-day on many jobs", "Preserve OEM paint"]
        },
        {
            title: "Hail Repair",
            blurb: "Insurance-friendly estimates and panel-by-panel hail dent removal.",
            bullets: ["Work with your insurer", "Multi-panel correction", "Keep CarFax clean"]
        },
        {
            title: "Detailing & Add-ons",
            blurb: "Interior/exterior detailing, scratch/scuff removal, ceramic coating.",
            bullets: ["Express & full detail", "Scratch buffing", "Ceramic protection"]
        }
    ],

    // Why choose us
    valueProps: [
        { title: "OEM Paint Preserved", text: "No filler. No repaint. Just clean metalwork." },
        { title: "Mobile Service",      text: "We can come to you for minor work or schedule drop-off." },
        { title: "Insurance Friendly",  text: "Streamlined estimates and coordination on hail events." }
    ],

    // Reviews (simple placeholders; replace with real quotes when ready)
    reviews: [
        { name: "Sarah M.", text: "Flawless result. You can’t tell there was a dent at all." },
        { name: "Daniel K.", text: "Fast mobile repair at my office. Super convenient." },
        { name: "Alyssa R.", text: "Handled hail damage quickly and worked with my insurer." }
    ],

    // FAQs
    faqs: [
        {
            q: "How long does PDR take?",
            a: "Small dings can be done in hours. Multi-panel hail can take longer depending on severity."
        },
        {
            q: "Do you repaint?",
            a: "No. PDR preserves the OEM paint by massaging the dent from behind the panel."
        },
        {
            q: "Can I text photos for an estimate?",
            a: "Yes—text a few angles and include year/make/model for the quickest quote."
        }
    ],

    // Service areas
    serviceAreas: [
        "Lakeland", "St. Croix Valley", "Hudson", "Woodbury", "Stillwater", "East Metro", "Twin Cities"
    ],

    // Social links (optional)
    social: {
        nextdoor: "https://nextdoor.com/pages/acadia-lakeland-mn/",
        facebook: "https://www.facebook.com/p/Acadia-PDR-61551201595417/",
        yelp: "https://www.yelp.com/biz/acadia-pdr-lakeland-2"
    }
}
