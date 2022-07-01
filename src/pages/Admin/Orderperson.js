import React from "react";

const Orderperson = ({orderConformed}) =>{
    return(
        <div>
            { orderConformed.map((eO, index) =>{
                return(
                    <div key={index}>
                        
                    </div>
                )
            })
            }
            {
                console.log(orderConformed)
            }
        </div>
    )
}
export default Orderperson;