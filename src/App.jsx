import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import SearchedProfile from "./components/SearchedProfile";

import officersData from "../data/officers.json";

import "react-awesome-slider/dist/styles.css";
import "./styles/main.css";

export default function App() {
  const handle = useFullScreenHandle();
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const [officers, setOfficers] = useState({});

  const getOfficers = (search) => {
    return officersData
      .filter((officer) =>
        officer.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort(
        (prev, next) =>
          prev.name.toLowerCase().indexOf(search.toLowerCase()) -
          next.name.toLowerCase().indexOf(search.toLowerCase())
      );
  };

  useEffect(() => {
    if (search.length > 0) {
      setSearched(true);
      setOfficers(getOfficers(search));
    } else {
      setSearched(false);
      setOfficers({});
    }
  }, [search]);

  return (
    <div>
      <button className="fullscreen-btn" onClick={handle.enter} style={{display:'none'}}>
        Enter fullscreen
      </button>
      <FullScreen handle={handle}>
        <Navbar search={search} setSearch={setSearch} />
        {searched ? <SearchedProfile officers={officers} /> : <Dashboard />}
      </FullScreen>
    </div>
  );
}
