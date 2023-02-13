import './App.css';
import RPGIcon from './assets/rpg-icon.png'
import { RpgForm } from './components/RpgFom/RpgForm';
import { Identification } from './components/Identification/Identification';
import { Life } from './components/Life/Life';
import { useInput } from './components/CustomHooks/useInput';
import { useLocalStorage } from './components/CustomHooks/useLocalStorage';
import { useState } from 'react';

function App() {
  const [confirm, setConfirm] = useState(false)
  const [formValues, setFormValues] = useState({})
  
  const characterInfo = {
    name: '',
    lastName: '',
    xp: 0,
    level: 0,
    characterClass: ''
  }
  const character = useLocalStorage("rpg_form", characterInfo)

  const {
    value: name,
    setValue: setName,
    handleInput: handleName,
  } = useInput(formValues?.name ?? "Name")
  
  const {
    value: lastName,
    setValue: setLastName,
    handleInput: handleLastName,
  } = useInput(formValues?.name ?? "Last Name")

  const {
    value: xp,
    setValue: setXp,
    handleInput: handleXp,
  } = useInput(formValues?.xp ?? 0)

  const {
    value: level,
    setValue: setLevel,
    handleInput: handleLevel,
  } = useInput(formValues?.xp ?? 0)

  const {
    value: characterClass,
    setValue: setCharacterClass,
    handleInput: handleClass,
  } = useInput(formValues?.xp ?? "class")
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    const elements = event.target.elements

    const newValues = {
      name: elements.name.value,
      lastName: elements.lastName.value,
      xp: elements.xp.value,
      level: elements.level.value,
      characterClass: elements.characterClass.value
    }
    
    setFormValues(newValues) 

    character.saveValue(newValues)
  }

  const confirmReset = (event) => {   
    event.preventDefault()
    setConfirm(true)
  }

  const resetAll = (event) => {
    event.preventDefault()

    character.resetValue("rpg_form")
    setConfirm(false)

    setName('Name')
    setLastName('Last Name')
    setCharacterClass('')
    setLevel(0)
    setXp(0)
    setFormValues(characterInfo)
  }

 
  return (
    <div className="App">
      <h1>Character sheet</h1>
      <img className='icon' src={RPGIcon} alt='RPG Icon'/>
      <RpgForm 
      name={name}
      handleName={handleName}
      lastName={lastName} 
      handleLastName={handleLastName}
      xp={xp} 
      handleXp={handleXp} 
      level={level} 
      handleLevel={handleLevel}
      characterClass={characterClass} 
      handleClass={handleClass}
      formValues={formValues}
      handleSubmit={handleSubmit}
      confirm={confirm}
      setConfirm={setConfirm}
      confirmReset={confirmReset}
      resetAll={resetAll} />
      <Identification name={name} lastName={lastName} characterClass={characterClass} />
      <div className="info">
        <Life level={level} xp={xp} />
      </div>
    </div>
  );
}

export default App;
