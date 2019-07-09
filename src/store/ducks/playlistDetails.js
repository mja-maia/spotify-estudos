export const Types = {
  GET_REQUEST: "playlistsDetails/GET_REQUESTS",
  GET_SUCESS: "playlistsDetails/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: {},
  loading: false
};

const playlistsDetails = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
};
export default playlistsDetails;

export const Creators = {
  getPlaylistDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id }
  }),
  getPlaylistDetailsSuccess: data => ({
    type: Types.GET_SUCESS,
    payload: { data }
  })
};
