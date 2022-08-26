import ReactRotatingText from "react-rotating-text"
import pic from "../Assests/TED_Splash1.png"

export default function Theme() {
    return (
        <>
        <img className="themepic" src={pic} width="100%" />
        {/* <txt>   
            <ReactRotatingText items={['THEME', 'INNOVATION', 'YOUTH']} pause="3000" typingInterval="100" />
            </txt> */}
        <div className="theme">
            <section>
            <txt>   
            <ReactRotatingText items={['THEME', 'INNOVATION', 'YOUTH']} pause="3000" typingInterval="100" />
            </txt>
            </section>
            <section>           
            <p>"Youth and innovation," the opposite view of "youth" challenges the commercial understanding that innovation is a controlled process and must always be. "Youth" as an idea, but also as a phase of life, is increasingly understood as an investment. This is reflected in getting youth involved in innovation discourse and finding the right environment for them to participate and show entrepreneurship. While it's important to recognize that youth can inspire new ideas, in some sectors youth also play an important role as early adopters, stimulating demand for innovative products and services increase. Youth-led innovation includes both incremental and fundamental innovation. While many basic innovations come from outsiders, step-by-step innovations often come from people who are closely involved in the day-to-day use of a particular product or service. Most innovations tend to be gradual, and less frequent radical innovations can rock things. When these breakthrough innovations are adopted, file sharing can disrupt traditional markets in the same way that it transforms the music and film industry.
                <br></br>
                <br></br>
                By promoting innovation, youth can acquire the skills they need to shape their future. Research focuses on youth innovation. Youth suggest possible solutions to their problems. Often, the problem itself is identified or defined and is responsible for developing and implementing the solution. Innovation is important for social progress. New and innovative products have raised the standard of living and given people the opportunity to improve their lives. Breakthroughs in medicine and technology have equally dramatic implications for individuals and communities. Educational innovation can improve the overall outcome of the school environment. Innovative classrooms are full of students developing stronger communication skills and building engagement skills among peers. One of the greatest benefits of innovation is its contribution to economic growth. Simply put, innovation can lead to increased productivity. That is, the same input produces a larger output. As productivity increases, more goods and services are produced. In other words, the economy will grow.</p>
        </section>
        </div>

        </>
    )
}