import { createContext, useState, useEffect, useRef } from "react";
import { db } from "../stores/Firebase";
import { collection, getDocs } from "firebase/firestore";

export const SongContext = createContext({
  idx: -1,
  songs: [],
});

const SongContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState();
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef();

  const [idx, setIdx] = useState(-1);

  const getSongs = async () => {
    const songsRef = collection(db, "songs");
    const querySnapshot = await getDocs(songsRef);

    let tempSongs = [];
    querySnapshot.forEach((doc) => {
      tempSongs = [
        ...tempSongs,
        {
          id: doc.id,
          ...doc.data(),
        },
      ];
    });
    setSongs(tempSongs);
  };

  const playSong = (song, idx) => {
    setCurrentSong(song);
    setIdx(idx);
    setPlaying(true);
    const audio = audioRef.current;
    audio.src = song.link;
    audio.play();
  };

  const continuePlay = () => {
    const audio = audioRef.current;
    if (idx === -1) {
      playSong(songs[0], 0);
      return;
    } else {
      audio.play();
    }
    setPlaying(true);
  };

  const pauseSong = () => {
    const audio = audioRef.current;
    setPlaying(false);
    audio.pause();
  };

  const nextHandler = () => {
    const length = songs.length - 1;
    let temp = idx + 1;
    setPlaying(true);
    if (temp > length) {
      temp = 0;
    }
    setIdx(temp);
    setCurrentSong(songs[temp]);
    const audio = audioRef.current;
    audio.src = songs[temp].link;
    audio.play();
  };

  const previousHandler = () => {
    const length = songs.length - 1;
    let temp = idx - 1;
    setPlaying(true);
    if (temp < 0) {
      temp = length;
    }
    setIdx(temp);
    setCurrentSong(songs[temp]);
    const audio = audioRef.current;
    audio.src = songs[temp].link;
    audio.play();
  };

  // Updating the Progress Bar
  const updateProgressBar = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    // const timing = initialTiming(Math.floor(currentTime));
    // setCurrentTiming(timing);
    // const songLength = initialTiming(Math.floor(duration));
    // setSongLen(songLength);
    const progressLength = (currentTime / duration) * 100;

    if (progressLength === 100) {
      nextHandler();
    }

    // barRef.current.style.width = progressLength + '%';
  };

  useEffect(() => {
    getSongs();
  }, []);

  const value = {
    songs,
    playSong,
    currentSong,
    previousHandler,
    nextHandler,
    playing,
    pauseSong,
    continuePlay,
  };

  return (
    <SongContext.Provider value={value}>
      <div>
        <audio ref={audioRef} src="" onTimeUpdate={updateProgressBar} />
        {children}
      </div>
    </SongContext.Provider>
  );
};

export default SongContextProvider;
