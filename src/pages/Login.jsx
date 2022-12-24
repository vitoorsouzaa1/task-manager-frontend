import { useNavigate } from 'react-router-dom'

import { CustomButton } from '../components/CustomButton'

import logo from '../assets/images/logo-2.png'

import './Login.scss'

export const Login = () => {
  const navigate = useNavigate()

  const handleSignInClick = () => {
    navigate('/')
  }

  return (
    <div className="login-container">
      <img src={logo} alt="FSC-2" />
      <div className="button-container">
        <CustomButton onClick={handleSignInClick}>Login</CustomButton>
      </div>
    </div>
  )
}
