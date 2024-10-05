import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TrackResponseType } from '../tracks/tracksType';

export interface NowPlayingState {
  isPlaying: boolean;
  currentTime: number;
  // currentPlaylistIndex: number;
  showNowPlayingBar: boolean;
  currentSong?: TrackResponseType;
  manualCurrentTimeUpdateFlag: boolean;
  // audioPlayBackRate?: number;
}

const initialState: NowPlayingState = {
  isPlaying: false,
  showNowPlayingBar: false,
  currentTime: 0,
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
      action: PayloadAction<{ currentTime: number; intro_track: string }>
    ) => {
      if (
        action.payload.intro_track == state.currentSong?.intro_track
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
      state.isPlaying = true;
    },

    // updateCurrentTimeFlag: (state, action: PayloadAction<boolean>) => {
    //   state.manualCurrentTimeUpdateFlag = action.payload;
    // },

  },
});

export const {
  updateCurrentTime,
  manualUpdateCurrentTime,
  updateIsPlaying,
  playSong,
  showNowPlayingBar
} = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;
