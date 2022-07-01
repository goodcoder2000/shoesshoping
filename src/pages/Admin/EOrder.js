import React from "react";

const EOrder = ({title, discription, img, price, category}) =>{
    return(
        <div className="Eorder">
            <div className="admin-current-title">
                <h3>{title}</h3>
                <h3>{category}</h3>
                <h4>${price}</h4>
            </div>

            <div className="admin-current-body">
                <div className="admin-current-img">
                    <img width="100%" src={img} alt="image"/>
                </div>

                <div>
                    <p>{discription}</p>
                </div>
            </div>            
        </div>
    )
}
export default EOrder;