import './Life.css'

export const Life = ({life, mana}) => {
  return (
    <div className = 'life'>
      <p>Life: {life}</p>
      <p>Mana: {mana}</p>
    </div>
  )
}
