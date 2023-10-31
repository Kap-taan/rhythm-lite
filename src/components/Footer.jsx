import { useContext } from "react";
import { SongContext } from "../stores/SongContext";

const Footer = () => {
  const {
    currentSong,
    playing,
    nextHandler,
    previousHandler,
    pauseSong,
    continuePlay,
  } = useContext(SongContext);

  return (
    <footer className="footer flex items-center p-4 bg-neutral text-neutral-content absolute bottom-0">
      <div className="flex items-center w-full">
        {currentSong !== undefined && (
          <div className="mask mask-squircle w-14 h-14">
            <img src={currentSong.img} alt="Song" />
          </div>
        )}
        {currentSong !== undefined && (
          <p>
            <strong>{currentSong.name}</strong>
          </p>
        )}
      </div>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a onClick={previousHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#f7f3ee"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM163.88,81a8,8,0,0,0-8.12.22L104,113.57V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V142.43l51.76,32.35A8,8,0,0,0,168,168V88A8,8,0,0,0,163.88,81ZM152,153.57,111.09,128,152,102.43Z"></path>
          </svg>
        </a>
        {playing && (
          <a onClick={pauseSong}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#f7f3ee"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM112,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"></path>
            </svg>
          </a>
        )}
        {!playing && (
          <a onClick={continuePlay}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#f7f3ee"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm36.44-94.66-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17Z"></path>
            </svg>
          </a>
        )}
        <a onClick={nextHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#f7f3ee"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM160,80a8,8,0,0,0-8,8v25.57L100.24,81.22A8,8,0,0,0,88,88v80a8,8,0,0,0,12.24,6.78L152,142.43V168a8,8,0,0,0,16,0V88A8,8,0,0,0,160,80Zm-56,73.57V102.43L144.91,128Z"></path>
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
