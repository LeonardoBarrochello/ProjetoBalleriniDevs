import { Suspense } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Header } from "../components/Header";
import { DevsTable } from "../pages/DevsTable/DevsTable";
import { Main } from "../pages/Main";



const PageRoutes = () => {
    return(
        <> 
            <Header/>
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/devs" element={<DevsTable/>} />
                 </Routes>            
            </BrowserRouter>
        </>
    
    )
 }
 
 export default PageRoutes;