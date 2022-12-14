import React from "react";
import Fade from "react-reveal/Fade";
import { BsChevronDown } from "react-icons/bs";
const DrivingDocuments = () => {
  return (
    <div
      name="permis"
      className="absolute xl:h-[50rem] h-[120rem] text-white w-full bg-slate-800 bg-opacity-40 top-[300rem] xl:top-[210rem] flex-col md:flex-row flex justify-center"
    >
      <Fade delay={300}>
        <div className="relative md:left-0 left-6 top-8 w-[19rem] md:w-[60rem] ">
          <h1 className="relative left-2 text-2xl font-bold">
            Scoala de soferi
            <span className="relative text-sky-500 left-2">categoria B</span>
          </h1>

          <h3 className="relative left-6 text-xl font-bold mt-4">
            Ce implica scoala de soferi:
          </h3>
          <ul className="relative text-xl left-8 mt-2 mb-4 leading-7 list-disc">
            <li>10 ore de legislatie rutiera</li>
            <li>30 de ore de conducere, cu incepere imediata.</li>
            <li>
              Perioada de scolarizare minima de
              <span className="relative font-bold text-sky-500 left-2">
                5 saptamani
              </span>
            </li>
          </ul>

          <h2 className="relative left-6 text-xl font-bold mt-4 ">
            Programul de lucru pentru orele de{" "}
            <span className="text-sky-500">legislatie rutiera</span>:
          </h2>
          <ul className="relative left-8 text-xl mt-2 leading-7 list-disc">
            <li>
              Luni: <span className="font-bold"> 16.00-18.00 </span>{" "}
            </li>
            <li>
              Joi: <span className="font-bold"> 16.00-18.00 </span>{" "}
            </li>
            <li>Sala de curs moderna cu dotari noi, simulator auto.</li>
            <li>
              Programul de lucru pentru orele de conducere este flexibil, se
              stabileste impreuna cu elevul cursant
            </li>
          </ul>
          <h2 className="relative left-6 text-xl font-bold mt-4">
            Documente necesare intocmirii{" "}
            <span className="text-sky-500">dosarului:</span>
          </h2>
          <ul className="relative left-8 text-xl leading-7 mt-2 list-disc">
            <li>Copie Buletin (Carte Identitate)</li>
            <li>Cazier Judiciar ??? valabilitate 6 luni</li>
            <li>Analize Medicale ??? valabilitate 1 an</li>
            <li>Aviz Psihologic ??? valabilitate 1 an</li>
          </ul>
          <h2 className="relative left-6 text-xl font-bold mt-4">
            Informatii <span className="text-sky-500">Importante</span>:
          </h2>
          <ul className="relative left-8 text-xl leading-7 mt-2 list-disc">
            <li>Valabilitatea scolii de soferi este de 1 an.</li>
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
        <div className="relative top-20 flex left-16 justify-center">
          <h2 className="absolute top-0 w-[22rem] text-center font-bold left-[-3rem] xl:left-0 text-2xl">
            Locatia unde se desfasoara orele de legislatie
          </h2>
          <div className="absolute right-[6rem] animate-[animarrow_1s_ease-in-out_infinite] ">
            <i className=" flex flex-col absolute text-2xl top-[2rem]   ">
              <BsChevronDown />
            </i>
            <i className=" flex flex-col absolute text-2xl top-[2.5rem] text-slate-200 ">
              <BsChevronDown />
            </i>
            <i className=" flex flex-col absolute text-2xl top-[3rem] text-slate-400  ">
              <BsChevronDown />
            </i>
          </div>
          <iframe
            className="relative top-20 left-[-4rem] xl:left-[0rem]"
            width="400"
            height="400"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.9209846613126!2d26.829501215509723!3d45.14819697909853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b15fd72c20d7a5%3A0xeefec5c823a89e91!2sStrada%20Victoriei%2042%2C%20Buz%C4%83u!5e0!3m2!1sen!2sro!4v1665512997533!5m2!1sen!2sro"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>

        </div>
      </Fade>
    </div>
  );
};

export default DrivingDocuments;
