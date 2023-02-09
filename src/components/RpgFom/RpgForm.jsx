import './RpgForm.css'
import { useMemo, useState } from "react"

const classes = ['artificer', 'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard']

export const RpgForm = ({name, 
handleName,
lastName,
handleLastName,
xp,
handleXp,
level,
handleLevel,
mana,
handleMana,
life,
handleLife,
characterClass,
handleClass,
formValues,
setFormValues,
resetFormValues
}) => {

  const [maxLifePoints, setMaxLifePoints] = useState(0)
  const [maxManaPoints, setMaxManaPoints] = useState(0)
  const [confirm, setConfirm] = useState(false)

  useMemo(() => {
    const newMaxLifePoints = level * 10
    setMaxLifePoints(newMaxLifePoints)
    return maxLifePoints
  }, [level])

  useMemo(() => {
    const newMaxManaPoints = (+level * 2) + +xp
    setMaxManaPoints(newMaxManaPoints)
    return maxManaPoints
  }, [level, xp])

  const handleSubmit = (event) => {
    event.preventDefault()

    const elements = event.target.elements

    formValues = {
      name: elements.name.value,
      lastName: elements.lastName.value,
      xp: elements.xp.value,
      level: elements.level.value,
      life: elements.life.value,
      characterClass: elements.characterClass.value
    }

    setFormValues(formValues)
  }

  const confirmReset = (event) => {   
    event.preventDefault()
    setConfirm(true)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label name='name'>
          Name: 
        <input id='name' placeholder="Name" value={name} onChange={handleName}/>
        </label>
        <label name='lastName'>
          Last name:
          <input id='lastName' placeholder="Last name" value={lastName} onChange={handleLastName}/>
        </label>
        <label name='level'>
          Level:
          <input type='number' min={0} id='level' placeholder="Level" value={level} onChange={handleLevel}/>
        </label>
        <label name='xp'>
          XP:
          <input type='number' min={0} id='xp' placeholder="XP" value={xp} onChange={handleXp}/>
        </label>
        <label name='life'>
          Life:
          <input type='number' max={maxLifePoints} min={0} id='life' placeholder="Life" value={life} onChange={handleLife}/>
        </label>
        <label name='mana'>
          Mana:
          <input type='number' max={maxManaPoints} min={0} id='mana' placeholder="Mana" value={mana} onChange={handleMana}/>
        </label>
        <label name='characterClass'>
          Class:
          <select name="characterClass" id="characterClass" value={characterClass} onChange={handleClass}>
            <option value="">Select a class</option>
            {classes.map((characterClass) => <option key={characterClass} value={characterClass}>{characterClass}</option>)}
          </select>
        </label>
        <button type="submit">Save</button> 
        <button onClick={(event) => confirmReset(event)}>Reset</button> 
        {confirm == true &&
          <>
            <p>Are you sure you want to reset the form and data?</p>
            <button onClick={(event) => {
              event.preventDefault()
              resetFormValues(formValues)
              setConfirm(false)
            }}>Yes</button>
            <button onClick={(event) => {
              event.preventDefault()
              setConfirm(false)
            }} >Cancel</button>
          </>
        }
      </form>
    </div>
  )
}
