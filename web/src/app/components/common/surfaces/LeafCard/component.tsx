import React from 'react'
import { LeafCardProps } from './data'
import s from "./styles.module.scss"

const LeafCard = ({children}: LeafCardProps) => {

  return (
    <div className={s.container}>
        { children }
    </div>
  )
} 
export default LeafCard