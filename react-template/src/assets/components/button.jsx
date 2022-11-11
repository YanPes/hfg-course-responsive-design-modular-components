import './button.css';

export const Variants = {
  primary: 'primary',
  secondary: 'secondary'
};

export const Button = ({text, variant}) => {
  return(
    <button 
    className={variant === Variants.primary ? Variants.primary : Variants.secondary}>{text}
    </button>
  );
};