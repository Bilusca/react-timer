import { HeaderContianer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '@/assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContianer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContianer>
  )
}
