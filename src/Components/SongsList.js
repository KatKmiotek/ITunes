import React from 'react';
// import Sound from 'react-sound';

const SongsList = (props) => {
  if (props.songs) {
    const listOfSongs = props.songs.map((song) => {
      return <li key={song.id.attributes['im:id']}>
      <p>{song['im:name'].label}</p>
      <p>{song['im:artist'].label}</p>
      <img src={song['im:image'][2].label} alt='cover'/>
      <audio src={song.link[1].attributes.href} controls></audio>

      </li>;

    });
    function handleSelect(event) {
      props.onSelectedSong(event.target.key);
    }

    return (
      <ol onClick={handleSelect}>
{listOfSongs}
    </ol>
    );
  }

  return null;
};

export default SongsList;
