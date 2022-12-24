import './Home.scss'

import { SideBar } from '../components/SideBar'
import { Tasks } from '../components/Tasks'

export const Home = () => {
  return (
    <div className="home-container">
      <SideBar />
      <Tasks />
    </div>
  )
}
