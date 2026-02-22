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

export default function Übermich() {
  // This component provides an overview of the developer's background, skills, and approach to web development. It emphasizes the combination of design and functionality, with a focus on React and Tailwind CSS. The section also includes a call-to-action for downloading the resume and browsing the developer's work.
  return (
    <section className="px-10 py-10 mt-30 text-black">
      <div className="mt-6 flex md:flex justify-center items-center flex-col">
        <img
          src={myImg}
          alt="My own image"
          className="border-4  w-50 h-50 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold  p-3 shadow-lg mt-4  border-r-2 border-sky-500  text-center">
          Logik trifft auf Kreativität
        </h1>
      </div>

      <div className="  p-6 rounded-md ">
        <h1 className=" text-xl md:text-4xl text-center mb-8 uppercase font-bold">
          Was macht mich unterschiedlich ?
        </h1>
        <p className="text-center text-md md:text-xl ">
          Ich verbinde Design und Funktionalität, um wirkungsvolle Lösungen zu
          schaffen. Mein Fokus liegt auf{" "}
          <span className="text-black font-bold">React</span> und{" "}
          <span className="text-black font-bold">Tailwind CSS</span>, um Ideen
          in die Realität umzusetzen. Dabei ist mir nicht nur wichtig, dass es
          funktioniert, sondern dass der Code{" "}
          <span className="italic ">sauber</span> und die User
          Experience <span className="italic ">außergewöhnlich</span>{" "}
          ist.
          <br />
          <br />
          Ich absolviere derzeit einen Master in Mensch-Technik-Interaktion.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href=""
            className="text-md text-center bg-sky-600 hover:bg-sky-500  font-bold py-2 px-4 rounded-md transition duration-300 shadow-lg text-white"
          >
            Download resume
          </a>
          <button className="text-white text-md text-center bg-slate-900 hover:bg-slate-950  font-bold py-2 px-4 rounded-md transition duration-300 cursor-pointer shadow-lg">
            Browse my work
          </button>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-sky-950 hover:bg-sky-900 p-4 rounded-md shadow-lg border-0 border-t-4 text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-2">UI/UX Design</h2>
            <p className="text-md md:text-lg">
              Ich gestalte intuitive und ästhetisch ansprechende
              Benutzeroberflächen,die das Nutzererlebnis verbessern
              <br />
              und die Markenidentität widerspiegeln.
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

          <div className="text-black bg-white hover:bg-sky-50 p-4 rounded-md shadow-lg border-0 border-b-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Webentwicklung
            </h2>
            <p className="text-md md:text-lg">
              Ich entwickle responsive und leistungsstarke Webseiten mit
              modernen Webtechnologien für Skalierbarkeit und optimale
              Funktionalität.
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
            </p>
          </div>

          <div className="text-white bg-sky-950 hover:bg-sky-900 p-4 rounded-md shadow-lg border-0 border-t-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              SEO-Optimierung
            </h2>
            <p className="text-md md:text-lg">
              Ich optimiere Webseiten für Suchmaschinen, um die Sichtbarkeit zu
              erhöhen, organischen Traffic zu steigern und die Gesamtleistung zu
              verbessern.
            </p>
            <div className="flex gap-2.5 mt-4">
              <img
                src={seo}
                alt="SEO Logo"
                className="w-8 h-8 object-cover rounded-full "
              />
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
