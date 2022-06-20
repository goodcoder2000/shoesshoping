import React,{useState, useEffect} from "react";

const Usefetch = (url) =>{
    const [data, setData] = useState(null);
    const [preLoading, setPreloading] = useState(true);

    useEffect(() =>{

        fetch(url)
        .then((res) =>{
            return res.json();
        })
        .then((datas) =>{
            setData(datas);
            setPreloading(false)
        })
        .catch( err =>console.log(err.message))
    }, [])

    return { data, preLoading }
}
export default Usefetch;