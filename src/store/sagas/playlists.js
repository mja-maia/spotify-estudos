import api from "../../services/api";
import { call, put } from "redux-saga/effects";
import { Creators as PlaylistActions } from "../ducks/playlists";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists");
    yield put(PlaylistActions.getPlaylistSuccess(response.data));
  } catch (err) {}
}
