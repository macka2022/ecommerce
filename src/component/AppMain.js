import { BrowserRouter, Routes,Route } from "react-router-dom";
import SideBar from "./SideBar";

import TopBar from "./TopBar";
import Statistique from "./statistique";
import AjoutProduit from "./AjoutProduit";
const AppMain = () => {
    return (
    <BrowserRouter>
        <div className="container-scroller">
            <SideBar/>
            <TopBar/>
      
        
        <Routes>
            <Route  path="/page" element=<Statistique/>/>
            <Route  path="/ajouter" element=<AjoutProduit/>/>
        </Routes>
     </div>

</BrowserRouter>
);
}
 
export default AppMain;