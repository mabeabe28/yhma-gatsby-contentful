import React from 'react'
import { ContainerItem } from './Container.style'
const ContainerItemComp = ({ children, width }) => {

  return (
    <ContainerItem
      width = {width}
    >
      {children}
    </ContainerItem>
  )
}

export default ContainerItemComp;
