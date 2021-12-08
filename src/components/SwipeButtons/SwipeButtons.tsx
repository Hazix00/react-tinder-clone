import { ReactElement } from 'react'
import './SwipeButtons.scss'

import { 
    Replay as ReplayIcon,
    Close as CloseIcon,
    StarRate as StarRateIcon,
    Favorite as FavoriteIcon,
    FlashOn as FlashOnIcon
} from '@mui/icons-material'
import { IconButton } from '@mui/material'

export default function SwipeButtons(): ReactElement {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}
