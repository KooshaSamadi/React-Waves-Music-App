import React from "react";

function Song({ currentSong }) {
  return (
    <section className="container-fluid song">
      <img src={currentSong.cover} alt="cover" />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </section>
  );
}
export default Song;
