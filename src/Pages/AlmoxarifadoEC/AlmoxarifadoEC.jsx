import React from 'react'
import Almoxarifado from '../../Components/Almoxarifado/Almoxarifado'
import '../AlmoxarifadoEC/AlmoxarifadoEC.css'

const AlmoxarifadoEC = () => {
  return (
    <div className='almoxarifadoec'>
      <Almoxarifado title={'Almoxarifado Espectrógrafo Caseiro'} collectionName='AlmoxarifadoEC' />
    </div>
  )
}

export default AlmoxarifadoEC