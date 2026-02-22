import React from "react";
import { FaCode, FaServer } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FcCollaboration } from "react-icons/fc";
import SocialMedia from "./SocialMedia.jsx";


const Erfahrung = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  // Sample experience data
  const experiences = [
    {
      id: 0,
      title: "Freiberuflicher Frontend-Entwickler",
      company: "bei Gestguinee | Exam224",
      icon: FaCode,
      color: "bg-blue-500",
      skills: [
        "Umsetzung von responsiven Web-Designs mit React und TailwindCSS",
        "Entwicklung und Wartung von UI-Komponenten",
        "Frontend-Performance-Optimierung",
        "Cross-Browser-Kompatibilität"
      ]
    },
    {
      id: 1,
      title: "Datenerfasser (Pilotprojekt)",
      company: "bei Wuri-Guinea",
      icon: FaServer,
      color: "bg-purple-500",
      skills: [
        "Schulung im Umgang mit digitalen Erfassungssystemen (Tablets, Software)",
        "Installation, Konfiguration und Administration von IT-Infrastrukturen",
        "Digitale Erfassung von Bevölkerungsdaten im Feld",
        "Arbeit mit strukturierten Datensätzen",
        "Beitrag zur Umsetzung eines nationalen Digitalisierungsprojekts"
      ]
    },
    {
      id: 2,
      title: "Softskills",
      company: "bei allen Projekten",
      icon: FcCollaboration,
      color: "bg-blue-900",
      skills: [
        "Kommunikation und Zusammenarbeit in interdisziplinären Teams",
        "Teamarbeit und Projektmanagement",
        "Bereitschaft zur kontinuierlichen Weiterbildung und Anpassung an neue Technologien",
        "Deutsche Sprachkenntnisse auf fortgeschrittenem Niveau",
        "Englischkenntnisse auf professionellem Niveau",
      ]
    },

  ];

  // Toggle expand/collapse of experience details
  const toggleExpand = (index) => {
    // If the clicked index is already expanded, collapse it; otherwise, expand the new index
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Render the experience section
  return (
    <section className="px-6 md:px-10 py-46   text-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Mein Werdegang</h1>
          <p className="text-gray-600 text-lg">Professionelle Erfahrung und Projekte</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-end text-2xl md:text-4xl">
            <SocialMedia />
          </div>

          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={exp.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-6 md:px-8 py-6 flex items-start gap-4 hover:bg-gray-50 transition-colors"
                >
                  {/* Icon */}
                  <div className={`${exp.color} w-14 h-14 rounded-lg flex items-center justify-center text-white shrink-0 mt-1`}>
                    <IconComponent className="text-2xl" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">{exp.company}</p>
                  </div>

                  {/* Arrow */}
                  <div className={`shrink-0 mt-1 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                    <IoIosArrowDown className="text-2xl text-gray-400" />
                  </div>
                </button>

                {/* Details */}
                {isExpanded && (
                  <div className="px-6 md:px-8 py-6 border-t border-gray-100 bg-gray-50">
                    <ul className="space-y-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start gap-3">
                          <span className={`${exp.color} w-2 h-2 rounded-full shrink-0 mt-2`}></span>
                          <span className="text-gray-700 text-sm md:text-base leading-relaxed">
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


    </section>
  );
};

export default Erfahrung;
