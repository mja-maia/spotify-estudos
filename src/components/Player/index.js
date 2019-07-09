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
// import pauseIcon from "../../assets/images/pause.svg";
import repeatIcon from "../../assets/images/repeat.svg";

import { connect } from "react-redux";

const Player = ({ player }) => {
  return (
    <Container>
      {!!player.currentSong && (
        <Sound url={player.currentSong.file} playStatus={player.status} />
      )}
      <Current>
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="cover"
        />

        <div>
          <span>Times Like This</span>
          <small>Foo Fighters</small>
        </div>
      </Current>

      <Progress>
        <Controls>
          <button>
            <img src={shuffleIcon} alt="shuffleIcon" />
          </button>
          <button>
            <img src={backwardIcon} alt="backwardIcon" />
          </button>
          <button>
            <img src={playIcon} alt="playIcon" />
          </button>
          <button>
            <img src={forwardIcon} alt="forwardIcon" />
          </button>
          <button>
            <img src={repeatIcon} alt="repeatIcon" />
          </button>
        </Controls>

        <Time>
          <span>1:39</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: "#404040", borderRadius: 10 }}
              trackStyle={{ background: "#1ED760" }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>4:15</span>
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
      file: PropTypes.string
    }),
    status: PropTypes.string
  }).isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);
