import { CustomButton } from './CustomButton'

import './Sidebar.scss'
import logo from '../assets/images/logo_fsc.png'

export const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="FSC" />
      </div>
      <div className="sign-out">
        <CustomButton>Sign Out</CustomButton>
      </div>
    </div>
  )
}
