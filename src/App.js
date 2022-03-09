import React, { useState, useRef } from "react";
//Adding Components
import Player from "./Components/Player";
import Song from "./Components/Song";
import Library from "./Components/Library";
import Nav from "./Components/Nav";
import Copyright from "./Components/Copyright";
//Importing our Data sets
import appData from "./appData";
import "./Styles/app.scss";

function App() {
  //Ref
  const audioRef = useRef(null);

  //States
  const [songs] = useState(appData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  //****fasle=close****
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Functions
  const timeUpdateHandler = (e) => {
    var currentTime = e.target.currentTime;
    var duration = e.target.duration;
    //   setSongInfo({...songInfo,currentTime, duration });
    setSongInfo({ currentTime, duration });
  };
  const songEndedHanlder = async () => {
    let currentIndex = songs.findIndex((audio) => audio.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  return (
    <main className={`App ${libraryStatus ? "app-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongInfo={setSongInfo}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        audioRef={audioRef.current}
        libraryStatus={libraryStatus}
      />
      <Copyright />
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndedHanlder}
      ></audio>
    </main>
  );
}

export default App;
