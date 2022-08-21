import pic from "../Assests/tedx.png";

export default function Land() {
  return (
    <>
      <div className="land">
        <head   data-aos="fade-up">
          <h1>TEDX Coming to Chandigarh University</h1>
          <br></br>
          <h3>Date of Event : 6'NOV 2022</h3>
          <br></br><br></br><br></br>

          <h1>Theme: Innovation and Youth</h1>
          <p>"Youth and innovation," the polar opposite of "youth," contradicts the business assumption that innovation is and must always be a regulated process. "Youth" is increasingly seen as an investment, both as a notion and as a stage of life. This is demonstrated in engaging adolescents in innovation discourse and creating an environment in which they may engage and demonstrate entrepreneurship. While it is vital to note that young may inspire new ideas, they also play a crucial role as early adopters in various areas, increasing demand for innovative products and services. Youth-led innovation encompasses both gradual and profound change.</p>
        </head>
        <fig>
          <img src={pic} width="85%" />
        </fig>
        
      </div>

      <div className="about"  >
        <txt >
          <h3>About</h3>
          <p>A TEDx event is a community gathering where live TED-style presentations and performances are shared. TEDx events 
            are totally organised and handled independently by each community. Each TEDx event's content and design are unique and produced separately, although they all share elements.<br></br> <br></br>
            TED is a non-profit organisation dedicated to the spread of Ideas Worth Spreading. TED, which began as a four-day conference in California 30 years ago, has expanded to promote its objective via a variety of projects. The world's finest thinkers and doers are invited to talk for 18 minutes or less at the two annual TED Conferences. Many of these speeches are then made freely available on TED.com.</p>
          <a href="/about">
          <button > {">"} Read More</button>
          </a>
        </txt>
      </div>

      <div className="speakers"  data-aos="fade-up">
        <h3>Speakers</h3>
        <p>Speakers will be announced soon</p>
        <div>
        <section>
          <fig><img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={"100%"}  /></fig>
            <h5>Coming Soon</h5>
            <p>TEDX</p>
          </section>

        <section>
          <fig><img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={"100%"}  /></fig>
            <h5>Coming Soon</h5>
            <p>TEDX</p>
          </section>

          <section>
          <fig><img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={"100%"}  /></fig>
            <h5>Coming Soon</h5>
            <p>TEDX</p>
          </section>
          <section>
          <fig><img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={"100%"}  /></fig>
            <h5>Coming Soon</h5>
            <p>TEDX</p>
          </section>
          <section>
          <fig><img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={"100%"}  /></fig>
            <h5>Coming Soon</h5>
            <p>TEDX</p>
          </section>
          <section>
          <fig><img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={"100%"}  /></fig>
            <h5>Coming Soon</h5>
            <p>TEDX</p>
          </section>
          <section>
          <fig><img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={"100%"}  /></fig>
            <h5>Coming Soon</h5>
            <p>TEDX</p>
          </section>

          

        </div>
      </div>

    </>
  )
}