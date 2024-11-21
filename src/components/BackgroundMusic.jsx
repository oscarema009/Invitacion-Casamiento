import React, { useRef, useState } from 'react';
import './backgroundmusic.css';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import backgroundSong from '../assets/song.mp3';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleMusicPlay = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="background-music">
      <audio ref={audioRef} src={backgroundSong} loop />
      {!isPlaying ? (
        <button className="music-button initial" onClick={handleMusicPlay}>
          Activa la música 🎵
        </button>
      ) : (
        <div className="music-controls">
          <button className="music-button" onClick={handleMusicPlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="music-button" onClick={toggleMute}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;
