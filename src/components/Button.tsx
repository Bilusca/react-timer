import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './Button.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
}

export function Button({ variant = 'primary', ...rest }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      Enviar
    </ButtonContainer>
  )
}
