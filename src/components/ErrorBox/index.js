import React from "react";
import PropTypes from "prop-types";
import closeIcon from "../../assets/images/close.svg";

import { Container } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ErrorActions } from "../../store/ducks/error";

const ErrorBox = ({ error: { message, visible }, hideError }) => {
  return (
    visible && (
      <Container>
        <p>{message}</p>
        <button onClick={hideError}>
          <img src={closeIcon} alt="Fechar" />
        </button>
      </Container>
    )
  );
};

ErrorBox.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    visible: PropTypes.bool
  }).isRequired,
  hideError: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  error: state.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBox);
