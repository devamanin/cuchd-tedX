import About from "./About";
import Land from "./Land";
import Blog from "./Blog";
import Theme from "./Theme";
import "./Home.css"
import Teams from "./Teams";

export default function Cuchd() {
    return (
        <>
            <div className="cuchd">
                <Land />
                <Blog />
                {/* <h1>About Us</h1> */}
                <h1 style={{ color: "red", maxWidth: "1440px", margin: "20px auto", paddingLeft: "2%", fontWeight: "800" }}>
                    <span style={{ padding: "5px", borderBottom: "4px red solid" }}>
                    About Us 
                    </span>
                </h1>
                <About />
                <Theme />
                <Teams />
            </div>
        </>
    )
}