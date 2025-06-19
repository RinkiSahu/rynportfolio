const logo = "../src/assets/logo.png";
const port1 ="../src/assets/port1.png";
const port2 ="../src/assets/port2.png";
const port3 ="../src/assets/port3.png";
const bannerText =" Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire."

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];


  const expertise =[
    {
        heading:'Branding',
        description:"I create distinctive branding and web designs that captivate and inspire. I work with a variety of clients to create bespoke websites that are both functional and visually stunning.",

    },{
        heading:'UI Design',
        description:"I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
        heading:'UX Design',
        description:"I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements",
    },
    {
        heading:'Development',
        description:"I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.",
    }


  ]

 const workSection = [
    {   heading:'Analysis Application',
        imgSrc:"../src/assets/work1.png",
        description:"With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
        device1:"Figma",
        device2:"UX",
        caseLink:"#"
    },
    {   heading:'Fortknox Application',
        imgSrc:"../src/assets/work2.png",
        description:"With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
        device1:"Mobile",
        device2:"Web",
        caseLink:"#"
    },
    {   heading:'Zenocide Application',
        imgSrc:"../src/assets/work3.png",
        description:"With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
        device1:"App",
        device2:"Web",
        caseLink:"#"
    }
    ]

    const experienceSection = [
        {
            position:"Lead Product Designer",
            company:"Fortknox",
            duration:"Mar 2022 - Oct 2023"
        },
        {
            position:"Intern Designer",
            company:"OmniSafe",
            duration:"Mar 2022 - Oct 2023"
        },
        {
            position:"UI Designer",
            company:"Doradesign",
            duration:"Mar 2022 - Oct 2023"
        },
        {
            position:"Frontend Developer",
            company:"OpacityAuthor",
            duration:"Mar 2022 - Oct 2023"
        }


    ]


    const blogSection = [
        {
            date:
            "Nov 9, 2023",
            title:"How UX works in web",
            tech1:"UI",
            tech2:"UX",
            link:"#",
            imgSrc:"../src/assets/work1.png"
        },
        {
            date:
            "Aug 18, 2023",
            title:"Case study - Analysis Application.",
            tech1:"Design",
            tech2:"Print",
            link:"#",
            imgSrc:"../src/assets/work2.png"
        },
        {
            date:
            "Feb 16, 2023",
            title:"3 ways to develop your skill",
            tech1:"figma",
            tech2:"Web",
            link:"#",
            imgSrc:"../src/assets/work3.png"
        }
    ]


    const testimonials = [
        {
          name: "Floyd Miles",
          company: "eBay",
          image: "../src/assets/customer.png",
          quote:
            "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
        },
        {
          name: "Courtney Henry",
          company: "Spotify",
          image: "../src/assets/customer.png",
          quote:
            "Thanks to Synergy, I landed my dream job. The design and ease of use are unmatched.",
        },
      ];


    export {logo,port1, port2, port3, bannerText,navItems, expertise,workSection, experienceSection, blogSection, testimonials}
