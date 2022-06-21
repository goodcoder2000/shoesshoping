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
                                <FacebookIcon style={{color: "#F8F9FA"}}/>
                            </div>
                            <div className="cover-media">
                                <TwitterIcon style={{color: "#F8F9FA"}} />
                            </div>
                            <div>
                                <InstagramIcon style={{color: "#F8F9FA"}}/>
                            </div>
                        </div>
        </div>
    )
}
export default Cfooter;