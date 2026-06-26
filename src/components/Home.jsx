import React from "react";
import SocialMedia from "./SocialMedia";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="px-10 py-10 mt-32 text-slate-100">
      <div>
        <h1 className="text-md my-10 md:text-2xl mb-0">👋 {t("Hallo, ich bin", "Hi, I am")}</h1>
        <p className="text-md md:text-lg text-justify">
          <strong className=" text-xl md:text-3xl">
            {t("ein Frontend-Webentwickler.", "a Frontend Web Developer.")}
          </strong>
          <br /><br />
          {t("Ich schreibe sauberen Code und gestalte pixelgenaue Designs.", "I write clean code and craft pixel-perfect designs.")}
          <br />
          {t("Außerdem mache ich Webseiten durch Web-Animationen interaktiver und ansprechender.", "Additionally, I make websites more interactive and engaging with web animations.")}
          <br />
          <br />
          {t("Ich habe einen Bachelorabschluss-Ingenieurwesen (in Deutschland anerkannt durch ZAB), was mir ein solides technisches Fundament sowie ein gutes Verständnis für komplexe Systeme und Netzwerke vermittelt hat.", "I hold a Bachelor's degree in Engineering (recognized in Germany by ZAB), providing me with a solid technical foundation and a strong understanding of complex systems and networks.")}
          <br />
          <br />
          {t("Mit Leidenschaft für Webtechnologien baue ich gerne schöne und funktionale Benutzeroberflächen sowohl mit kreativem Design als auch mit sauberem Code. Zurzeit konzentriere ich mich auf moderne Frontend-Technologien wie", "Passionate about web technologies, I love building beautiful and functional user interfaces with both creative design and clean code. Currently, I am focusing on modern frontend technologies like")}
          {" "}
          <strong className="font-bold md:font-extrabold">
            React, JavaScript(ES6+) und Tailwind CSS
          </strong>{" "}
          {t("und entwickle reale Projekte, um mich täglich zu verbessern.", "and building real-world projects to improve daily.")}
          <br />
          <br />
          {t("Ich habe außerdem Erfahrung mit", "I also have experience with")}
          {" "}
          <strong className="font-bold md:font-extrabold">
            Git, Figma, Responsive Design {t("und arbeite an der Anbindung von APIs.", "and working on connecting APIs.")}
          </strong>{" "}
          <br /> <br />
          {t("Neugierig, autodidaktisch und immer bereit zu lernen und zu wachsen als Entwickler und mein Ziel ist es, digitale Lösungen zu schaffen, die intuitiv, schnell und zugänglich sind.", "Curious, self-taught, and always ready to learn and grow as a developer, my goal is to create digital solutions that are intuitive, fast, and accessible.")}
        </p>
      </div>

      <div className="flex gap-4 my-6 ">
        <Link to="/kontakt" className="font-bold bg-blue-600 hover:bg-blue-700 p-2 px-4 rounded-md shadow-lg transition duration-300 text-white">
          Hire me
        </Link>
        <div className="flex justify-center items-center fixed left-10 top-32 ">
          <SocialMedia />
        </div>

      </div>

    </main>
  );
}
