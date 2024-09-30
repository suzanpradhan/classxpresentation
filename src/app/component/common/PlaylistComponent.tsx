'use client';

import Image from 'next/image';
import Cover from '../../../../public/image/cover.png';

import { msToTimeFormat } from '@/core/helper/timeFormat';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import {
  playSong,
  showNowPlayingBar,
  updateIsPlaying,
} from '@/modules/nowPlaying/nowPlayingReducer';
import { Pause, Play } from 'phosphor-react';
import { PlaylistType } from './AlbumPlayerComponent';

export default function PlaylistComponent({
  playlist,
}: {
  playlist?: PlaylistType;
}) {
  const dispatch = useAppDispatch();
  const nowPlayingState = useAppSelector(
    (state: RootState) => state.nowPlaying
  );

  console.log('nowPlayingState.isPlaying', nowPlayingState.isPlaying);
  if (playlist) {
    return (
      <div className="rounded-md border border-white/15">
        <div className="font-satoshi">
          <h5 className="my-3 px-4 text-lg font-normal">Songs (13)</h5>
          <div className="custom-scrollbar h-60 overflow-y-scroll">
            {playlist?.songs.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border-b border-white/15 px-4 last-of-type:border-b-0"
              >
                <button
                  type="button"
                  className={`rounded-full border-none bg-white p-1`}
                  onClick={() => {
                    if (nowPlayingState.currentSong?.info?.id !== item.id) {
                      dispatch(
                        playSong({
                          url: item.audioUrl,
                          duration: item.duration,
                          info: {
                            id: item.id,
                            albumName: playlist.albumName,
                            coverImage: Cover.src,
                            playlistId: playlist.playListId.toString(),
                            description: item.description,
                            title: item.name,
                          },
                        })
                      );
                      dispatch(showNowPlayingBar(true));
                      // dispatch(updateCurrentTime(0));
                    } else {
                      nowPlayingState.isPlaying
                        ? dispatch(updateIsPlaying(false))
                        : dispatch(updateIsPlaying(true));
                    }
                  }}
                >
                  {nowPlayingState.currentSong?.info?.playlistId ===
                    playlist.playListId.toString() &&
                  nowPlayingState.currentSong?.url === item.audioUrl &&
                  nowPlayingState.isPlaying ? (
                    <Pause size={10} className="text-black" weight="fill" />
                  ) : (
                    <Play size={10} className="text-black" weight="fill" />
                  )}
                </button>
                <p className="flex-1 py-3 text-base font-light text-paragraph">
                  {item.name}
                </p>
                {nowPlayingState.isPlaying &&
                nowPlayingState.currentSong?.info?.playlistId ===
                  playlist.playListId.toString() &&
                nowPlayingState.currentSong?.url === item.audioUrl ? (
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
                  {msToTimeFormat(item.duration)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
