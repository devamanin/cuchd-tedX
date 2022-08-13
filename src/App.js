import Head from "./Homecomp/Head"
import Land from "./Homecomp/Land"
import Foot from "./Homecomp/Foot"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Particles from "./Homecomp/Particles"
import Try from "./Homecomp/Try"

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
