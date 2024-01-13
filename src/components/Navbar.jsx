import PropTypes from "prop-types";
import "../styles/navbar.css";

export default function Navbar({ search, setSearch }) {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        {/* @TODO */}
        <img src="/images/logo.webp" alt="logo" />
      </div>

      <div className="navbar-title"></div>

      <div className="search-container">
        <img
          src={"/images/search.svg"}
          alt="search icon"
          style={{ marginLeft: "10px", width: "7%" }}
        />
        <input
          type="text"
          className="search-input"
          name="search"
          placeholder="Search by name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <img
          src={"/images/xmark.svg"}
          alt="search icon"
          style={{ marginRight: "10px", width: "7%" }}
          onClick={() => setSearch("")}
        />
      </div>
    </div>
  );
}

Navbar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
