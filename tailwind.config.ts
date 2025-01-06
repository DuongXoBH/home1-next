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
        "custom-pink": "#FF64AE",
        "patrick-blue" : "#172176"
      },
      backgroundImage: {
        'header-backround': "url('/images/background-banner.svg')",
        'about-us-background': "url(/images/backgroundbubble.png)",
        'contact-us-background' : "url(/images/backgroundbubblecontactus.png)",
        'footer-background' : "url(/images/site-footer.svg)",
        'professional-team-backgound' : "url(/about-us-images/professional-team-bg.svg)",
        'business-slogan-background'  : "url(/about-us-images/business-slogan-bg.svg)",
        'bubble-1-background' : "url(/about-us-images/bubble-1.svg)",
        'bubble-2-background' : "url(/about-us-images/bubble-2.svg)",
        'about-background' : "url(/about-us-images/about-banner.png)"
      },
      boxShadow: {
        'custom-professional-team': '0px 25px 50px 25px rgba(246, 247, 255, 1)',
      },
      listStyleImage :{
        'footer-list-icon': "url(/images/vector.svg)"
      }, 
      scrollBehavior: ['smooth'],
      container :{
        // padding: {
        //   DEFAULT: '1rem',
        //   sm: '2rem',
        //   lg: '4rem',
        //   xl: '5rem',
        //   '2xl': '6rem',
        // },
        center : true,
        screens:{
          "xl" : "1140px"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
