import { useMemo, useState } from 'react'
import './Level.css'

export const Level = ({level, xp, life}) => { 
  const armor = useMemo(() => {
    const newArmor = +life + (+level*2) + (+xp+1)
    return newArmor
  }, [level, xp, life])

  return (
    <div className='level'>
      <p>Level: {level}</p>
      <p>XP: {xp}</p>
      <p>Armor: {armor}</p>
    </div>
  )
}
