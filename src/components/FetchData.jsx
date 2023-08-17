import React, { useState } from "react";

const FetchData = () => {
  const [data, setData] = useState();

  const fetchData = async () =>{
    const response = await fetch("https://api.apis.guru/v2/list.json")
    const data = await response.json()
    setData(data)
    console.log(data);
  }
  return <div>
    {data}
    <button onClick={fetchData}>Fetch Data</button>
  </div>;
};

export default FetchData;
