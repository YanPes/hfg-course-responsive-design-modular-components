import './Button.css';

export const ButtonVariants = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
}

export const Button = ({variant, text, onClick}) => {
  const handleVariantStyling = () => {
    if (variant === ButtonVariants.primary) return 'primary';
    if (variant === ButtonVariants.secondary) return 'secondary';
    if (variant === ButtonVariants.tertiary) return 'tertiary';
    return '';
  }

  return <button onClick={onClick} className={handleVariantStyling()}>{text}</button>
}
