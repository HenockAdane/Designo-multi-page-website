import React, {useContext} from 'react'
import {DesignContext} from "../Contexts/Design"
import styles from "../Home/Home.module.scss"
import ViewDesign from '../ViewDesign/ViewDesign'
import Trios from "../Trios/Trios"

function Home() {

    const Designs = useContext(DesignContext)


    const TriosObj = [{
        img: "/assets/home/desktop/illustration-passionate.svg",
        title: "PASSIONATE",
        description: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
    },
    {
        img: "/assets/home/desktop/illustration-resourceful.svg" ,
        title: "RESOURCEFUL",
        description: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs." 
    },
    {
        img: "/assets/home/desktop/illustration-friendly.svg",
        title: "FRIENDLY",
        description: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
    }]
    
    return (
        <div className={styles.Home}>

            <div className={styles.hero}>
                <div className={styles.intro}>
                    <h1>Award-winning custom designs and digital branding solutions</h1>
                    <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>

                    <button>LEARN MORE</button>
                </div>

                <div className={styles.introImg} style={{backgroundImage: "url(/assets/home/desktop/bg-pattern-hero-home.svg)"}}>
                <img src="/assets/home/desktop/image-hero-phone.png" />
                </div>
            </div>


            <div className={styles.designsContainer}>
                {Designs.map(design => <ViewDesign bgImg={design.bgImg} gridArea={design.type} type={design.type} />)}
            </div>


            <div className={styles.triosFlex}>
                {TriosObj.map(a => <Trios img={a.img} title={a.title} description={a.description} />)}
            </div>




            
            
        </div>
    )
}

export default Home
