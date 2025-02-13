import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <Link to="/players">
          <h1>Puppy Bowl</h1>
        </Link>
        <NavBar />

        <Routes>
          <Route path="/players" element={<AllPlayers />} />
          <Route path="/new-player" element={<NewPlayerForm />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="*" element={<AllPlayers />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
