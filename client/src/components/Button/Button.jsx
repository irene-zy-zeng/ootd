import "./Button.scss";

const Button = ({type,buttonVariant, buttonIcon, iconAltText, buttonLabel, onClickAction,}) => {
  return (
    <button type={type} onClick={onClickAction} className={`button button--${buttonVariant}`}>
        {buttonIcon && <img src={buttonIcon} alt={iconAltText} className="button__icon"/>}
        <h3 className={`label-text button__label`}>{buttonLabel}</h3>
    </button>
  )
}

export default Button
