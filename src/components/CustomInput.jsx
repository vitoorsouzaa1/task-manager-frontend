/* eslint-disable no-undef */
export const CustomInput = ({ label }) => {
  return (
    <div className="custom-input-container">
      <input type="text" className="custom-input" />

      {label ? (
        <label
          className={`${
            value.length !== '' ? 'shrink' : ''
          } custom-input-label`}
        ></label>
      ) : null}
    </div>
  )
}
