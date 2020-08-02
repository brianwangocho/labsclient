import React from 'react'
import "./swipebuttons.css";
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavouriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons(){

    return(
        <div className="swipe_buttons">
            <IconButton>
            <ReplayIcon  fontSize="large"/>
            </IconButton>
            <IconButton>
            <CloseIcon fontSize="large"/>
            </IconButton>
           <IconButton>
           <StarRateIcon fontSize="large"/>
           </IconButton>
           <IconButton>
           <FavouriteIcon fontSize="large"/>
           </IconButton>
           <IconButton>
           <FlashOnIcon fontSize="large"/>
           </IconButton>
          
            
        </div>
    )


}
export default SwipeButtons