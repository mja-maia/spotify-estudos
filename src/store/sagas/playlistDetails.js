import api from "../../services/api";
import { call, put } from "redux-saga/effects";
import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails";

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );
    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {}
}
