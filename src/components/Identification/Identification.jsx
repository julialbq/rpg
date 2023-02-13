import './Identification.css'

export const Identification = ({name, lastName, characterClass}) => {

  return (
    <div className='identification'>
      <h2>Character name: {name} {lastName}</h2> 
      <img src={`${process.env.PUBLIC_URL}/classIcons/${characterClass}.jpeg`} alt="" />
    </div>
  )
}
