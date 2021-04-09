import React from 'react'
import {Link} from "react-router-dom"
import styles from "../ViewDesign/ViewDesign.module.scss"

function ViewDesign(props) {
    return (
        <div className={styles.ViewDesign} style={{backgroundImage: `url(${props.bgImg})`, gridArea: props.gridArea}}>

            <h1>{props.type} DESIGN</h1>
            <div>
                <Link to={`/${props.type}-design`}>VIEW PROJECT</Link>
                <img src="/assets/shared/desktop/icon-right-arrow.svg" />
            </div>
            
        </div>
    )
}

export default ViewDesign
