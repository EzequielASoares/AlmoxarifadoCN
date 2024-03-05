import React from 'react';
import '../Home/Home.css'
import Formulario from '../../Components/Formulario/Formulario';
import austronauta from '../../Components/Assets/astronauta.png'
import Almoxarifado from '../../Components/Almoxarifado/Almoxarifado';
import ButtonGroup from '../../Components/ButtonGroup/ButtonGroup';
import logo from '../../Components/Assets/logocn.png';

const Home = () => {
  return (
    <div className='container'>
      <h1 className='title'> OLÁ COMETA, TUDO BEM? </h1>
      <img className='logocn' src={logo} alt="Logo CN" />
      <div className='home-content'>
      <Formulario className='formsdecompra' />
      <img className='astronautinha' src= {austronauta} />
      </div>
      <div>
        <p className='titleAlmoxarifado'>Almoxarifados:</p>
        <hr className='hrr'/>
        <ButtonGroup/>
      </div>
      <div className="almoxarifado">
        <Almoxarifado title={'Almoxarifado Geral'} collectionName='AlmoxarifadoGeral'/>
      </div>

    </div>
  );
}

export default Home;
