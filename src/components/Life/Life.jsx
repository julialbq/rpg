import { useMemo, useState } from 'react'
import './Life.css'

export const Life = ({level, xp}) => {  
  const maxLifePoints = useMemo(() => {
    const newMaxLifePoints = level * 10    
    return newMaxLifePoints
  }, [level])
  
  const maxManaPoints = useMemo(() => {
    const newMaxManaPoints = (+level * 2) + +xp    
    return newMaxManaPoints
  }, [level, xp])
  
  const [life, setLife] = useState(maxLifePoints)
  const [mana, setMana] = useState(maxManaPoints)

  const armor = useMemo(() => {
    const newArmor = +life + (+level*2) + (+xp+1)
    return newArmor
  }, [level, xp, life])

  const increasePoints = (points, maxPoints, setPoints) => {
    if (points < maxPoints){
      const updatedpoints= points + 1
      setPoints(updatedpoints)
    } else {
      setPoints(maxPoints)
    }    
  }
  
  const decreasePoints =(points, setPoints) => {
    if (points > 0) {
      const updatedpoints = points - 1
      setPoints(updatedpoints)
    } else {
      setPoints(0)
    }    
  }

  return (
    <div className = "status">
      <div className="status-info">
        <p>Life: {life}</p>
        <div className="buttons">
          <button onClick={() => increasePoints(life, maxLifePoints, setLife)}>+ life</button>
          <button onClick={() => decreasePoints(life, setLife)}>- life</button>
        </div>
      </div>
      <div className="status-info">
        <p>Mana: {mana}</p>
        <div className="buttons">
          <button onClick={() => increasePoints(mana, maxManaPoints, setMana)}>+ mana</button>
          <button onClick={() => decreasePoints(mana, setMana)}>- mana </button>
        </div>
      </div>
      <div className="status-info">
        <p>Armor: {armor}</p>
      </div>
    </div>
  )
}
