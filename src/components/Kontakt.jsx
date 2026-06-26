import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../LanguageContext";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import SocialMedia from "./SocialMedia";

const Kontakt = () => {
  const { t } = useLanguage();
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Remplacez ces variables par vos clés EmailJS. 
    // Il est recommandé d'utiliser des variables d'environnement (.env)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    emailjs.sendForm(
      serviceId,
      templateId,
      e.target,
      publicKey
    ).then((result) => {
      console.log(result.text);
      setIsSent(true); // Affiche le message de succès
      e.target.reset(); // Remet le formulaire à zéro
      
      // Fait disparaître le message après 4 secondes
      setTimeout(() => {
        setIsSent(false);
      }, 4000);
    }).catch((error) => {
      console.error(error.text);
      alert(t("Erreur lors de l'envoi du message.", "Error sending message."));
    });
  };

  return (
    <section className="px-6 md:px-10 pt-48 pb-12 md:pt-36 text-slate-100 max-w-5xl mx-auto min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">{t("Lass uns reden", "Let's Talk")}</h1>
        <p className="text-slate-400 text-lg">
          {t("Haben Sie ein Projekt im Sinn? Kontaktieren Sie mich!", "Have a project in mind? Feel free to contact me!")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-neutral-900 p-4 rounded-xl shadow-sm border border-neutral-800">
            <div className="bg-blue-950 p-3 rounded-full text-blue-500">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-slate-400">koliefassoumathias@gmail.com</p>
            </div>
          </div>
          <div className="mt-8 bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-800">
            <h3 className="font-bold text-lg mb-4">{t("Folge mir", "Follow me")}</h3>
            <SocialMedia />
          </div>
        </div>

        <form className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 flex flex-col gap-5" onSubmit={handleSubmit}>
          
          {isSent && (
            <div className="p-4 bg-green-500/10 border border-green-500/50 text-green-400 rounded-lg text-center font-semibold transition-all duration-300">
              {t("Ihre Nachricht wurde erfolgreich gesendet!", "Your message has been sent successfully!")}
            </div>
          )}

          <input name="name" type="text" placeholder={t("Dein Name", "Your Name")} className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-slate-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-900 transition" required />
          <input name="email" type="email" placeholder={t("Deine E-Mail", "Your Email")} className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-slate-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-900 transition" required />
          <textarea name="message" rows="5" placeholder={t("Deine Nachricht", "Your Message")} className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-slate-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-900 transition" required></textarea>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md">
              {t("Nachricht senden", "Send Message")}
            </button>
            <a href="https://wa.me/+491771694756" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md">
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
          </div>
        </form>
      </div>
      
      <div className="flex justify-center items-center fixed left-10 top-32  lg:flex">
        <SocialMedia />
      </div>
    </section>
  );
};

export default Kontakt;