/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Header, SongList } from "./styles";
import clockIcon from "../../assets/images/clock.svg";
import plusIcon from "../../assets/images/plus.svg";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";
import Loading from "../../components/Loading";

const Playlist = props => {
  const loadPlaylistDetails = () => {
    const { id } = props.match.params;

    props.getPlaylistDetailsRequest(id);
  };

  useEffect(() => {
    loadPlaylistDetails();
  }, []);

  useEffect(() => {
    loadPlaylistDetails();
  }, [props.match.params]);

  const renderDetails = () => {
    const playlist = props.playlistDetails.data;
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}
            <button>Play</button>
          </div>
        </Header>
        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Título</th>
            <th>Artista</th>
            <th>Album</th>
            <th>
              <img src={clockIcon} alt="Duração" />
            </th>
          </thead>
          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <tr key={song.id}>
                  <td>
                    <img src={plusIcon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:16</td>
                </tr>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  Playlist.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number
      })
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string
        })
      }).isRequired,
      loading: PropTypes.bool
    }).isRequired
  };

  return props.playlistDetails.loading ? (
    <Container loading>
      <Loading />
    </Container>
  ) : (
    renderDetails()
  );
};

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
