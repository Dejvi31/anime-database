import React, { useEffect, useState } from "react";
import Popular from "./Popular";
import { useGlobalContext } from "../context/global";
import Upcoming from "./Upcoming";
import Airing from "./Airing";

const Homepage = () => {
  const { handleSubmit, search, searchAnime, handleChange, getUpcomingAnime, getAiringAnime, getPopularAnime } =
    useGlobalContext();
  const [rendered, setRendered] = useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />
      case "upcoming":
        return <Upcoming rendered={rendered} />
      default:
        return <Popular rendered={rendered} />;
    }
  };
  return (
    <div style={{backgroundColor: "#EDEDED"}}>
      <header>
        <div className="logo">
          <h1>
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>
        <div className="search-container">
          <div className="filter-btn popular-filter">
            <button onClick={() => 
              setRendered("popular")
              }>
                Popular
                <i className="fas fa-fire"></i>
                </button>
          </div>
          <form onSubmit={handleSubmit} className="search-form">
            <div className="input-control">
              <input
                type="text"
                placeholder="Search Anime "
                value={search}
                onChange={handleChange}
              />
              <button type="submit">
                Search
              </button>
            </div>
          </form>
          <div className="filter-btn popular-filter">
            <button onClick={() => {
              setRendered("airing")
              getAiringAnime()
              }}> Airing</button>
          </div>
          <div className="filter-btn popular-filter">
            <button onClick={() => {
              setRendered("upcoming")
              getUpcomingAnime()
          }}> Upcoming</button>
          </div>
        </div>
      </header>
      {switchComponent()}
    </div>
  );
};

export default Homepage;
