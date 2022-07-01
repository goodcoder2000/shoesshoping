import React from "react";

const EpersonO = ({title, count, img, price, time}) =>{
    return(
        <div className="Eorder">
            <div className="admin-current-title">
                <h3>{title}</h3>
                <h3>count = {count}</h3>
                <h4>${price}</h4>
                <h4>{count}X{price} = {count*price}</h4>
            </div>

            <div className="admin-current-body">
                <div className="admin-ordered-see">
                    <img width="100%" src={img} alt="image"/>
                </div>

                <div>
                    {time}
                </div>
            </div>            
        </div>
    )
}
export default EpersonO;