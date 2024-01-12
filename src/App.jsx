import "./App.css";
import { useState } from "react";
import Profile from "./Profile";
import data from "../data/data.json";

function App() {
  const [isSelected, setIsSelected] = useState();
  const [selectedOfficer, setSelectedOfficer] = useState({});

  const [search, setSearch] = useState("");

  const formatedData = (search) => {
    return data.filter(
      (officer) =>
        officer.name.toLowerCase().includes(search.toLowerCase()) ||
        officer.id.toString().toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleClose = () => {
    setSelectedOfficer({});
    setIsSelected(false);
  };

  if (isSelected)
    return <Profile officer={selectedOfficer} handleClose={handleClose} />;

  return (
    <>
      <div style={{ height: "10vh" }} className="flex">
        <div
          className="flex p-6 dark:bg-gray-900 dark:text-gray-100 gap-10"
          style={{ flex: 1 }}
        >
          LOGO
        </div>

        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full p-3">
              <div
                className="relative "
                style={{ backgroundColor: "#cac9c6", borderRadius: "10px" }}
              >
                <i className="absolute fa fa-search text-black-400 top-5 left-4"></i>
                <input
                  type="text"
                  className="bg-transparent h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                  name=""
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  value={search}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex from-purple-100 via-red-300 to-indigo-500 bg-gradient-to-br flex-wrap"
        style={{ minHeight: "90vh" }}
      >
        {formatedData(search).map((officer) => {
          return (
            <div
              className="max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl m-10 flex items-center justify-center"
              style={{
                width: "300px",
                height: "300px",
                color: "black",
                fontSize: "50px",
              }}
              onClick={() => {
                setIsSelected(true);
                setSelectedOfficer(officer);
              }}
              key={officer.createdAt}
            >
              {officer.id}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
