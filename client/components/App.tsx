import { Outlet } from 'react-router'

function App() {
  return (
    <div className='main'>
      <div className='header'>
        <h1>Clash Royale Deck Builder</h1>
      </div>
      <div>
        <img className='deck1' src='public/troopss/deck-builder-v0-6evmnm1ventd1.jpg'></img>
        <img className='deck2' src='public/troopss/deck-builder-v0-6evmnm1ventd1.jpg'></img>
      </div>
      <div className='main'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
