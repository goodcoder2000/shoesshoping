import React from "react";
import AdminNav from "../components/AdminNav";
import Usefetch from "../components/Usefetch";
import EpersonO from "./Admin/EpersonO";
import SortTime from "./Admin/SortTime";
import dayjs from "dayjs";

const OrderedPage = () =>{
    const { data } = Usefetch('https://api-shoes-testing.onrender.com/users');
    let date = dayjs().format('DD/MM/YYYY');

    let result = [];
  const callf = () =>{
    for(let i=0; i<data.length; i++){
      for(let j=0; j<data[i].orderConformed.length; j++){
        result.push({name: data[i].name, count: data[i].orderConformed[j].count, date: data[i].orderConformed[j].date, img: data[i].orderConformed[j].img, price: data[i].orderConformed[j].price, time: data[i].orderConformed[j].time, _id: data[i].orderConformed[j]._id});
      }
    }
}

  data && callf();

    return(
        <div>
            <AdminNav/>
            <div className="orderpage">
                { result.filter((eP) =>eP.date === date).sort((a,b) =>a.time - b.time).map((ex,index) =><EpersonO key={index} name={ex.name} title={ex.title} img={ex.img} price={ex.price} count={ex.count} time={ex.time}/>)}
                { console.log(result)}
             </div>
        </div>
    )
}
export default OrderedPage;