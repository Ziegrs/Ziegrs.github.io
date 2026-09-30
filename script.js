const translations={
  en:{navHome:"Home",
    navProjects:"Projects",
    navAbout:"About",
    navSkills:"Skills",
    navContact:"Contact",
    welcome:"Welcome to my portfolio",
    hello:"Hi, I'm",
    heroTitle:"I build things that matter.",
    heroDescription:"Computer Systems Engineering student exploring software development, cloud infrastructure and automation.",
    viewProjects:"View my projects",
    terminal:"building ideas into real projects",
    aboutKicker:"ABOUT",
    aboutTitle:"A little about me",
    aboutP1:"I'm a Computer Systems Engineering student in Mexico City. I enjoy learning by building: breaking things, understanding why they failed, and turning the result into something useful.",
    aboutP2:"I'm currently exploring Cloud/DevOps, networks, cybersecurity, Python and automation, with a focus on practical projects that can grow beyond the classroom.",
    projectsKicker:"PROJECTS",
    projectsTitle:"Things I've been building",
    featured:"FEATURED PROJECT",
    tanyaDescription:"A local desktop assistant built in Python with voice recognition, text-to-speech, wake-word detection, conversational AI and Windows automation.",
    inDevelopment:"In development",
    webProject:"WEB PROJECT",
    portfolioDescription:"This portfolio itself: a responsive, bilingual site built to practice frontend fundamentals, Git and deployment.",
    sourceCode:"Source code ↗",
    nextProject:"NEXT PROJECT",
    comingSoon:"Coming soon.",
    nextDescription:"The next project will focus on Python or Java and solve a real problem instead of existing only as a classroom exercise.",
    skillsKicker:"TECH STACK",
    skillsTitle:"What I'm working with",
    languages:"Languages",
    infra:"Infrastructure & systems",
    learning:"Currently learning",
    contactKicker:"CONTACT",
    contactTitle:"Let's build something.",
    contactText:"You can find my work and follow what I'm building on GitHub.",
    footer:"Built with curiosity and too much caffeine."},

  es:{navHome:"Inicio",
    navProjects:"Proyectos",
    navAbout:"Sobre mí",
    navSkills:"Habilidades",
    navContact:"Contacto",
    welcome:"Bienvenido a mi portafolio",
    hello:"Hola, soy",
    heroTitle:"Construyo cosas que importan.",
    heroDescription:"Estudiante de Ingeniería en Sistemas Computacionales explorando desarrollo de software, infraestructura cloud y automatización.",
    viewProjects:"Ver mis proyectos",
    terminal:"convirtiendo ideas en proyectos reales",
    aboutKicker:"SOBRE MÍ",
    aboutTitle:"Un poco sobre mí",
    aboutP1:"Soy estudiante de Ingeniería en Sistemas Computacionales en Ciudad de México. Me gusta aprender construyendo: romper cosas, entender por qué fallaron y convertir el resultado en algo útil.",
    aboutP2:"Actualmente exploro Cloud/DevOps, redes, ciberseguridad, Python y automatización, con enfoque en proyectos prácticos que puedan crecer más allá del salón de clases.",
    projectsKicker:"PROYECTOS",
    projectsTitle:"Cosas que he estado construyendo",
    featured:"PROYECTO DESTACADO",
    tanyaDescription:"Un asistente local de escritorio desarrollado en Python con reconocimiento de voz, texto a voz, detección de wake word, IA conversacional y automatización de Windows.",
    inDevelopment:"En desarrollo",
    webProject:"PROYECTO WEB",
    portfolioDescription:"Este mismo portafolio: un sitio responsive y bilingüe creado para practicar fundamentos de frontend, Git y despliegue.",
    sourceCode:"Código fuente ↗",
    nextProject:"SIGUIENTE PROYECTO",
    comingSoon:"Próximamente.",
    nextDescription:"El siguiente proyecto se enfocará en Python o Java y resolverá un problema real en lugar de existir solo como ejercicio escolar.",
    skillsKicker:"TECNOLOGÍAS",
    skillsTitle:"Con qué estoy trabajando",
    languages:"Lenguajes",
    infra:"Infraestructura y sistemas",
    learning:"Aprendiendo actualmente",
    contactKicker:"CONTACTO",
    contactTitle:"Construyamos algo.",
    contactText:"Puedes encontrar mi trabajo y seguir lo que estoy construyendo en GitHub.",
    footer:"Construido con curiosidad y demasiada cafeína."}
};
let language="en";
const toggle=document.querySelector("#langToggle");
function setLanguage(lang){
  language=lang;
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;
    if(translations[lang][key])el.textContent=translations[lang][key]})
      ;toggle.textContent=lang==="en"?"ES":"EN";
    localStorage.setItem("language",lang)
  }
toggle.addEventListener("click",()=>setLanguage(language==="en"?"es":"en"));
document.querySelector("#year").textContent=new Date().getFullYear();
const saved=localStorage.getItem("language");if(saved&&translations[saved])setLanguage(saved);
