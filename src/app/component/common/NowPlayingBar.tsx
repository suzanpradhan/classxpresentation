'use client';

import { Slider } from '@/components/ui/slider';
import { msToTimeFormat, stringTimeToMs } from '@/core/helper/timeFormat';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import { updateIsPlaying } from '@/modules/nowPlaying/nowPlayingReducer';
import releaseApi from '@/modules/release/releaseApi';
import { ReleaseResponseType } from '@/modules/release/releaseType';
import Image from 'next/image';
import { Pause, Play } from 'phosphor-react';
import { useEffect } from 'react';

export default function NowPlayingBar() {
  const dispatch = useAppDispatch();
  const nowPlayingState = useAppSelector(
    (state: RootState) => state.nowPlaying
  );

  useEffect(() => {
    if (nowPlayingState.currentSong?.release) {
      dispatch(
        releaseApi.endpoints.getEachRelease.initiate(
          nowPlayingState.currentSong?.release.toString()
        )
      );
    }
  }, [dispatch, nowPlayingState.currentSong?.release]);

  const release = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[
        `getEachRelease-${nowPlayingState.currentSong?.release}`
      ]?.data as ReleaseResponseType
  );

  return nowPlayingState.currentSong?.intro_track &&
    nowPlayingState.showNowPlayingBar ? (
    <div className="fixed bottom-0 my-4 h-10 w-full px-2">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center gap-4 border border-white/40 bg-black pr-1">
        {nowPlayingState.currentSong?.release ? (
          <span className="relative aspect-square h-full">
            <Image
              src={release?.cover_small}
              alt="cover image"
              className="absolute p-1"
              fill
              objectFit="cover"
            />
          </span>
        ) : (
          <></>
        )}

        <span className="w-40">
          <p className="text-sm">{nowPlayingState.currentSong?.title}</p>
          <p className="line-clamp-1 text-xs">
            {nowPlayingState.currentSong?.title.toUpperCase()}
          </p>
        </span>
        <button
          type="button"
          className={`rounded-full border-none bg-white p-1`}
          onClick={() => {
            nowPlayingState.isPlaying
              ? dispatch(updateIsPlaying(false))
              : dispatch(updateIsPlaying(true));
          }}
        >
          {nowPlayingState.isPlaying ? (
            <Pause size={10} className="text-black" weight="fill" />
          ) : (
            <Play size={10} className="text-black" weight="fill" />
          )}
        </button>

        <p className="text-xs">
          {msToTimeFormat(nowPlayingState.currentTime * 1000)}
        </p>

        <Slider
          defaultValue={[0]}
          max={100}
          step={0.5}
          // onChange={}
          disabled
          value={[
            ((nowPlayingState.currentTime * 1000) /
              stringTimeToMs(nowPlayingState.currentSong?.duration)) *
              100,
          ]}
        />
        <p className="text-xs">
          {msToTimeFormat(
            stringTimeToMs(nowPlayingState.currentSong?.duration)
          )}
        </p>
      </div>
    </div>
  ) : (
    <></>
  );
}
