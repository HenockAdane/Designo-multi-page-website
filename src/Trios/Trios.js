import React from 'react'
import styles from "../Trios/Trios.module.scss"

function Trios(props) {
    return (
        <div className={styles.Trios}>
            <img src={`${props.img}`} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Trios
