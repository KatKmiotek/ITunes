import React, { Component } from 'react';
import SongsList from '../Components/SongsList.js';

class ItunesData extends Component{
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSongId: '',
    };
    this.handleSelectedSong = this.handleSelectedSong.bind(this);
  }

  handleSelectedSong(id) {
    this.setState({ selectedSongId: id });
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(res => res.json())
    .then(data => this.setState({ songs: data.feed.entry }));
  }

  render() {
    const selectedSong = this.state.songs.find(song =>
      this.state.selectedSongId === song.id.attributes['im:id']);
    return (
    <div>
    <h2>UK Top 20:</h2>
    <SongsList songs={this.state.songs} onSelectedSong = {this.handleSelectedSong}
    selectedSong={selectedSong}/>
    </div>
  );
  }
}
export default ItunesData;
