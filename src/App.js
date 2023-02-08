import './App.css';
import { RpgForm } from './components/RpgFom/RpgForm';
import { Identification } from './components/Identification/Identification';
import { Life } from './components/Life/Life';
import { Level } from './components/Level/Level';
import { useInput } from './components/CustomHooks/useInput';

function App() {
  const formValues = window.localStorage.getItem('rpg_form')
  
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
  } = useInput(formValues?.xp ?? 0)
 
  return (
    <div className="App">
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
      handleClass={handleClass} />
      <Identification name={name} lastName={lastName} />
      <div className="info">
        <Life life={life} mana={mana} />
        <Level level={level} xp={xp} life={life} />
      </div>
    </div>
  );
}

export default App;
