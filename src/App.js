import Head from "./Homecomp/Head"
import Land from "./Homecomp/Land"
import Foot from "./Homecomp/Foot"
import Particles from "./Homecomp/Particles"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {

  return (
    <div>
      <Head />  
      <Land />
      <Foot />
    <Particles id="tsparticles" />
  </div>
  );

}

export default App;
