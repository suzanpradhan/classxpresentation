'use client';

import Image from 'next/image';

import { msToTimeFormat, stringTimeToMs } from '@/core/helper/timeFormat';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import {
  playSong,
  showNowPlayingBar,
  updateIsPlaying,
} from '@/modules/nowPlaying/nowPlayingReducer';
import { ReleaseResponseType } from '@/modules/release/releaseType';
import { TrackResponseType } from '@/modules/tracks/tracksType';
import { Pause, Play } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';

export default function PlaylistComponent({
  tracks,
  release,
  setActiveTrack,
  activeTrack,
}: {
  activeTrack: number;
  tracks: Array<TrackResponseType>;
  release: ReleaseResponseType;
  setActiveTrack: Dispatch<SetStateAction<number>>;
}) {
  const dispatch = useAppDispatch();
  const nowPlayingState = useAppSelector(
    (state: RootState) => state.nowPlaying
  );

  return (
    <div className="rounded-md border border-white/15">
      <div className="font-satoshi">
        <h5 className="my-3 px-4 text-lg font-normal">
          Songs {tracks?.length}
        </h5>
        <div className="custom-scrollbar max-h-60 overflow-y-scroll">
          {tracks?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border-b border-white/15 px-4 last-of-type:border-b-0"
            >
              <button
                type="button"
                className={`rounded-full border-none bg-white p-1`}
                onClick={() => {
                  setActiveTrack(item.id);
                  if (nowPlayingState.currentSong !== item) {
                    dispatch(playSong(item));
                    dispatch(showNowPlayingBar(true));
                    // dispatch(updateCurrentTime(0));
                  } else {
                    nowPlayingState.isPlaying
                      ? dispatch(updateIsPlaying(false))
                      : dispatch(updateIsPlaying(true));
                  }
                  console.log('audioRef.current', nowPlayingState.isPlaying);
                }}
              >
                {nowPlayingState.currentSong === item &&
                nowPlayingState.isPlaying ? (
                  <Pause size={10} className="text-black" weight="fill" />
                ) : (
                  <Play size={10} className="text-black" weight="fill" />
                )}
              </button>
              <p className="flex-1 py-3 text-base font-light text-paragraph">
                {item.title}
              </p>
              {activeTrack === item.id &&
              nowPlayingState.isPlaying &&
              nowPlayingState.currentSong?.release === item.release ? (
                <span className="relative h-4 w-4">
                  <Image
                    alt="wave-icon"
                    src="/image/wave-white.gif"
                    fill
                    objectFit="cover"
                  />
                </span>
              ) : (
                <></>
              )}
              <p className="py-3 text-base font-light text-paragraph">
                {msToTimeFormat(stringTimeToMs(item.duration))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
