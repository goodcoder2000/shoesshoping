import dayjs from "dayjs";
import React from "react";
import EOrder from "./EOrder";
import EpersonO from "./EpersonO";

const SortTime = ({name, orderConformed, index}) =>{
    let date = dayjs().format('DD/MM/YYYY');
    return(
        <div className="admin-ordered-each-person">
            <h3>{index+1}.{name}</h3>
            { orderConformed.filter((yearMonthAndDay) => yearMonthAndDay.date === date ) .map((eO,index) => <EpersonO key={index} title={eO.title} count={eO.count} img={eO.img} price={eO.price} time={eO.time}/>) }
            { console.log(date)}
        </div>
    )
}
export default SortTime;