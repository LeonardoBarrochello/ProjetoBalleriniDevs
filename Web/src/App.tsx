import { Header } from "./components/Header";
import styles from "./App.module.scss"
import { Main } from "./pages/Main";
//import Routes from "./routes/routes";
import { Routes , BrowserRouter, Route } from "react-router-dom";
import PageRoutes from "./routes/routes";



export function App() {
 
  return (
    <div className={styles.contentWrapper} >
         
         <PageRoutes/>
    </div>
    
  )
}
