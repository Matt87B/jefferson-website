import Nav from "../nav/Nav";
import styles from "./Body.module.css"

function Body(){
    return(
        <body>
            <Nav/>
            <section id="header">
                <header>
                    <h1 className={styles.h1}>Jefferson Inc.</h1>
                </header>
                <h2 className={styles.h1}>Building the future. Together.</h2>
            </section>
            <section id="about">
                <h2>About us</h2>
                <p>
                    Jefferson Incorporated is the global leader in autonomous systems and applied artificial intelligence.
                    For over four Decades, we have driven innovation across defense, infrastructure, logistics and 
                    consumer robotics - delivering solutions that redefine efficiency, security and human potential.
                </p>
                <p>
                    Founded on the principle that complex problems require scalable, autonomous solutions,
                    Jefferson Inc. specializes in the design and deployment of efficient robotics platforms
                    engineered for reliability, precision and adaptability in complex environments. Our patented 
                    AI arechitectures support real-time decision making, behavioural optimization, and seamless
                    integration into existing organizational frameworks. 
                </p>
                <p>
                    At Jefferson, we focus on building robust, scalable systems through tightly integrated research, 
                    development, and manufacturing operations. This structure enables rapid iteration, efficient deployment,
                    and consistent performance across all product lines. 
                </p>
                <p>
                    With operations spanning multiple continents and long-standing partnerships across public and private
                    sectors, Jefferson Inc. is committed to delivering scalable intelligent systems that drive measurable impact across
                    critical industries. 
                </p>
                <p>
                    Progress demands difficult choices. We make them - so others don't have to.
                </p>
                <p>
                    Jefferson Inc.<br/>
                    <i>Engineering the next stage of humanity.</i>
                </p>
            </section>
            <section id="">

            </section>
        </body>
    );
}
export default Body