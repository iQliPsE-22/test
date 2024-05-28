import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");
  const handleFetchData = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await response.json();
      console.log(data);
      setApiData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const filteredData = apiData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="bg-white p-3 rounded-lg w-full text-center md:w-1/2 mx-auto lg:w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Beers"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-3 bg-gray-500 text-white place-items-center">
        {filteredData.map((item, key) => (
          <Card
            key={key}
            price={item.price}
            name={item.name}
            rating={item.rating}
            image={item.image}
            index={key}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
