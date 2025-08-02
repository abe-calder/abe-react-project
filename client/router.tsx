import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import CommonTroopDisplay from './components/TroopsDisplay/CommonTroopDisplay'
import RareTroopDisplay from './components/TroopsDisplay/RareTroopsDisplay'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/troops/common" element={<CommonTroopDisplay />} />
    <Route path='/:troops/rare' element={<RareTroopDisplay />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
