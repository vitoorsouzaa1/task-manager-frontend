import './CustomButton.scss'

export const CustomButton = ({ onClick, children }) => {
  return (
    <div className="custom-button-container" onClick={onClick}>
      {children}
    </div>
  )
}
