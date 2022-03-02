import styles from "./styles.module.scss"
import prevButton from "../../assets/seta_esquerda.svg"
import nextButton from "../../assets/seta_direita.svg"
import { Card } from "../../components/Card"
import { createElement, Props, useEffect, useRef } from "react"
import { useState } from "react"
import { Modal } from "../../components/Modal"
import { api } from "../../services/api"
import { ModalTypes } from "../../enumerables/ModalTypes"



type Devs = {   
     name : string ;
     avatar : string ;
     office : string ;
     github : string ;
     linkedin : string ;
}
export function DevsTable(){
     
     const carousel = useRef<HTMLDivElement | null>(null)

     const [isAddDevModalVisible , setIsAddDevModalVisible ] = useState(false);
    
     var [devs ,setDevs] = useState<Devs[]>([]) 


     const handleLeftClick = (e : any) => {
        e.preventDefault()
        carousel.current.scrollLeft -=  carousel.current.offsetWidth + 100
        
     }
     const handleRightClick = (e : any) => {
        e.preventDefault()
        carousel.current.scrollLeft +=  carousel.current.offsetWidth + 100
        
     }

     function updateDevsList(){
        api.get<Devs[]>('/devs').then( response => {
                console.log("devs" , response)
                setDevs(response.data)
        } )
     }

     useEffect(()=> {
        api.get<Devs[]>('/devs').then( response => {
            console.log(response)
            setDevs(response.data)
        } )
     }, [])
  
     return (
             <>
               
                <div className={styles.devBox}>   
                        <div className= {styles.addDevsBox}>
                                <button onClick={() => setIsAddDevModalVisible(true)} className={styles.addDevsButton} >
                                        Adicionar Desenvolvedor
                                </button>
                        </div>
                        <div  className = {styles.carouselDevs} ref={carousel}>
                                <div className={ styles.buttons} >
                                        <button onClick={handleLeftClick} className={styles.prevButton}>
                                                <img src={prevButton} alt="" />
                                        </button>
                                        <button onClick={handleRightClick} className={styles.nextButton}>
                                                <img src={nextButton} alt="" />
                                        </button>

                                </div>
                               {
                                  devs.map((dev : Devs , index : number) => {
                                        return (
                                           <Card 
                                                 key = {index}
                                                 name = {dev.name} 
                                                 avatar = {dev.avatar} 
                                                 office = {dev.office} 
                                                 github = {dev.github} 
                                                 linkedin = {dev.linkedin}
                                           />
                                        )
                                  })
                               }
                        </div>   
                </div>
                {
                            isAddDevModalVisible ? 
                            <Modal type={ModalTypes.Add} onClose = { () => setIsAddDevModalVisible(false) } updateList = {() => updateDevsList() } >
                  
                            </Modal> : null
                }            
            </>
     )
}