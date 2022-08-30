import React from "react";
import Fade from "react-reveal/Fade";
const DrivingDocuments = () => {
  return (
    <div
      name="permis"
      className="absolute lg:h-[50rem] h-[120rem] text-white w-full bg-slate-800 bg-opacity-40 top-[280rem] lg:top-[185rem] flex-col md:flex-row flex justify-center"
    >
      <Fade delay={300}>
        <div className="relative md:left-0 left-6 top-8 w-[19rem] md:w-[60rem] ">
          <h1 className="relative left-2 text-2xl font-bold">
            Școala de șoferi
            <span className="relative text-sky-500 left-2">categoria B</span>
          </h1>

          <h3 className="relative left-6 text-xl font-bold mt-4">
            Ce implică școala de șoferi:
          </h3>
          <ul className="relative text-lg left-8 mt-2 mb-4 leading-7 list-disc">
            <li>10 ore de legislație rutieră</li>
            <li>30 de ore de conducere, cu începere imediată.</li>
            <li>
              Perioada de școlarizare minimă de
              <span className="relative font-bold text-sky-500 left-2">
                5 săptămâni
              </span>
            </li>
          </ul>

          <h2 className="relative left-2 text-md">
            Mașină: <span className="text-sky-500"></span>
          </h2>
          <h2 className="relative left-6 text-xl font-bold mt-4 ">
            Programul de lucru pentru orele de{" "}
            <span className="text-sky-500">legislație rutieră</span>:
          </h2>
          <ul className="relative left-8 text-lg mt-2 leading-7 list-disc">
            <li>
              Luni: <span className="font-bold"> 16.00-18.00 </span>{" "}
            </li>
            <li>
              Joi: <span className="font-bold"> 16.00-18.00 </span>{" "}
            </li>
            <li>Sala de curs moderna cu dotari noi, simulator auto.</li>
            <li>
              Programul de lucru pentru orele de conducere este flexibil, se
              stabilește impreună cu elevul cursant
            </li>
          </ul>
          <h2 className="relative left-6 text-xl font-bold mt-4">
            Documente necesare intocmirii{" "}
            <span className="text-sky-500">dosarului:</span>
          </h2>
          <ul className="relative left-8 text-lg leading-7 mt-2 list-disc">
            <li>Copie Buletin (Carte Identitate)</li>
            <li>Cazier Judiciar – valabilitate 6 luni</li>
            <li>Analize Medicale – valabilitate 1 an</li>
            <li>Aviz Psihologic – valabilitate 1 an</li>
          </ul>
          <h2 className="relative left-6 text-xl font-bold mt-4">
            Informații <span className="text-sky-500">Importante</span>:
          </h2>
          <ul className="relative left-8 text-lg leading-7 mt-2 list-disc">
            <li>Valabilitatea scoli de soferi este de 1 an.</li>
            <li>
              Analizele medicale si avizul psihologic se elibereaza de catre
              medic si are valabilitatea tot de 1 an calendaristic.
            </li>
            <li>
              Cazierul judiciar se elibereaza GRATUIT de la cea mai apropiata
              sectie de politie si are valabilitate 6 luni.
            </li>
            <li>
              Perioada de scolarizare este de cinci saptamaini, cu incepere
              imediata
            </li>
          </ul>
        </div>
        <iframe
          className="relative drop-shadow-xl  md:left-28 top-28 mr-32 "
          width="400"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Romania%20Buzau&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </Fade>
    </div>
  );
};

export default DrivingDocuments;