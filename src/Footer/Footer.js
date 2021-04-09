import React from 'react'
import styles from "../Footer/Footer.module.scss"
import Header from '../Header/Header'
import {Link } from "react-router-dom"

function Footer() {
    return (
        <footer className={styles.Footer}>

            <Header theme="light" />

            <hr />
            <div className={styles.container}>
                

                <div className={styles.linkContainer}>
                    <Link>
                        <h4>Designo Central Office</h4>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </Link>
                </div>

                <div className={styles.linkContainer}>
                    <h4>Contact Me (Creator Of This Website)</h4>
                    <h4>P: <a href="tel:+44 07938888763" target="_blank">+44 07938888763</a></h4>
                    <h4>M : <a href="mailto:adanehenock@gmail.com" target="_blank">adanehenock@gmail.com</a></h4>
                </div>

                <div className={styles.linkContainer}>
                    <a className={styles.socials} href="#"><img src="/assets/shared/desktop/icon-facebook.svg" /></a>
                    <a className={styles.socials} href="#"><img src="/assets/shared/desktop/icon-youtube.svg" /></a>
                    <a className={styles.socials} href="#"><img src="/assets/shared/desktop/icon-twitter.svg" /></a>
                    <a className={styles.socials} href="#"><img src="/assets/shared/desktop/icon-pinterest.svg" /></a>
                    <a className={styles.socials} href="#"><img src="/assets/shared/desktop/icon-instagram.svg" /></a>
                </div>

                
            </div>
            
        </footer>
    )
}

export default Footer
