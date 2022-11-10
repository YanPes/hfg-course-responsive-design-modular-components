import './Button.css';

export const ButtonVariants = {
  primary: 'primary',
  secondary: 'secondary'
}

export const Button = (props) => {
  const variantStyling = props.variant === ButtonVariants.primary ? ButtonVariants.primary : ButtonVariants.secondary;

  return(
    <button className={variantStyling}>{props.text}</button>
  )
}
