import styles from "./styles.module.scss"
import logoLinkedin from "../../assets/linkedin.svg"
import logoFacebook from "../../assets/facebook.svg"
import logoDiscord from "../../assets/discord.svg"
import logoBalleriniDevs from "../../assets/ballerinidevs.svg"
import searchButton from "../../assets/search-button.svg"
import { Link } from "react-router-dom"
import { useEffect } from "react"





export  function Header(){
    var path = window.location.pathname

   
    return (
        <div className={styles.header}>
            <div className={styles.socialIconBox}>
                <img className={styles.socialIcon} src={logoLinkedin} alt="" />
                <img className={styles.socialIcon} src={logoFacebook} alt="" />
                <img className={styles.socialIcon} src={logoDiscord} alt="" />
            </div>
            <div className={styles.logoDevsBox}>
                 <a href="/" >
                     <img className={styles.logoDevs} src={logoBalleriniDevs} alt="" />
                 </a>       
                <h1 className={styles.titleStyle}>Ballerini Devs</h1>
            </div>
            <form className={styles.searchForm} style={{ visibility : path != "/" ? "visible" : "hidden" }} action="" >
                    <img  className={styles.searchIcon} src={searchButton} alt="" />
                    <input className={styles.searchInput} type="search" placeholder="Buscar"/>
            </form> 
        </div>
    )
}