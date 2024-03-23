import React from 'react';
import '../ButtonGroup/ButtonGroup.css';
import { Link } from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <div className='button-group'>
      <div className='button-row'>
        <Link to='/almoxarifadotp' className='purple-button'><span className='button-text'>Trânsito Planetário</span></Link>
        <Link to='/almoxarifadofl' className='purple-button'><span className='button-text'>Fases da Lua</span></Link>
        <Link to='/almoxarifadopl' className='purple-button'><span className='button-text'>Polarização da Luz</span></Link>
        <Link to='/almoxarifadocep' className='purple-button'><span className='button-text'>Curvatura do Espaço Tempo</span></Link>
        <Link to='/almoxarifadofi' className='purple-button'><span className='button-text'>Formação da Imagem</span></Link>
      </div>
      <div className='button-row'>
        <Link to='/almoxarifadomds' className='purple-button'><span className='button-text'>Medindo o diâmetro do Sol</span></Link>
        <Link to='/almoxarifadoe' className='purple-button'><span className='button-text'>Eclipses</span></Link>
        <Link to='/almoxarifadoee' className='purple-button'><span className='button-text'>Espelhos Esféricos</span></Link>
        <Link to='/almoxarifadoml' className='purple-button'><span className='button-text'>Montagem de Lunetas</span></Link>
        <Link to='/almoxarifadoec' className='purple-button'><span className='button-text'>Espectrógrafo Caseiro</span></Link>
      </div>
      <div className='button-row'>
        <Link to='/almoxarifadoeu' className='purple-button'><span className='button-text'>Expansão do Universo</span></Link>
        <Link to='/almoxarifadomf' className='purple-button'><span className='button-text'>Montagem de foguetes</span></Link>
        <Link to='/almoxarifadocc' className='purple-button'><span className='button-text'>CosmoCine</span></Link>
        <Link to='/almoxarifadors' className='purple-button'><span className='button-text'>Relógio Solar</span></Link>
      </div>
    </div>
  );
};

export default ButtonGroup;
