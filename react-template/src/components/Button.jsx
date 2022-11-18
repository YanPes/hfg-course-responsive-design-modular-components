import './Button.css';


export const ButtonVariants = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary:   'tertiary'
  }

export const Button = (props) => {
    const variantSyling = props.variant== ButtonVariants.primary ? ButtonVariants.primary ? ButtonVariants.secondary : ButtonVariants.tertiary ;
    
    return (

        <button className={variantStyling}>{props.text}</button>

    )


}