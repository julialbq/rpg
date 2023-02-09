import './Identification.css'

//const icons = [artificer, barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard]

export const Identification = ({name, lastName, characterClass}) => {

  const iconChoice = `%PUBLIC_URL%/classIcons/${characterClass}.jpeg` 

  return (
    <div>
      <h2>Character name: {name} {lastName}</h2>  
    </div>
  )
}
