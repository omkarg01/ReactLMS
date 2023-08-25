import React, { useState, useEffect } from "react";

function DropDownComponent() {
  const [selectedOption, setSelectedOption] = useState("comments");
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch data based on the selected option
    const fetchData = async () => {
      const reponse = await fetch(
        `https://jsonplaceholder.typicode.com/${selectedOption}`
      );
      const data = await reponse.json();
      setData(data);
    };

    fetchData();
    
  }, [selectedOption]); // The dependency array contains 'selectedOption'

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="comments">Comments</option>
        <option value="users">Users</option>
      </select>
      <div>
        <h2>Data for {selectedOption}:</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropDownComponent;
