import { useContext } from "react";
import { SongContext } from "../stores/SongContext";

const Songs = () => {
  const { songs, playSong } = useContext(SongContext);

  return (
    <div className="overflow-x-auto h-5/6">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <h2 className="text-xl">Songs</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {songs &&
            songs.map((song, idx) => (
              <tr
                className="cursor-pointer"
                key={song.id}
                onClick={() => playSong(song, idx)}
              >
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={song.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{song.name}</div>
                      <div className="text-sm opacity-50">{song.singer}</div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          {songs &&
            songs.map((song, idx) => (
              <tr
                className="cursor-pointer"
                key={song.id}
                onClick={() => playSong(song, idx)}
              >
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={song.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{song.name}</div>
                      <div className="text-sm opacity-50">{song.singer}</div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          {songs &&
            songs.map((song, idx) => (
              <tr
                className="cursor-pointer"
                key={song.id}
                onClick={() => playSong(song, idx)}
              >
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={song.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{song.name}</div>
                      <div className="text-sm opacity-50">{song.singer}</div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          {songs &&
            songs.map((song, idx) => (
              <tr
                className="cursor-pointer"
                key={song.id}
                onClick={() => playSong(song, idx)}
              >
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={song.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{song.name}</div>
                      <div className="text-sm opacity-50">{song.singer}</div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Songs;
