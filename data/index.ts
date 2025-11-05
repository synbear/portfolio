export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a full-stack Event Management Platform - powered by NextJS",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-auto text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Ahmed’s creativity and attention to detail transformed our vision into a compelling digital experience. His approach to design and development is both strategic and refined, making collaboration effortless and results-driven. Highly recommended for anyone seeking a true professional.",
    name: "Maarij",
    title: "Director of Pluto Media",
  },
  {
    quote:
      "Ahmed demonstrated outstanding leadership while guiding our team through a complex project. His ability to coordinate effectively, provide direction, and maintain high standards of quality was impressive. The final product reflected not only technical excellence but also his ability to bring people together toward a common goal.",
    name: "Muhammad",
    title: "CEO of Financial Regulation Courses",
  },
  {
    quote:
      "Our partnership with Ahmed was a turning point for our digital presence. He approached every stage with precision and clarity, ensuring that both design and performance met modern standards. His professionalism and technical insight set him apart from others we’ve worked with.",
    name: "Kamran",
    title: "CEO of DigitalSphere360",
  },
  {
    quote:
      "Ahmed’s technical expertise and clear communication were instrumental in delivering a polished, reliable solution for our systems. His structured workflow and commitment to excellence reflected a deep understanding of both technology and business needs.",
    name: "Nicholas",
    title: "CFO of Oracle Power",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Tech Lead / Full Stack Developer — Financial Regulation Courses (UK)",
    desc: "Spearheaded the modernization of the FRC website by migrating the frontend to React.js, boosting performance and user experience by 40%. Built and maintained a scalable LAMP stack with optimized PHP APIs, improving reliability by 25%. Directed a remote cross-functional team to meet all project milestones, increasing team productivity by 50%. Implemented CI/CD pipelines on AWS EC2 with load balancing, cutting server response time by 60%.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer — Oliv (under Linkstar, Dubai)",
    desc: "Developed responsive, user-focused web interfaces using Next.js, leading to a 25% improvement in user retention. Enhanced back-end performance through PHP and API optimization, achieving a 35% speed gain. Conducted in-depth security testing, resolving 30+ vulnerabilities and ensuring full compliance with industry standards. Mentored interns, fostering skill growth and boosting team efficiency by 30%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer — Linkstar (Karachi, Pakistan)",
    desc: "Collaborated with the frontend lead to troubleshoot and enhance Next.js and Node.js applications, improving overall UX by 40%. Optimized backend performance and fixed critical bugs, improving system stability by 25%. Implemented performance enhancements that reduced page load times by 30% and introduced structured testing procedures that cut post-deployment issues by half.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance Full Stack Developer — Self-Employed",
    desc: "Delivered more than 30 professional websites and web applications for international clients, spanning industries from education to media and e-commerce. Specialized in building custom WordPress stacks, Shopify stores, and modern React.js/Next.js applications with seamless API integrations. Developed secure payment systems, optimized SEO and performance, and provided long-term maintenance support — achieving a 100% project delivery rate and strong client retention.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];