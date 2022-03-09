import React from "react";
import LibrarySongs from "./LibrarySongs";
function Library({
  songs,
  setCurrentSong,
  isPlaying,
  audioRef,
  libraryStatus,
}) {
  return (
    <section className={`library ${libraryStatus ? "library-active" : ""}`}>
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySongs
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            audioRef={audioRef}
            key={song.id}
          />
        ))}
      </div>
    </section>
  );
}
export default Library;
