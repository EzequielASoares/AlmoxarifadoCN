// RoutesApp.js
import { Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from '../Pages/LoginForm/LoginForm';
import Home from '../Pages/Home/Home.jsx';
import AlmoxarifadoTP from '../Pages/AlmoxarifadoTP/AlmoxarifadoTP.jsx';
import AlmoxarifadoRS from '../Pages/AlmoxarifadoRS/AlmoxarifadoRS.jsx';
import AlmoxarifadoCC from '../Pages/AlmoxarifadoCC/AlmoxarifadoCC.jsx';
import AlmoxarifadoCEP from '../Pages/AlmoxarifadoCEP/AlmoxarifadoCEP.jsx';
import AlmoxarifadoE from '../Pages/AlmoxarifadoE/AlmoxarifadoE.jsx';
import AlmoxarifadoEC from '../Pages/AlmoxarifadoEC/AlmoxarifadoEC.jsx';
import AlmoxarifadoEE from '../Pages/AlmoxarifadoEE/AlmoxarifadoEE.jsx';
import AlmoxarifadoEU from '../Pages/AlmoxarifadoEU/AlmoxarifadoEU.jsx';
import AlmoxarifadoFI from '../Pages/AlmoxarifadoFI/AlmoxarifadoFI.jsx';
import AlmoxarifadoFL from '../Pages/AlmoxarifadoFL/AlmoxarifadoFL.jsx';
import AlmoxarifadoMDS from '../Pages/AlmoxarifadoMDS/AlmoxarifadoMDS.jsx';
import AlmoxarifadoMF from '../Pages/AlmoxarifadoMF/AlmoxarifadoMF.jsx';
import AlmoxarifadoML from '../Pages/AlmoxarifadoML/AlmoxarifadoML.jsx';
import AlmoxarifadoPL from '../Pages/AlmoxarifadoPL/AlmoxarifadoPL.jsx';


const RoutesApp = () => {
  const [signed, setSigned] = useState(false);

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
        <Route
            path="/"
            element={<LoginForm onLogin={() => setSigned(true)} />}
          />
          <Route
            exact
            path="/home"
            element={<Private Component={Home} signed={signed} />}
          />

          <Route path='/almoxarifadotp' Component={AlmoxarifadoTP}/>
          <Route path='/almoxarifadors' Component={AlmoxarifadoRS}/>
          <Route path='/almoxarifadocc' Component={AlmoxarifadoCC}/>
          <Route path='/almoxarifadocep' Component={AlmoxarifadoCEP}/>
          <Route path='/almoxarifadoe' Component={AlmoxarifadoE}/>
          <Route path='/almoxarifadoec' Component={AlmoxarifadoEC}/>
          <Route path='/almoxarifadoee' Component={AlmoxarifadoEE}/>
          <Route path='/almoxarifadoeu' Component={AlmoxarifadoEU}/>
          <Route path='/almoxarifadofi' Component={AlmoxarifadoFI}/>
          <Route path='/almoxarifadofl' Component={AlmoxarifadoFL}/>
          <Route path='/almoxarifadomds' Component={AlmoxarifadoMDS}/>
          <Route path='/almoxarifadomf' Component={AlmoxarifadoMF}/>
          <Route path='/almoxarifadoml' Component={AlmoxarifadoML}/>
          <Route path='/almoxarifadopl' Component={AlmoxarifadoPL}/>

          <Route path='*' element={<LoginForm/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

const Private = ({ Component, signed }) => {
return signed ? <Component /> : <Navigate to='/' replace />;
};

export default RoutesApp;
