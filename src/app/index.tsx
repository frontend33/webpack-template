import styles from '../pages/home/ui/home.module.scss'
import {Link} from 'react-router-dom'
import React from "react";
import Instagram from './free-icon-font-instagram-6422200.svg'
import linkedin from './free-icon-font-linkedin-6422202.png'

export const App = () => {

    return (
        <>
            <div>
                <Link to="/about">About</Link>
                <br/>
                <Link to="/shop">Shop</Link>
            </div>

            <h1>platform = {__PLATFORM__}</h1>

            <img width={100} height={100} src={linkedin} alt="linkedin"/>
            <Instagram className={styles.instagram}  width={100} height={100} />
            <div className={styles.title}>hello world</div>
            <button className={styles.button}>click</button>
        </>
    );
};