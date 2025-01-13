import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-navy": "#414880",
        "custom-gray": "#8B8B8B",
        "oxford-blue": "#091156",
        "custom-pink": "#FF64AE",
        "patrick-blue" : "#172176",
        "custom-service-slogan" : "rgba(9, 17, 86, 0.6)",
        "custom-faq" : "rgba(246, 247, 255, 1)",
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
        'about-background' : "url(/about-us-images/about-banner.png)",
        'service-slogan-background' : "url(/service-images/slogan.svg)",
        'service-background': "url(/service-images/service-background.svg",
        'gallery-banner-background' : "url(/gallery-images/gallery-banner.svg)",
        'gallery-bubble-background' : "url(/gallery-images/background-bubble.svg)",
        'team-bubble-background' : "url(/team-images/team-bubble.svg)",
        'team-background' : "url(/team-images/team-bg.svg)",
        'slider-background' : "url(/team-images/element-background.svg)",
        'blog-banner-background' : "url(/blog-images/blog-banner.svg)",
        'contact-backgound' : "url(/contact-images/contact-background.svg)",
      },
      boxShadow: {
        'custom-professional-team': '0px 25px 50px 25px rgba(246, 247, 255, 1)',
      },
      listStyleImage :{
        'footer-list-icon': "url(/images/vector.svg)"
      }, 
      scrollBehavior: ['smooth'],
      container :{
        center : true,
        screens:{
          "xl" : "1140px"
        }
      },
      
    },
  },
  plugins: [],
} satisfies Config;
