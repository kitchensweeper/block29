import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function SinglePlayer() {
  const [player, setPlayers] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPlayers(json.data.player);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="single-player-card">
      <img src={player?.imageUrl} alt={player?.name} />
      <h2>{player?.name}</h2>
      <p>Breed: {player?.breed}</p>
      <p>Status: {player?.status}</p>
      <p>ID: {player?.id}</p>
      <Link to="/players">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default SinglePlayer;
