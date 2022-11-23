import { height } from '@mui/system'
import React from 'react'

const WorksCard = ({path,imgHeight,alt}) => {
  return (
    <>
    <img src={path} height={imgHeight} alt={alt}  />
    </>
  )
}

export default WorksCard