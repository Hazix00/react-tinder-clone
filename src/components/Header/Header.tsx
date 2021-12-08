import { ReactElement } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'
import { IconButton } from '@mui/material'

import './Header.scss'

export default function Header(): ReactElement {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large"/>
      </IconButton>
      
      <img className="header__logo"
        src="./img/Tinder_logo (Small).png"
        alt="" />

      <IconButton>
        <ForumIcon className="header__icon" fontSize="large"/>
      </IconButton>
    </div>
  )
}
