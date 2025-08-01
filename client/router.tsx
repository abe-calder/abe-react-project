import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import TroopDisplay from './components/TroopDisplay'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/:troopName" element={<TroopDisplay />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
