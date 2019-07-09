import React from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";

import {
  Container,
  Current,
  Volume,
  Controls,
  Progress,
  Time,
  ProgressSlider
} from "./styles";
import volumeIcon from "../../assets/images/volume.svg";
import shuffleIcon from "../../assets/images/shuffle.svg";
import backwardIcon from "../../assets/images/backward.svg";
import forwardIcon from "../../assets/images/forward.svg";
import playIcon from "../../assets/images/play.svg";
import pauseIcon from "../../assets/images/pause.svg";
import repeatIcon from "../../assets/images/repeat.svg";

import { connect } from "react-redux";
import { Creators as PlayerActions } from "../../store/ducks/player";
import { bindActionCreators } from "redux";

const Player = ({
  player,
  play,
  pause,
  next,
  prev,
  playing,
  position,
  duration
}) => {
  return (
    <Container>
      {!!player.currentSong && (
        <Sound
          url={player.currentSong.file}
          playStatus={player.status}
          onFinishedPlaying={next}
          onPlaying={playing}
        />
      )}

      <Current>
        {!!player.currentSong && (
          <>
            <img
              src={player.currentSong.thumbnail}
              alt={player.currentSong.title}
            />

            <div>
              <span>{player.currentSong.title}</span>
              <small>{player.currentSong.author}</small>
            </div>
          </>
        )}
      </Current>

      <Progress>
        <Controls>
          <button>
            <img src={shuffleIcon} alt="shuffleIcon" />
          </button>
          <button onClick={prev}>
            <img src={backwardIcon} alt="backwardIcon" />
          </button>
          {!!player.currentSong && player.status === Sound.status.PLAYING ? (
            <button onClick={pause}>
              <img src={pauseIcon} alt="pauseIcon" />
            </button>
          ) : (
            <button onClick={play}>
              <img src={playIcon} alt="playIcon" />
            </button>
          )}
          <button onClick={next}>
            <img src={forwardIcon} alt="forwardIcon" />
          </button>
          <button>
            <img src={repeatIcon} alt="repeatIcon" />
          </button>
        </Controls>

        <Time>
          <span>{position}</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: "#404040", borderRadius: 10 }}
              trackStyle={{ background: "#1ED760" }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>{duration}</span>
        </Time>
      </Progress>

      <Volume>
        <img src={volumeIcon} alt="volume" />
        <Slider
          railStyle={{ background: "#404040", borderRadius: 10 }}
          trackStyle={{ background: "#fff" }}
          handleStyle={{ display: "none" }}
          value={100}
        />
      </Volume>
    </Container>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      file: PropTypes.string
    }),
    status: PropTypes.string
  }).isRequired,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  playing: PropTypes.func.isRequired
};

const msToTime = duration => {
  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
};

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
