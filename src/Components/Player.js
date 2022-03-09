import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
function Player({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
}) {
  //Updating Song UI in Library cuz of skipping buttons
  useEffect(() => {
    songs.map((audio) => {
      if (audio.id == currentSong.id) {
        audio.active = true;
      } else {
        audio.active = false;
      }
    });
  }, [currentSong]);
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const timeFormatterHandler = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const inputDragHandler = (e) => {
    var inputValue = e.target.value;
    audioRef.current.currentTime = inputValue;
  };

  const skipAudioHandler = async (direction) => {
    let currentIndex = songs.findIndex((audio) => audio.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else {
      if (currentIndex == 0) {
        await setCurrentSong(songs[songs.length - 1]);
        audioPlayingHandler(isPlaying);
        //retrun=> jumps out of a esle statement
        return;
      }
      await setCurrentSong(songs[currentIndex - 1]);
    }
    await audioPlayingHandler(isPlaying);
  };
  const audioPlayingHandler = (isPlaying) => {
  
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  //Styles
  const styleInput = {
    background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`,
  };
  return (
    <section className="container-fluid player">
      <div className="time-control row">
        <p>{timeFormatterHandler(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={inputDragHandler}
          className="col-sm"
          style={styleInput}
        />
        <p>{timeFormatterHandler(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-backward"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipAudioHandler("skip-backward")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={() => skipAudioHandler("skip-forward")}
        />
      </div>
      <div id="waveform"></div>
    </section>
  );
}
export default Player;
