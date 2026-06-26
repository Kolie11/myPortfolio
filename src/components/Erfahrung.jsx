import React from "react";
import { FaCode, FaServer } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FcCollaboration } from "react-icons/fc";
import SocialMedia from "./SocialMedia.jsx";
import { useLanguage } from "../LanguageContext";


const Erfahrung = () => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  // Beispieldaten für Erfahrungen
  const experiences = [
    {
      id: 0,
      title: t("Praktikant Frontend-Entwicklung", "Frontend Development Intern"),
      company: t("Think3DDD | Mai 2026 - Heute", "Think3DDD | May 2026 - Present"),
      icon: FaCode,
      color: "bg-blue-600",
      skills: [
        t("Entwicklung moderner Schnittstellen und Benutzeroberflächen.", "Development of modern interfaces and user interfaces."),
        t("Optimierung der UX/UI Elemente", "Optimization of UX/UI elements."),
        t("Aktive Mitarbeit im Team an innovativen technischen Lösungen", "Active participation in the team on innovative technical solutions.")
      ]
    },
    {
      id: 1,
      title: t("Freiberuflicher Frontend-Entwickler", "Freelance Frontend Developer"),
      company: t("Gestguinee & Exam224 | Jan. 2024 - Dez. 2025", "Gestguinee & Exam224 | Jan. 2024 - Dec. 2025"),
      icon: FaCode,
      color: "bg-blue-500",
      skills: [
        t("Entwicklung responsiver und interaktiver Weboberflächen mit React und TailwindCSS", "Development of responsive and interactive web interfaces with React and Tailwind CSS."),
        t("Verbesserung der Benutzererfahrung (UX) durch strukturiertes UI-Design", "Improvement of user experience (UX) through structured UI design."),
        t("Zusammenarbeit mit Kunden zur Anforderungsanalyse", "Collaboration with clients for requirements analysis.")
      ]
    },
    {
      id: 2,
      title: t("IT-Techniker & Bankkassierer", "IT Technician & Bank Teller"),
      company: t("BSIC | Feb. 2019 - Jan. 2021", "BSIC | Feb. 2019 - Jan. 2021"),
      icon: FaServer,
      color: "bg-blue-800",
      skills: [
        t("Kundenbetreuung und sichere Abwicklung von Kassentransaktionen", "Customer support and secure processing of cash transactions."),
        t("Installation und Wartung der IT-Infrastruktur", "Installation and maintenance of IT infrastructure.")
      ]
    },
    {
      id: 3,
      title: t("Praktikant Datenerfassung", "Data Entry Intern"),
      company: t("Search for Common Ground | Nov. 2018 - Dez. 2018", "Search for Common Ground | Nov. 2018 - Dec. 2018"),
      icon: FcCollaboration,
      color: "bg-blue-600",
      skills: [
        t("Feldarbeit zur Datenerhebung mittels mobiler Applikationen in ländlichen Regionen", "Fieldwork for data collection using mobile applications in rural regions."),
        t("Aufbereitung und Bereitstellung der erfassten Datensätze für Analyseteams.", "Preparation and provisioning of collected datasets for analysis teams.")
      ]
    }
  ];

  // Erfahrung-Details auf-/zuklappen
  const toggleExpand = (index) => {
    // Wenn der angeklickte Index bereits erweitert ist, einklappen; andernfalls den neuen Index erweitern
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Rendern der Erfahrungs-Sektion
  return (
    <section className="px-6 md:px-10 pt-48 pb-12 md:pt-36 text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-blue-500">{t("Mein Werdegang", "My Journey")}</h1>
          <p className="text-slate-400 text-lg">{t("Professionelle Erfahrung und Projekte", "Professional Experience and Skills")}</p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={exp.id}
                className="bg-neutral-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-neutral-800"
              >
                {/* Header */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-6 md:px-8 py-6 flex items-start gap-4 hover:bg-neutral-800 transition-colors"
                >
                  {/* Icon */}
                  <div className={`${exp.color} w-14 h-14 rounded-lg flex items-center justify-center text-white shrink-0 mt-1`}>
                    <IconComponent className="text-2xl" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">
                      {exp.title}
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base">{exp.company}</p>
                  </div>

                  {/* Arrow */}
                  <div className={`shrink-0 mt-1 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                    <IoIosArrowDown className="text-2xl text-neutral-500" />
                  </div>
                </button>

                {/* Details */}
                {isExpanded && (
                  <div className="px-6 md:px-8 py-6 border-t border-neutral-800 bg-neutral-950">
                    <ul className="space-y-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start gap-3">
                          <span className={`${exp.color} w-2 h-2 rounded-full shrink-0 mt-2`}></span>
                          <span className="text-slate-300 text-sm md:text-base leading-relaxed">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center fixed left-10 top-32 ">
        <SocialMedia />
      </div>
    </section>
  );
};

export default Erfahrung;
