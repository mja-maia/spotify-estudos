export const Types = {
  GET_REQUEST: "playlists/GET_REQUESTS",
  GET_SUCESS: "playlists/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

const playlists = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
};
export default playlists;

export const Creators = {
  getPlaylistRequest: () => ({
    type: Types.GET_REQUEST
  }),
  getPlaylistSuccess: data => ({
    type: Types.GET_SUCESS,
    payload: { data }
  })
};
