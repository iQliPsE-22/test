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
        className="bg-gray-200 p-4 rounded w-full text-center p-2focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-3 bg-black text-white place-items-center">
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
