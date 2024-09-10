import nowPlayingReducer from '@/modules/nowPlaying/nowPlayingReducer';
import { configureStore } from '@reduxjs/toolkit';

export const makeStore = () => {
    return configureStore({
        reducer: {
            nowPlaying: nowPlayingReducer,
            // playerTimer: playerTimerReducer,
        },
        // middleware(getDefaultMiddleware) {
        //     return getDefaultMiddleware()
        //         .concat(baseApi.middleware)
        //         .concat(rtkQueryErrorLogger);
        // },
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']