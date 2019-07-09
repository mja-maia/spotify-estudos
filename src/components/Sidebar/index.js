/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, NewPlayList, Nav } from "./styles";
import addPlaylistIcon from "../../assets/images/add_playlist.svg";
import Loading from "../Loading";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistActions } from "../../store/ducks/playlists";

const Sidebar = props => {
  useEffect(() => {
    props.getPlaylistRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <Link to="/">Navegar</Link>
          </li>
          <li>
            <a href="">Rádio</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>SUA BIBLIOTECA</span>
          </li>
          <li>
            <a href="">Seu Daily Mix</a>
          </li>
          <li>
            <a href="">Tocados Recentemente</a>
          </li>
          <li>
            <a href="">Músicas</a>
          </li>
          <li>
            <a href="">Álbuns</a>
          </li>
          <li>
            <a href="">Artistas</a>
          </li>
          <li>
            <a href="">Estações</a>
          </li>
          <li>
            <a href="">Arquivos Locais</a>
          </li>
          <li>
            <a href="">Videos</a>
          </li>
          <li>
            <a href="">Podcasts</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>PLAYLIST</span>
            {props.playlists.loading && <Loading />}
          </li>
          {props.playlists.data.map(playlist => (
            <li key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
            </li>
          ))}
        </Nav>
      </div>
      <NewPlayList>
        <img src={addPlaylistIcon} alt="Adicionar Playlist" />
        Nova playlist
      </NewPlayList>
    </Container>
  );
};

Sidebar.propTypes = {
  getPlaylistRequest: PropTypes.func.isRequired,
  playlists: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
      })
    ),
    loading: PropTypes.bool
  }).isRequired
};

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
