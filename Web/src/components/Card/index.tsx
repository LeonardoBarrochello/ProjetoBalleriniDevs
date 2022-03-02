import styles from "./styles.module.scss"
import linkedinIcon from "../../assets/icone_linkedin.svg"
import githubIcon from "../../assets/icone_github.svg"
import { useState } from "react";
import { Modal } from "../Modal";
import { ModalTypes } from "../../enumerables/ModalTypes";

type DevInfo = {
    name : string ;
    avatar : string ;
    office : string ;
    github : string ;
    linkedin : string ;
}

export function Card(props : DevInfo){
    const [isEditDevModalVisible , setIsEditDevModalVisible ] = useState(false);
    const [isDeleteDevModalVisible , setIsDeleteDevModalVisible ] = useState(false);

    return (  
        <>
            <div  className={styles.devCard} >
                                <div className={styles.devInfo}>
                                        <div className={styles.devAvatarBox}>
                                            <img className={styles.devAvatar} src={props.avatar} alt="" />
                                            <div className={styles.devAvatarBorder}> </div>
                                        </div>
                                    
                                        <label className={styles.devName}>{props.name}</label>
                                        <label className={styles.devOffice}>{props.office}</label>
                                        <div className={styles.devSocial} >
                                            <a href={props.github} className={styles.githubLink} >
                                                <img src={githubIcon} alt="" />
                                            </a>
                                            <a href={props.linkedin} className={styles.linkedinLink} >
                                                <img src={linkedinIcon} alt="" />
                                            </a>
                                            <button className={styles.seeMoreButton}>Ver mais</button>
                                        </div>
                                </div>
                                <div className={styles.devActions}>
                                    <button onClick={() => setIsEditDevModalVisible(true)} className={styles.editButton} >
                                        Editar
                                    </button>
                                    <button onClick={() => setIsDeleteDevModalVisible(true)} className={styles.deleteButton} >
                                        Deletar
                                    </button>
                                </div>
            </div>
            {
                         isEditDevModalVisible ? 
                         <Modal type={ModalTypes.Edit} onClose = { () => setIsEditDevModalVisible(false) } >
               
                         </Modal> : null
            }
            {
                         isDeleteDevModalVisible ? 
                         <Modal type={ModalTypes.Delete} onClose = { () => setIsDeleteDevModalVisible(false) } >
               
                         </Modal> : null
            }
        </>
    ) 
}