import petro from '../../asset/img/petro.png'
import kanoon from '../../asset/img/kanoon-ghalamchi-site.webp'
import toptis from '../../asset/img/touristpanel.webp'
import click from '../../asset/img/3click.png'

// External logo URLs
const tosanLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnIPRYC6XrnaPXSltPAJhfPNGpzQQAVDg-g&s";
const tipaxLogo = "https://tipaxco.com/wp-content/uploads/2021/10/logo.png";

const exList = [
    {
        compony: "Mabna Intelligent Computing (Amirkabir University)",
        img: petro,
        city: "Tehran, Iran",
        position: "Frontend Developer",
        skil: ["react", "redux-toolkit", "mui", "typescript"],
        date: "March 2021 - July 2022",
        describe: "Developed a web application using React for transportation and petrochemical industry use cases. Designed and built a custom file uploader supporting multiple formats (images, PDF, Word) with upload and preview capabilities, improving usability and system efficiency.",
        link: "http://petronapp.ir/"
    },
    {
        compony: "Kanoon Ghalamchi Educational Platform",
        img: kanoon,
        city: "Tehran, Iran",
        position: "Frontend Developer",
        skil: ["react", "redux", "css", "javascript"],
        date: "September 2022 - April 2023",
        describe: "Developed and enhanced the school website and management panel using React. Focused on improving user interface and admin functionalities, ensuring smooth integration with backend services and optimizing the platform for better performance and scalability.",
        link: "https://www.kanoon.ir/"
    },
    {
        compony: "TopTours Custom CMS Platform",
        img: toptis,
        city: "Tehran, Iran",
        position: "Full-stack Developer",
        skil: ["react", "typescript", "c#", "blazor server"],
        date: "February 2023 - February 2024",
        describe: "Inspired by WordPress Elementor, researched and implemented a dynamic front-end builder interface using React, integrated with a Blazor Server admin panel. Contributed to both front-end and back-end development, focusing on seamless interaction between the user interface and server, enabling users to drag and drop components to design their websites easily.",
        link: "https://app.touristpanel.ir"
    },
    {
        compony: "3click (Deltaban)",
        img: click,
        city: "Tehran, Iran",
        position: "Frontend Developer",
        skil: ["vue", "nuxt", "typescript", "javascript"],
        date: "March 2024 - June 2025",
        describe: "Developed and maintained web applications using Vue.js and Nuxt, including migration from Nuxt 2 to Nuxt 3. Researched modern frontend architectures and implemented performance and SEO improvements.",
        link: "https://3click.com"
    },
    {
        compony: "Refah Barcode Scanner Application (Tosan Techno)",
        img: tosanLogo,
        city: "Tehran, Iran",
        position: "Senior Frontend Developer",
        skil: ["react", "typescript", "websocket", "real-time"],
        date: "March 2025 - Present",
        describe: "Developed the frontend of a barcode scanner application for Refah retail stores using React. Researched and implemented real-time communication between barcode scanners, POS devices, and payment systems.",
        link: "https://www.tosantechno.com"
    },
    {
        compony: "Tipax Representatives Management Panel",
        img: tipaxLogo,
        city: "Tehran, Iran",
        position: "Frontend Team Lead",
        skil: ["react", "typescript", "mui", "state-management"],
        date: "August 2025 - Present",
        describe: "Led the frontend team in designing and developing the Tipax Representatives Management Panel using React, TypeScript, and Material UI. Defined architecture, implemented reusable components, and established state management patterns to improve performance and maintainability.",
        link: "https://tipaxco.com/"
    },
]

export default exList
