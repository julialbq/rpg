import { useMemo, useState } from 'react'
import './Level.css'

export const Level = ({level, xp, life}) => {
  const [armor, setArmor] = useState(0)
  
  useMemo(() => {
    const newArmor = +life + (+level*2) + (+xp+1)
    setArmor(newArmor)
    return armor
  }, [level, xp, life])

  return (
    <div className='level'>
      <p>Level: {level}</p>
      <p>XP: {xp}</p>
      <p>Armor: {armor}</p>
    </div>
  )
}
