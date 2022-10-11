import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

import { useState, useEffect } from 'react';
import About from "./Components/About/About";
import ClipLoader from "react-spinners/ClipLoader";
import NavbarPhone from "./Components/Navbar/NavbarPhone";

function App() {

  const [loading, setLoading] = useState(false);
  const [before, setBefore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, []);


  return (
    <div className="flex justify-center items-center overflow-hidden flex-col" >
      <div className=' bg-black h-screen w-full flex justify-center items-center'>
        {<>

          <ClipLoader color={"#7aa5a0"} loading={loading} size={200} />
        </>}
      </div>
      <div className={`${loading && 'hidden'} flex justify-center items-center`}>
        <Navbar />
        <NavbarPhone />
        <Hero />




      </div>
    </div >
  );
}

export default App;
