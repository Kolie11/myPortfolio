import React from "react";
import myImg from "../assets/mathCart.jpg";
import figma from "../assets/figma.png";
import psLogo from "../assets/ps.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.jpg";
import css from "../assets/css.png";
import seo from "../assets/seo.png";
import SocialMedia from "./SocialMedia";
import { useLanguage } from "../LanguageContext";

import myCV from "../assets/FM-Lebenslauf.pdf";

export default function Übermich() {
  const { t } = useLanguage();
  // This component provides an overview of the developer's background, skills, and approach to web development. It emphasizes the combination of design and functionality, with a focus on React and Tailwind CSS. The section also includes a call-to-action for downloading the resume and browsing the developer's work.
  return (
    <section className="px-10 py-10 mt-32 text-slate-100">
      <div className="mt-6 flex md:flex justify-center items-center flex-col">
        <img
          src={myImg}
          alt="My own image"
          className="border-4 w-48 h-48 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold p-3 bg-neutral-900 rounded shadow-sm border border-neutral-800 mt-4 border-l-4 border-l-blue-600 text-center">
          {t("Logik trifft auf Kreativität", "Logic meets Creativity")}
        </h1>
      </div>

      <div className="  p-6 rounded-md ">
        <h1 className=" text-xl md:text-4xl text-center mb-8 font-bold text-blue-500">
          {t("Was macht mich besonders?", "What makes me different?")}
        </h1>
        <p className="text-center text-md md:text-xl text-slate-400">
          {t("Ich verbinde Design und Funktionalität, um wirkungsvolle Lösungen zu schaffen.", "I combine design and functionality to create impactful solutions.")} {t("Mein Fokus liegt auf", "My focus is on")}{" "}
          <span className="text-white font-bold">React</span> und{" "}
          <span className="text-white font-bold">Tailwind CSS</span>, {t("um Ideen in die Realität umzusetzen.", "to turn ideas into reality.")} {t("Dabei ist mir nicht nur wichtig, dass es funktioniert, sondern dass der Code", "It is not only important to me that it works, but that the code is")}{" "}
          <span className="italic ">{t("sauber", "clean")}</span> {t("und die User Experience", "and the User Experience is")}{" "}
          <span className="italic ">{t("außergewöhnlich", "exceptional")}</span>{" "}
          {t("ist.", "")}
          <br />
          <br />
          {t("Ich absolviere derzeit einen Master in Mensch-Technik-Interaktion.", "I am currently pursuing a Master's degree in Human-Computer Interaction.")}
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href={myCV}
            download="F_Mathias_Lebenslauf.pdf"
            className="text-md text-center bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-md transition duration-300 shadow-md text-white"
          >
            {t("Lebenslauf herunterladen", "Download resume")}
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 p-6 rounded-xl shadow-lg border border-neutral-800 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <h2 className="text-xl md:text-2xl font-bold mb-2">UI/UX Design</h2>
            <p className="text-md text-slate-400 grow">
              {t("Ich gestalte intuitive und ästhetisch ansprechende Benutzeroberflächen, die das Nutzererlebnis verbessern und die Markenidentität widerspiegeln.", "I design intuitive and aesthetically pleasing user interfaces that enhance the user experience and reflect the brand identity.")}
            </p>

            <div className="flex gap-2.5 mt-4">
              <img
                src={figma}
                alt="Figma Logo"
                className="w-8 h-8 object-cover rounded-full "
              />
              <img
                src={psLogo}
                alt="Photoshop Logo"
                className="w-8 h-8 object-cover rounded-full "
              />
            </div>
          </div>

          <div className="bg-neutral-900 p-6 rounded-xl shadow-lg border border-neutral-800 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              {t("Webentwicklung", "Web Development")}
            </h2>
            <p className="text-md text-slate-400 grow">
              {t("Ich entwickle responsive und leistungsstarke Webseiten mit modernen Webtechnologien für Skalierbarkeit und optimale Funktionalität.", "I build responsive and high-performance websites using modern web technologies for scalability and optimal functionality.")}
            </p>
            <div className="flex gap-2.5 mt-4">
              <img
                src={html}
                alt="HTML Logo"
                className="w-8 h-8 object-cover rounded-full "
              />
              <img
                src={css}
                alt="CSS Logo"
                className="w-8 h-8 object-cover rounded-full "
              />
              <img
                src={js}
                alt="JavaScript Logo"
                className="w-8 h-8 object-cover rounded-full "
              />
              <img
                src={react}
                alt="React Logo"
                className="w-8 h-8 object-cover rounded-full "
              />
              <img
                src={tailwind}
                alt="Tailwind CSS Logo"
                className="w-8 h-8 object-cover rounded-full "
              />
            </div>
          </div>

          <div className="bg-neutral-900 p-6 rounded-xl shadow-lg border border-neutral-800 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              SEO-Optimierung
            </h2>
            <p className="text-md text-slate-400 grow">
              {t("Ich optimiere Webseiten für Suchmaschinen, um die Sichtbarkeit zu erhöhen, organischen Traffic zu steigern und die Gesamtleistung zu verbessern.", "I optimize websites for search engines to increase visibility, drive organic traffic, and improve overall performance.")}
            </p>
            <div className="flex gap-2.5 mt-4">
              <img
                src={seo}
                alt="SEO Logo"
                className="w-8 h-8 object-cover rounded-full "
              />
            </div>
          </div>

          <div className="flex justify-center items-center fixed left-10 top-32 ">
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
}
