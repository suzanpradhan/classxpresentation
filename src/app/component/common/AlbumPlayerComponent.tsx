'use client';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import {
  playSong,
  showNowPlayingBar,
  updateIsPlaying,
} from '@/modules/nowPlaying/nowPlayingReducer';
import Image from 'next/image';
import { useEffect } from 'react';
import Cover from '../../../../public/image/image 23.png';
import PlaylistComponent from './PlaylistComponent';
import SongInfoComponent from './SongInfoComponent';

export type SongType = {
  id: number;
  audioUrl: string;
  name: string;
  duration: number;
  description: string;
};

export type PlaylistType = {
  playListId: number;
  albumName: string;
  songs: Array<SongType>;
};

const playlist: PlaylistType = {
  playListId: 1,
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

  useEffect(() => {
    dispatch(
      playSong({
        url: playlist.songs[0].audioUrl,
        duration: playlist.songs[0].duration,
        info: {
          id: playlist.songs[0].id,
          albumName: playlist.albumName,
          coverImage: Cover.src,
          playlistId: playlist.playListId.toString(),
          description: playlist.songs[0].description,
          title: playlist.songs[0].name,
        },
      })
    );
    dispatch(updateIsPlaying(false));
    dispatch(showNowPlayingBar(false));
  }, []);

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
        <SongInfoComponent playlistId={playlist.playListId} />
      </div>
      <PlaylistComponent playlist={playlist} />
    </div>
  );
}
