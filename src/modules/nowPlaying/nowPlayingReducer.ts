import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TrackResponseType } from '../tracks/tracksType';

export interface NowPlayingState {
  isPlaying: boolean;
  currentTime: number;
  // currentPlaylistIndex: number;
  showNowPlayingBar: boolean;
  playlistId?: string;
  currentSong?: TrackResponseType;
  flag: boolean;
  totalDuration?: number;
  manualCurrentTimeUpdateFlag: boolean;
  audioPlayBackRate?: number;
}

const initialState: NowPlayingState = {
  isPlaying: false,
  showNowPlayingBar: false,
  currentTime: 0,
  flag: false,
  manualCurrentTimeUpdateFlag: false,
};

export const nowPlayingSlice = createSlice({
  name: 'nowPlaying',
  initialState,
  reducers: {
    updateCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    manualUpdateCurrentTime: (
      state,
      action: PayloadAction<{ currentTime: number; file: string }>
    ) => {
      if (
        action.payload.file == state.currentSong?.file
      ) {
        state.currentTime = action.payload.currentTime;
        state.manualCurrentTimeUpdateFlag = true;
      }
    },
    showNowPlayingBar: (state, action: PayloadAction<boolean>) => {
      state.showNowPlayingBar = action.payload
    },
    updateIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    playSong: (state, action: PayloadAction<TrackResponseType>) => {
      state.currentTime = 0;
      state.currentSong = action.payload;
      state.flag = true;
      state.playlistId = action.payload.release.toString();
      state.isPlaying = true;
      state.totalDuration = undefined;

    },
    updateFlag: (state, action: PayloadAction<boolean>) => {
      state.flag = action.payload;
    },
    updateCurrentTimeFlag: (state, action: PayloadAction<boolean>) => {
      state.manualCurrentTimeUpdateFlag = action.payload;
    },
    updatePlaybackRate: (state, action: PayloadAction<number>) => {
      state.audioPlayBackRate = action.payload;
    },
  },
});

export const {
  updateCurrentTime,
  updatePlaybackRate,
  manualUpdateCurrentTime,
  updateCurrentTimeFlag,
  updateIsPlaying,
  playSong,
  updateFlag,
  showNowPlayingBar
} = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;
