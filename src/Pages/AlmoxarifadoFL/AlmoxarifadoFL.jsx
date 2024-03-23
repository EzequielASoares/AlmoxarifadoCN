import React from 'react'
import Almoxarifado from '../../Components/Almoxarifado/Almoxarifado'
import '../AlmoxarifadoFL/AlmoxarifadoFL.css'

const AlmoxarifadoFL = () => {
  return (
    <div className='almoxarifadofl'>
      <Almoxarifado title={'Almoxarifado Fases Da Lua'} collectionName='AlmoxarifadoFL' />
    </div>
  )
}

export default AlmoxarifadoFL