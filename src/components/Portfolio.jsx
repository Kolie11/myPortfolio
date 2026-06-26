import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from '../LanguageContext';
import onlineCalculatorImg from '../assets/onlineCalculator.png';
import dateDiscoverImg from '../assets/DateDiscover.png';
import Reactportfolio from '../assets/Reactportfolio.png';
import tenziesGame from '../assets/tenziesGame.png';
import Hellium from '../assets/Hellium.png';
import Platform from '../assets/platform-design-2.png';
import Cat from '../assets/Cat.png';
import CountriesAPI from '../assets/CountriesAPI.png';
import cssGrid from '../assets/cssGrid.png';

const Portfolio = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        { id: "All", label: t("Alle", "All") },
        { id: "HTML/CSS", label: "HTML/CSS" },
        { id: "JavaScript", label: "JavaScript" },
        { id: "React", label: "React" },
        { id: "Design", label: "Design" }
    ];

    const projects = [
        {
            id: 1,
            title: "Tenzies Game",
            category: "React",
            description: t("Ein spannendes Spiel zum Üben von Reaktion und Strategie.", "An exciting game to practice reaction and strategy."),
            image: tenziesGame, 
            tech: ["React", "Tailwind CSS"],
            github: "https://github.com/dein-profil/projekt1",
            live: "https://tenzies-game-11.netlify.app/"
        },
        {
            id: 2,
            title: "Online-Rechner",
            category: "JavaScript",
            description: t("Online-Rechner mit vielen Funktionen.", "Online Calculator with many features."),
            image: onlineCalculatorImg,
            tech: ["JavaScript", "HTML", "CSS"],
            github: "https://kolie11.github.io/online-calculator/",
            live: "https://kolie11.github.io/online-calculator/"
        },
        {
            id: 3,
            title: "Tag-Könner",
            category: "JavaScript",
            description: t("Eine App um deinen Geburstag zu kennenzulernen.", "A app to learn your birthday."),
            image: dateDiscoverImg,
            tech: ["JavaScript", "HTML", "CSS"],
            github: "https://github.com/Kolie11/DayKnower1121",
            live: "https://day-knower1121.netlify.app/"
        },
        {
            id: 7,
            title: "CAT-API GALLERY",
            category: "JavaScript",
            description: t("Eine API für Katzenbilder.", "An API for cat images."),
            image: Cat,
            tech: ["JavaScript", "API"],
            github: "https://github.com/Kolie11/CatAPI",
            live: "https://cat-api1121.netlify.app/"
        },
        {
            id: 8,
            title: "Countries API",
            category: "React",
            description: t("Eine API für Länderinformationen.", "An API for country information."),
            image: CountriesAPI,
            tech: ["React", "API", "Axios", "CSS"],
            github: "https://github.com/Kolie11/countriesAPI-ReactJs",
            live: "https://react-countries-api-11.netlify.app/"
        },
        {
            id: 9,
            title: "CSS GRID",
            category: "HTML/CSS",
            description: t("CSS GRID.", "CSS GRID."),
            image: cssGrid,
            tech: ["HTML","CSS"],
            github: "https://github.com/Kolie11/GRID_CSS",
            live: "https://css-grid-project-11.netlify.app/"
        },
        {
            id: 4,
            title: "Heliium Pagewebsitedesign",
            category: "HTML/CSS",
            description: t("Vanilla JavaScript Projekt mit einem coolen Mouse Effect, inspiriert von Helium Page.", "Vanilla JavaScript project with a cool mouse effect, inspired by Helium Page."),
            image: Hellium,
            tech: ["HTML", "CSS", "Javascript"],
            github: "https://kolie11.github.io/mouse-effect-project/",
            live: "https://kolie11.github.io/mouse-effect-project/"
        },
        {
            id: 5,
            title: "Figma UI Kit Design",
            category: "Design",
            description: t("Ein komplettes UI/UX Design für eine mobile Applikation.", "A complete UI/UX design wireframe for a mobile application."),
            image: Platform,
            tech: ["Figma", "UI/UX", "Prototyping"],
            github: "#",
            live: "https://www.figma.com/design/Umf6GjIWpgRrp2Cqlcn7qn/platform?node-id=0-1&p=f&t=HBKuPJkmyAKUJoEF-0"
        },
        {
            id: 6,
            title: "Meine Portfolio Webseite",
            category: "React",
            description: t("Meine persönliche Portfolio-Webseite, erstellt mit React und CSS.", "My personal portfolio website built with React and CSS."),
            image: Reactportfolio,
            tech: ["React", "CSS"],
            github: "https://github.com/Kolie11/mein-portfolio",
            live: "https://mein-portfolio-dev.netlify.app"
        },

    ];

    const filteredProjects = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

    return (
        <section className="px-6 md:px-10 pt-48 pb-12 md:pt-36 text-slate-100 max-w-7xl mx-auto min-h-screen">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">{t("Meine Projekte", "My Projects")}</h1>
                <p className="text-slate-400 text-lg">{t("Entdecke einige meiner aktuellen Arbeiten und persönlichen Projekte.", "Discover some of my recent work and personal projects.")}</p>
            </div>

            <div className="flex justify-center gap-3 mb-10 flex-wrap">
                {categories.map(cat => (
                    <button 
                        key={cat.id} 
                        onClick={() => setActiveCategory(cat.id)} 
                        className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border shadow-sm ${activeCategory === cat.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-neutral-900 text-slate-400 border-neutral-700 hover:border-blue-500 hover:text-blue-500'}`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="bg-neutral-900 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-neutral-800 flex flex-col">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-contain bg-neutral-950 p-2 border-b border-neutral-800" />
                        <div className="p-6 flex flex-col grow">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-slate-400 mb-4 grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-blue-950 text-blue-200 text-xs font-bold rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-auto">
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 shadow-md">
                                    <FaExternalLinkAlt size={14} /> Demo
                                </a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-slate-100 hover:border-blue-500 hover:text-blue-500 text-slate-100 px-4 py-2 rounded-md transition duration-300 shadow-sm">
                                    <FaGithub size={16} /> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;