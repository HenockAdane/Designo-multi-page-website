import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Header/Header.module.scss"

function Header(props) {
    return (
        <header className={styles.Header}>

            <Link to="/"><img className={styles.logo} src={`/assets/shared/desktop/logo-${props.theme}.png`} /></Link>

            <nav>
                <Link style={props.theme === "dark" ? {color: "black"} : {color: "white"}} className={styles.navLinks} to="/our-company">OUR COMPANY</Link>
                <Link style={props.theme === "dark" ? {color: "black"} : {color: "white"}} className={styles.navLinks} to="/locations">LOCATIONS</Link>
                <Link style={props.theme === "dark" ? {color: "black"} : {color: "white"}} className={styles.navLinks} to="/contact">CONTACT</Link>
            </nav>
            
        </header>
    )
}

export default Header
