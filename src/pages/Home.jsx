import './Home.scss'

import { Routes } from 'react-router-dom'
import { SideBar } from '../components/SideBar'
import { Tasks } from '../components/Tasks'

export const Home = () => {
  return (
    <Routes>
      <div className="home-container">
        <SideBar />
        <Tasks />
      </div>
    </Routes>
  )
}
