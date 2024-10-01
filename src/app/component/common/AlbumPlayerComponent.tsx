'use client';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import { PaginatedResponseType } from '@/core/types/responseTypes';
import { ReleaseResponseType } from '@/modules/release/releaseType';
import tracksApi from '@/modules/tracks/tracksApi';
import { TrackResponseType } from '@/modules/tracks/tracksType';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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

export default function AlbumPlayerComponent({
  release,
}: {
  release: ReleaseResponseType;
}) {
  const [activeTrack, setActiveTrack] = useState(0);
  const nowPlayingState = useAppSelector(
    (state: RootState) => state.nowPlaying
  );
  const dispatch = useAppDispatch();

  const currentSong = useAppSelector((state: RootState) => state.nowPlaying);

  const [pageIndex, setPageIndex] = useState(1);

  const tracksData = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[`getTracks${pageIndex}${release.id}`]
        ?.data as PaginatedResponseType<TrackResponseType>
  );

  useEffect(() => {
    dispatch(
      tracksApi.endpoints.getTracks.initiate({
        pageNumber: pageIndex,
        releaseId: release.id.toString(),
      })
    );
    setActiveTrack(tracksData?.results[0].id);
  }, [dispatch, pageIndex, release.id, tracksData]);

  // useEffect(() => {
  //   dispatch(
  //     playSong({
  //       url: tracksData?.results[0]?.file,
  //       duration: tracksData?.results[0]?.file.duration,
  //       info: {
  //         id: playlist.songs[0].id,
  //         albumName: playlist.albumName,
  //         coverImage: Cover.src,
  //         playlistId: playlist.playListId.toString(),
  //         description: playlist.songs[0].description,
  //         title: playlist.songs[0].name,
  //       },
  //     })
  //   );
  //   dispatch(updateIsPlaying(false));
  //   dispatch(showNowPlayingBar(false));
  // }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-stretch">
        <div className="w-full basis-2/6">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={release.cover}
              alt="album-cover"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <SongInfoComponent
          release={release}
          currenttrack={
            tracksData?.results.filter(
              (item, index) => item.id === activeTrack
            )[0]
          }
        />
      </div>
      <PlaylistComponent
        release={release}
        tracks={tracksData?.results}
        setActiveTrack={setActiveTrack}
        activeTrack={activeTrack}
      />
    </div>
  );
}
