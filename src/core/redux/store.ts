import nowPlayingReducer from '@/modules/nowPlaying/nowPlayingReducer';
import playerTimerReducer from '@/modules/nowPlaying/playerTimerReducer';
import { configureStore } from '@reduxjs/toolkit';

export const makeStore = () => {
    return configureStore({
        reducer: {
            nowPlaying: nowPlayingReducer,
            playerTimer: playerTimerReducer,
        },
        // middleware(getDefaultMiddleware) {
        //     return getDefaultMiddleware()
        //         .concat(baseApi.middleware)
        //         .concat(rtkQueryErrorLogger);
        // },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']