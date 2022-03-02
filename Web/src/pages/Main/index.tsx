import styles from "./styles.module.scss"
import logoDeveloper from "../../assets/programador_main.svg"
import { Link } from "react-router-dom"

export function Main () {
     return(
            <div className={styles.main}>
                    <div className={styles.content} >
                            <h1>O maior banco de devs do Brasil</h1>
                            <p>Nao importa se front ou back end,  fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
                            <div className={styles.enterBox}>
                                <button className={styles.enterButton} >
                                        <Link  className={styles.enterLink} to="/devs">
                                                Entre Agora
                                        </Link>
                                </button>
                                <div className={styles.borderButton}></div>
                            </div> 
                           
                    </div>
                    <img src={logoDeveloper} alt="" />
            </div>

     )
}