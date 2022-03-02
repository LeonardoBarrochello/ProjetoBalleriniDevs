
import { RefAttributes, useState } from "react"
import { ModalTypes } from "../../enumerables/ModalTypes"
import { api } from "../../services/api"
import { Dev } from "../Dtos/Dev"
import styles from "./styles.module.scss"



export function Modal(props : any){
    const [addDevsFormState , setAddDevsFormState] = useState<Dev>({ 
        name : "default",
        office : "default" ,
        avatar : "default" ,
        github : "default",
        linkedin : "default" 
    })

    var type = ""

    if(props.type == ModalTypes.Add){
        type = props.type 
    }
    else if(props.type == ModalTypes.Edit){
        type = props.type 
    }
    else if( props.type == ModalTypes.Delete) {
        type = props.type 
    }

    async function handleSubmit(event : any, modalType : any){
        event.preventDefault()  
        if(modalType == ModalTypes.Add){
           await api.post("/devs", {...addDevsFormState})
           props.updateList()
        }     
        props.onClose()
        console.log(addDevsFormState)
    }
    function handleChange(event : any ){
        const target = event.target
        const value  = target.value
        const name = target.name
        setAddDevsFormState({...addDevsFormState , [name] : value })


    }
    return(
        <div className={styles.modal} >
            <div  className={styles.container} >
                   {
                    type == ModalTypes.Add ? 
                    <form  onSubmit={() => handleSubmit(event,ModalTypes.Add)} className={styles.addDevModal}>
                                <h1 className={styles.title}>
                                 Adicionar Desenvolvedor
                                </h1>
                                <div className={styles.inputBox}>
                                        <div><label className={styles.inputName}>Nome:</label></div>
                                        <input className={styles.input} type="text" name="name" onChange={handleChange} />
                                </div>
                                <div className={styles.inputBox}>
                                        <div><label className={styles.inputName}>Avatar:</label></div>
                                        <input className={styles.input} type="text" name="avatar" onChange={handleChange}/>
                                </div>
                                <div className={styles.inputBox}>
                                        <div><label className={styles.inputName}>Cargo:</label></div>
                                        <input className={styles.input} type="text" name="office" onChange={handleChange}/>
                                </div>
                                <div className={styles.inputBox}>
                                        <div><label className={styles.inputName}>Github:</label></div>
                                        <input className={styles.input} type="text" name="github" onChange={handleChange}/>
                                </div>
                                <div className={styles.inputBox}>
                                        <div><label className={styles.inputName}>LinkedIn:</label></div>
                                        <input className={styles.input} type="text" name="linkedin" onChange={handleChange}/>
                                </div>
                                <div className={styles.buttons}>
                                        <button onClick={() => props.onClose()} className={styles.cancelButton}>
                                                Cancelar
                                        </button>
                                        <button  type="submit" className={styles.addButton}>
                                                Adicionar
                                        </button>
                                </div>
                       </form> : ""           
                   }
                   {
                       type == ModalTypes.Edit ? 
                       <form className={styles.editDevModal} >
                                   <h1 className={styles.title}>
                                   Editar Desenvolvedor
                                   </h1>
                                   <div className={styles.inputBox}>
                                           <div><label className={styles.inputName}>Nome:</label></div>
                                           <input className={styles.input} type="text" />
                                   </div>
                                   <div className={styles.inputBox}>
                                           <div><label className={styles.inputName}>Avatar:</label></div>
                                           <input className={styles.input} type="text" />
                                   </div>
                                   <div className={styles.inputBox}>
                                           <div><label className={styles.inputName}>Cargo:</label></div>
                                           <input className={styles.input} type="text" />
                                   </div>
                                   <div className={styles.inputBox}>
                                           <div><label className={styles.inputName}>Github:</label></div>
                                           <input className={styles.input} type="text" />
                                   </div>
                                   <div className={styles.inputBox}>
                                           <div><label className={styles.inputName}>LinkedIn:</label></div>
                                           <input className={styles.input} type="text" />
                                   </div>
                                   <div className={styles.buttons}>
                                           <button onClick={() => props.onClose()} className={styles.cancelButton}>
                                                   Cancelar
                                           </button>
                                           <button className={styles.addButton}>
                                                   Adicionar
                                           </button>
                                   </div>
                          </form> : ""  
                   }
                   {
                       type == ModalTypes.Delete ? 
                       <form className={styles.deleteDevModal}>
                                   <h1 className={styles.title}>
                                   Deletar Desenvolvedor
                                   </h1>
                                   <h2 className={styles.infoDelete}>Tem certeza que deseja deletar este desenvolvedor?</h2>
                                   <div className={styles.buttons}>
                                           <button onClick={() => props.onClose()} className={styles.cancelButton}>
                                                   Cancelar
                                           </button>
                                           <button className={styles.addButton}>
                                                   Deletar
                                           </button>
                                   </div>
                        </form> : ""  
                   }
            </div>
        </div>
    )
}