import Head from "./Homecomp/Head"
import Land from "./Homecomp/Land"
import Foot from "./Homecomp/Foot"
import Particles from "./Homecomp/Particles"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {Routes , Route } from "react-router-dom";
import About from "./Homecomp/About";
// ..
AOS.init();

function App() {

  return (
    <div>
      <Head />  
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Foot />
    <Particles id="tsparticles" />
  </div>
  );

}

export default App;
