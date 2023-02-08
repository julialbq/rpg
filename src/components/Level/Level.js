import { useMemo } from 'react'
import './Level.css'

export const Level = ({level, xp, life}) => {


  /**const armor = useMemo(() => {
    return life + (level*2) + (xp+1)
  }, [level, xp, life])**/


  return (
    <div className='level'>
      <p>Level: {level}</p>
      <p>XP: {xp}</p>
      <p>Armor: x</p>
    </div>
  )
}
