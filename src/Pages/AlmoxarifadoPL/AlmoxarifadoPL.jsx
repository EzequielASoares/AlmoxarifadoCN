import React from 'react'
import Almoxarifado from '../../Components/Almoxarifado/Almoxarifado'
import '../AlmoxarifadoPL/AlmoxarifadoPL.css'

const AlmoxarifadoPL = () => {
  return (
    <div className='almoxarifadopl'>
      <Almoxarifado title={'Almoxarifado Polarização Da Luz'} collectionName='AlmoxarifadoPL'/>
    </div>
  )
}

export default AlmoxarifadoPL