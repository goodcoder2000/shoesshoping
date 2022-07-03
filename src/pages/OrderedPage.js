import React from "react";
import AdminNav from "../components/AdminNav";
import Usefetch from "../components/Usefetch";
import EpersonO from "./Admin/EpersonO";
import dayjs from "dayjs";

const OrderedPage = () =>{
    const { data } = Usefetch('https://api-shoes-testing.onrender.com/users');
    let date = dayjs().format('DD/MM/YYYY');

    let result = [];
    const callf = () =>{
    for(let i=0; i<data.length; i++){
      for(let j=0; j<data[i].orderConformed.length; j++){
        result.push({name: data[i].name,
          userId: data[i]._id, 
          count: data[i].orderConformed[j].count,
          title: data[i].orderConformed[j].title, 
          date: data[i].orderConformed[j].date,
          delivered: data[i].orderConformed[j].delivered,
          img: data[i].orderConformed[j].img, 
          price: data[i].orderConformed[j].price, 
          time: data[i].orderConformed[j].time,
          date: data[i].orderConformed[j].date, 
          _id: data[i].orderConformed[j]._id, 
          index: j});
      }
    }
}

  data && callf();

    return(
        <div>
            <AdminNav/>
            <div className="orderpage">
                { console.log(result)}
                { result.filter((eP) =>eP.date === date && eP.delivered !==true).sort((a,b) =>a.time - b.time).map((ex,index) =><EpersonO key={index} name={ex.name} userId={ex.userId} _id={ex._id} title={ex.title} img={ex.img} price={ex.price} count={ex.count} time={ex.time} date={ex.date} indexpoint={ex.index}/>)}
            </div>
        </div>
    )
}
export default OrderedPage;