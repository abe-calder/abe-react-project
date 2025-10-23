import data from '../../../data/Rare-Troops.ts'

function RareTroopDisplay() {
  data
  return (
    <>
      <div>
        <h2>Rare Troops</h2>
        {data.map((raretroop: { id: string; path: string; alt: string }) => {
          return (
            <img
              className="trooopps"
              key={raretroop.id}
              src={raretroop.path}
              alt={raretroop.alt}
            ></img>
          )
        })}
      </div>
    </>
  )
}

export default RareTroopDisplay
