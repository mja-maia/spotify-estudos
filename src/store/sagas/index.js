import { all, takeLatest } from "redux-saga/effects";
import { Types as PlaylistsTypes } from "../ducks/playlists";
import { getPlaylists } from "./playlists";
import { Types as PlaylistsDetailsTypes } from "../ducks/playlistDetails";
import { getPlaylistDetails } from "./playlistDetails";

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistsDetailsTypes.GET_REQUEST, getPlaylistDetails)
  ]);
}
