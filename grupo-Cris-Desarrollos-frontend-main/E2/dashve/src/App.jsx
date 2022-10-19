import React from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import BossView from "./pages/BossView";
import Routing from "./components/Routing"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Aboutdash from "./pages/Aboutdash";
import BossRequests from "./pages/BossRequests";
import Informe from "./pages/Informe";
import Estado from "./pages/Estado";
import Login from "./pages/Login";
import JefeProduccionForm from "./pages/JefeProduccionForm";
import GTview from "./pages/GTview";
import GTrequests from "./pages/GTrequests";
import InformeFinal from "./pages/InformeFinal";
import AreaArmado from "./pages/AreaArmado";
import AreaPintura from "./pages/AreaPintura";
import AreaMontaje from "./pages/AreaMontaje";
import UserRegister from "./pages/UserRegister";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/aboutdash" element={<Aboutdash/>}/>
        <Route path="/boss" element={<BossView/>}/>
        <Route path="/requests" element={<BossRequests/>}/>
        <Route path="/informe" element={<Informe/>}/>
        <Route path="/estado" element={<Estado/>}/>
        <Route path="/jefeproduccionform" element={<JefeProduccionForm/>}/>
        <Route path="/gtview" element={<GTview/>}/>
        <Route path="/gtrequests" element={<GTrequests/>}/>
        <Route path="/informefinal" element={<InformeFinal/>}/>
        <Route path="/areaarmado" element={<AreaArmado/>}/>
        <Route path="/areapintura" element={<AreaPintura/>}/>
        <Route path="/areamontaje" element={<AreaMontaje/>}/>
        <Route path="/useregister" element={<UserRegister/>}/>

      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
