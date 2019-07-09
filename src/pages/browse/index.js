/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Title, List, PlayList } from "./styles";
import Loading from "../../components/Loading";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistActions } from "../../store/ducks/playlists";

const Browse = props => {
  useEffect(() => {
    props.getPlaylistRequest();
  }, []);

  return (
    <Container>
      <Title>
        Navegar
        {props.playlists.loading && <Loading />}
      </Title>

      <List>
        {props.playlists.data.map(playlist => (
          <PlayList key={playlist.id} to={`/playlists/${playlist.id}`}>
            <img src={playlist.thumbnail} alt={playlist.title} />
            <strong>{playlist.title}</strong>
            <p>{playlist.description}</p>
          </PlayList>
        ))}
      </List>
    </Container>
  );
};

Browse.propTypes = {
  getPlaylistRequest: PropTypes.func.isRequired,
  playlists: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        description: PropTypes.string
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
)(Browse);
