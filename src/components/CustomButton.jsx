import './CustomButton.scss'

export const CustomButton = ({ onClick, children }) => {
  ;<div className="custom-button-container" onClick={onClick}>
    {children}
  </div>
}
