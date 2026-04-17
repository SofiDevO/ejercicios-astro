export const languages = {
    es: "Español",
    en: "English",
};

export const defaultLang = "es";

export const ui = {
    es:{
        logo:"Curso Astro",
        flagIcon: "cif:mx",
        flagUrl: "/en",
        title:"Curso de Astro: Ejercicios y Proyectos para Aprender a Crear Sitios Web Rápidos y Modernos",
        description:"Ejercicios del curso de astro de sofidev. Aprende a construir aplicaciones web modernas y de alto rendimiento con Astro, el framework de próxima generación para crear sitios estáticos y dinámicos.",
    },
    en:{
        logo:"Astro Course",
        flagIcon: "cif:us",
        flagUrl: "/",
        title:"Astro Course: Exercises and Projects to Learn How to Create Fast and Modern Websites",
        description:"Exercises from the Astro course by sofidev. Learn how to build modern, high-performance web applications with Astro, the next-generation framework for creating static and dynamic sites.",
    }
} as const;
