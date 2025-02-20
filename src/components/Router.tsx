import { Routes, Route } from "react-router-dom";
import { History } from "../pages/History/Index";
import { Home } from "../pages/Home/Index";
import { DefaultLayout } from "../layouts/DefaultLayout/Index";



export function Router () {
    return (
        <Routes> 
            <Route path="/" element={<DefaultLayout />} >  
             <Route path="/" element={<Home />} />   
             <Route path="/History" element={<History />} />  
            </Route> 
        </Routes>
    )
}
