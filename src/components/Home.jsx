import React from "react";

export default function Home() {





  return (
    <main className="px-10 py-10 mt-30 text-black">
      <div>
        <h1 className="text-md my-10 md:text-2xl  mb-0">👋Hallo ich bin,</h1>
        <p className="text-md md:text-lg text-justify">
          <strong className=" text-xl md:text-3xl">
            ein Frontend-Webentwickler.
          </strong>
          <br />
          <br /> Ich schreibe sauberen Code und gestalte pixelgenaue Designs.
          <br /> Außerdem mache ich Webseiten durch Web-Animationen interaktiver
          und ansprechender.
          <br />
          <br />
          Ich habe einen Bachelorabschluss-Ingenieurwesen (in Deutschland
          anerkannt durch ZAB), was mir ein solides technisches Fundament sowie
          ein gutes Verständnis für komplexe Systeme und Netzwerke vermittelt
          hat. <br />
          <br />
          Mit Leidenschaft für Webtechnologien baue ich gerne schöne und
          funktionale Benutzeroberflächen sowohl mit kreativem Design als auch
          mit sauberem Code. Zurzeit konzentriere ich mich auf moderne
          Frontend-Technologien wie{" "}
          <strong className="font-bold md:font-extrabold">
            React, JavaScript(ES6+) und Tailwind CSS
          </strong>{" "}
          und entwickle reale Projekte, um mich täglich zu verbessern.
          <br />
          <br />
          Ich habe außerdem Erfahrung mit{" "}
          <em className="font-bold md:font-extrabold">
            Git, Figma, Responsive Design und arbeite an der Anbindung von APIs.
          </em>{" "}
          <br />
          Neugierig, autodidaktisch und immer bereit zu lernen und zu wachsen
          als Entwickler und mein Ziel ist es, digitale Lösungen zu schaffen,
          die intuitiv, schnell und zugänglich sind.
        </p>
      </div>

      <div className="flex gap-4 my-6 ">
        <a href="" className="font-bold bg-sky-600 hover:bg-sky-500 p-2 rounded-md shadow-xl transition duration-300 text-white">
          Hire me
        </a>
        <a href="" className="shadow-xl border p-2 rounded-md hover:border-sky-500 transition duration-300">
          Discover my journey
        </a>

      </div>

    </main>
  );
}
