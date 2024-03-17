import React from 'react';
import linkedin from "@/app/free-icon-font-linkedin-6422202.png";
import Instagram from "@/app/free-icon-font-instagram-6422200.svg";
import styles from "./home.module.scss";

const Home = () => {
    return (
        <>
            <h1>platform = {__PLATFORM__}</h1>
            <img width={100} height={100} src={linkedin} alt="linkedin"/>
            <Instagram className={styles.instagram}  width={100} height={100} />
        </>
    );
};

export default Home;