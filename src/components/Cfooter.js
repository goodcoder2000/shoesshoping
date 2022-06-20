import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Cfooter = () =>{
    return(
        <div className="cfooter">
               
               
            {/* social media link icon */}
            <div className="cover-icon-container">
                            <div>
                                <FacebookIcon/>
                            </div>
                            <div className="cover-media">
                                <TwitterIcon />
                            </div>
                            <div>
                                <InstagramIcon/>
                            </div>
                        </div>
        </div>
    )
}
export default Cfooter;