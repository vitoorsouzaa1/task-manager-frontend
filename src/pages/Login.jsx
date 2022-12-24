import { CustomButton } from '../components/CustomButton'

import logo from '../assets/images/logo-2.png'

import './Login.scss'

export const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="FSC-2" />
      <div className="button-container">
        <CustomButton>Login</CustomButton>
      </div>
    </div>
  )
}
