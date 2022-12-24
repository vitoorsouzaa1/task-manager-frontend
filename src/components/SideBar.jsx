import { useNavigate } from 'react-router-dom'

import { CustomButton } from './CustomButton'

import './Sidebar.scss'
import logo from '../assets/images/logo_fsc.png'

export const SideBar = () => {
  const navigate = useNavigate()

  const handleSignOutClick = () => {
    navigate('/login')
  }

  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="FSC" />
      </div>
      <div className="sign-out">
        <CustomButton onClick={handleSignOutClick}>Sign Out</CustomButton>
      </div>
    </div>
  )
}
