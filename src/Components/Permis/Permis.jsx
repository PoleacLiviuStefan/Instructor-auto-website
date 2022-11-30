import React from "react";

const Permis = () => {
  return (
    <div className="absolute h-[70rem] w-full flex-col bg-black bg-opacity-90 top-[250rem] flex items-center">
      <div className="relative text-white top-24 text-center">
        <h1 className="text-3xl font-bold">Obținere Permis Auto Categoria B</h1>
        <h3 className="relative text-xl text-slate-200 top-2">
          Documente-Etape-Conditii de înscriere
        </h3>
        <h2 className="relative  text-xl top-8">
          Ce conditii trebuie sa indeplinesc pentru a ma inscrie la scoala de
          soferi?
        </h2>
        <p className="relative top-24 w-[60rem] text-left">
          Varsta minima de la care se poate începe scoala pentru categoria B
          este de 17 ani și 9 luni, iar cand se implineste varsta de 18 ani se
          poate sustine examenul scris .<br />
          <span className="relative top-8">
            Orice cursant trebuie sa fie apt din punct de vedere psihologic si
            medical. Cursantul sa nu fi fost condamnat pentru infractiunile
            prevazute la Art. 24 din O.U.G. 195/2002.
          </span>
          <br></br>
          <span className="relative top-16 text-left">
            Buletin de Identitate / Carte de Identitate. Semnarea contractului
            de prestari servicii.
          </span>
        </p>
      </div>
      <div className="relative top-80 text-2xl font-bold text-white">
        <h1 className="relative top-10">Documentele necesare</h1>
        <ul className="list-disc">
          <li>Copia actului de identitate</li>
          <li>Fisa medicala (valabila 1 an)</li>
          <li>Aviz psihologic (valabil 1 an)</li>
        </ul>
      </div>
    </div>
  );
};

export default Permis;
