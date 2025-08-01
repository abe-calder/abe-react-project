import data from '../../data/Common-Troops.ts'

function TroopDisplay() {
  return (
    <>
      <div>
        <h2>Common Troops</h2>
        {data.map((troop: { id: string, path: string, alt: string }) => {
            return (
              <img className="trooopps" key={troop.id} src={troop.path} alt={troop.alt} draggable="true"></img>
            )
          })}
      </div>
    </>
  )
}

export default TroopDisplay
