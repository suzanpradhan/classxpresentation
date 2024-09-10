'use client';
import { msToTimeFormat } from '@/core/helper/timeFormat';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import {
  playSong,
  updateIsPlaying,
} from '@/modules/nowPlaying/nowPlayingReducer';
import Image from 'next/image';
import { Pause, Play } from 'phosphor-react';
import Cover from '../../../../public/image/image 23.png';
import { WavePlayer } from '../WavePlayer';

const playlist = {
  playListId: '1',
  albumName: 'Khatra Album',

  songs: [
    {
      id: 1,
      audioUrl: '/audio/intro.mp3',
      name: 'Intro',
      duration: 35000,
      description: ' Intro Song',
    },
    {
      id: 2,
      audioUrl: '/audio/ram.mp3',
      name: 'Bhajan',
      duration: 162000,
      description: ' Bhajan of ram',
    },
    {
      id: 3,
      audioUrl: '/audio/audioFile.mp3',
      name: 'Audiofile',
      duration: 42000,
      description: ' Audio File song',
    },
    {
      id: 4,
      audioUrl: '/audio/baansghari.mp3',
      name: 'BaanshGhari',
      duration: 312000,
      description: 'Biul chetri baansh ghari',
    },
    {
      id: 5,
      audioUrl: '/audio/ramsailee.mp3',
      name: 'Ram Sailee',
      duration: 199000,
      description: ' Ram sailee bipul dai',
    },
    {
      id: 6,
      audioUrl: '/audio/syndicate.mp3',
      name: 'Syndicate',
      duration: 288000,
      description: ' Syndicate by bipul dai',
    },
  ],
};

export default function AlbumPlayerComponent() {
  const nowPlayingState = useAppSelector(
    (state: RootState) => state.nowPlaying
  );
  const dispatch = useAppDispatch();

  const currentSong = useAppSelector((state: RootState) => state.nowPlaying);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-stretch">
        <div className="w-full basis-2/6">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={Cover}
              alt="album-cover"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full basis-4/6">
          <div className="ms-10 flex h-full flex-col justify-evenly gap-4 font-satoshi">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-medium">Jana Deu</h2>
              <h5 className="text-xl font-medium">Dong</h5>
              <p className="text-base font-normal text-paragraph">
                The album is an amalgamation of contemplations and reflections
                of the artists musical journey as well as amalgamation of
                contemplations .
              </p>
            </div>
            <div>
              {nowPlayingState.currentSong?.info?.playlistId ===
                playlist.playListId && nowPlayingState.currentSong.url ? (
                <WavePlayer />
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium">Rs. 1000.00</p>
              <div className="flex items-stretch gap-2">
                <div className="flex items-stretch justify-between">
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center border border-slate-400 hover:bg-gray-500/15">
                    -
                  </div>
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center">
                    1
                  </div>
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center border border-slate-400 hover:bg-gray-500/15">
                    +
                  </div>
                </div>

                <div className="flex items-center">
                  <a
                    href="#"
                    className="flex h-8 items-center justify-center text-nowrap border border-gray-300 px-5 text-xs font-normal text-white"
                  >
                    ADD TO CART
                  </a>
                  <a
                    href="#"
                    className="flex h-8 items-center justify-center text-nowrap bg-gray-300 px-4 text-xs font-normal text-blackPrimary"
                  >
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-white/15">
        <div className="font-satoshi">
          <h5 className="my-3 px-4 text-lg font-normal">Songs (13)</h5>
          <div className="custom-scrollbar h-60 overflow-y-scroll">
            {playlist.songs.map((item, index) => (
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
                            playlistId: playlist.playListId,
                            description: item.description,
                            title: item.name,
                          },
                        })
                      );
                      // dispatch(updateCurrentTime(0));
                    } else {
                      nowPlayingState.isPlaying
                        ? dispatch(updateIsPlaying(false))
                        : dispatch(updateIsPlaying(true));
                    }
                  }}
                >
                  {nowPlayingState.currentSong?.info?.playlistId ===
                    playlist.playListId &&
                  nowPlayingState.currentSong.url === item.audioUrl &&
                  nowPlayingState.isPlaying ? (
                    <Pause size={10} className="text-black" weight="fill" />
                  ) : (
                    <Play size={10} className="text-black" weight="fill" />
                  )}
                </button>
                <p className="flex-1 py-3 text-base font-light text-paragraph">
                  {item.name}
                </p>
                <p className="py-3 text-base font-light text-paragraph">
                  {msToTimeFormat(item.duration)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
