import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-navy": "#414880",
        "custom-gray": "#8B8B8B",
        "oxford-blue": "#091156",
        "custom-pink": "#FF64AE"
      },
      backgroundImage: {
        'header-backround': "url('/images/background-banner.svg')",
        'about-us-background': "url(/images/backgroundbubble.png)",
        'contact-us-background' : "url(/images/backgroundbubblecontactus.png)",
        'footer-background' : "url(/images/site-footer.svg)"
      },
      boxShadow: {
        'custom-professional-team': '0px 25px 50px 25px rgba(246, 247, 255, 1)',
      },
      listStyleImage :{
        'footer-list-icon': "url(/images/vector.svg)"
      }, 
      scrollBehavior: ['smooth'],
    },
  },
  plugins: [],
} satisfies Config;
