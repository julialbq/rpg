import './App.css';
import RPGIcon from './assets/rpg-icon.png'
import { RpgForm } from './components/RpgFom/RpgForm';
import { Identification } from './components/Identification/Identification';
import { Life } from './components/Life/Life';
import { Level } from './components/Level/Level';
import { useInput } from './components/CustomHooks/useInput';
import { useLocalStorage } from './components/CustomHooks/useLocalStorage';

function App() {  
  const {
    value: formValues,
    setValue: setFormValues,
    resetValue: resetFormValues
  } = useLocalStorage("rpg_form", "values")

  const {
    value: name,
    handleInput: handleName,
  } = useInput(formValues?.name ?? "Name")
  
  const {
    value: lastName,
    handleInput: handleLastName,
  } = useInput(formValues?.name ?? "Last Name")

  const {
    value: xp,
    handleInput: handleXp,
  } = useInput(formValues?.xp ?? 0)

  const {
    value: mana,
    handleInput: handleMana,
  } = useInput(formValues?.xp ?? 0)

  const {
    value: level,
    handleInput: handleLevel,
  } = useInput(formValues?.xp ?? 0)

  const {
    value: life,
    handleInput: handleLife,
  } = useInput(formValues?.xp ?? 0)

  const {
    value: characterClass,
    handleInput: handleClass,
  } = useInput(formValues?.xp ?? "class")
 
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
      mana={mana} 
      handleMana={handleMana}
      life={life} 
      handleLife={handleLife}
      characterClass={characterClass} 
      handleClass={handleClass}
      formValues={formValues}
      setFormValues={setFormValues}
      resetFormValues={resetFormValues} />
      <Identification name={name} lastName={lastName} characterClass={characterClass} />
      <div className="info">
        <Life life={life} mana={mana} />
        <Level level={level} xp={xp} life={life} />
      </div>
    </div>
  );
}

export default App;
