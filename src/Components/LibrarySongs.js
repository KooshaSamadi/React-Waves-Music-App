import React, { useState } from "react";

function LibrarySongs({ song, setCurrentSong, isPlaying, audioRef, songs }) {
  const songPlayerHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) {
      audioRef.play();
    }
    songs.map((audio) => {
      if (audio.id === song.id) {
        audio.active = true;
      } else {
        audio.active = false;
      }
    });
  };
  return (
    <div
      onClick={songPlayerHandler}
      className={`library-songs ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="cover" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
export default LibrarySongs;
