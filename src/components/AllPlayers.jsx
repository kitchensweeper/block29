import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPlayers(json.data.players);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (id) => {
    navigate(`/players/${id}`);
  };

  const deletePlayer = (id) => {
    try {
      const result = fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`,
        {
          method: "DELETE",
        }
      );
      setPlayers(players.filter((player) => player.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const searchResult = (e) => {
    e.preventDefault();
    const searchBar = new FormData(e.target);
    const res = players.filter((player) =>
      player.name.toLowerCase().includes(searchBar.get("search").toLowerCase())
    );

    setPlayers(res);
  };

  return (
    <>
      <div className="body">
        <div className="search-bar">
          <form onSubmit={searchResult}>
            <label>
              <input type="text" name="search" />
            </label>
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="player-container">
          {players.map((player) => {
            return (
              <div className="player-card" key={player.id}>
                <img src={player.imageUrl} alt={player.name} />
                <h3>{player.name}</h3>
                <p>{player.breed}</p>
                <Link to={`/players/${player.id}`}>
                  <button>Player Details</button>
                </Link>

                <button
                  onClick={() => {
                    deletePlayer(player.id);
                  }}
                >
                  Delete Player
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllPlayers;
