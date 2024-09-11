import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/Search";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  var filteredCoins = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log("ERROR>>>", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={filteredCoins} />
    </div>
  );
}

export default DashboardPage;
