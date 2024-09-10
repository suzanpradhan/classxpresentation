'use client';

import { Slider } from '@/components/ui/slider';
import { msToTimeFormat } from '@/core/helper/timeFormat';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import { updateIsPlaying } from '@/modules/nowPlaying/nowPlayingReducer';
import Image from 'next/image';
import { Pause, Play } from 'phosphor-react';

export default function NowPlayingBar() {
  const dispatch = useAppDispatch();
  // const animationRef = useRef<number | undefined>();

  // const audioRef = useRef<HTMLAudioElement | undefined>(undefined);

  const nowPlayingState = useAppSelector(
    (state: RootState) => state.nowPlaying
  );

  // useEffect(() => {
  //   if (!nowPlayingState.flag) return;
  //   if (typeof window === 'undefined') return;
  //   if (audioRef.current) {
  //     audioRef.current?.pause();
  //   }
  //   if (nowPlayingState.currentSong && nowPlayingState.currentTime == 0) {
  //     var tempAudio = new Audio(nowPlayingState.currentSong.url);
  //     audioRef.current = tempAudio;

  //     audioRef.current.playbackRate = nowPlayingState.audioPlayBackRate ?? 1;
  //     dispatch(updateFlag(false));
  //   }
  // }, [nowPlayingState.flag]);

  // const getCurrentTime = () => {
  //   dispatch(updateCurrentTime(audioRef.current!.currentTime));
  //   animationRef.current = requestAnimationFrame(getCurrentTime);
  // };

  // uss
  // useEffect(() => {
  //   audioRef.current?.addEventListener('ended', () => {
  //     if (animationRef?.current) {
  //       cancelAnimationFrame(animationRef.current);
  //     }
  //   });
  //   audioRef.current?.addEventListener('pause', () => {
  //     if (animationRef.current) {
  //       cancelAnimationFrame(animationRef.current);
  //     }
  //   });
  //   audioRef.current?.addEventListener('play', () => {
  //     getCurrentTime();
  //   });
  //   return () => {
  //     audioRef.current?.removeEventListener('ended', () => {});
  //     audioRef.current?.removeEventListener('pause', () => {});
  //     audioRef.current?.removeEventListener('play', () => {});
  //   };
  // }, [audioRef.current]);

  return nowPlayingState.currentSong?.url ? (
    <div className="fixed bottom-0 my-4 w-full">
      <div className="mx-auto flex h-full w-full max-w-4xl items-center gap-4 bg-black px-8 py-4 ring-1 ring-white">
        {nowPlayingState.currentSong.info?.coverImage ? (
          <span className="relative h-10 w-16">
            <Image
              src={nowPlayingState.currentSong.info?.coverImage}
              alt="cover image"
              className="absolute"
              fill
              objectFit="cover"
            />
          </span>
        ) : (
          <></>
        )}

        <span className="w-40">
          <p>{nowPlayingState.currentSong.info?.title}</p>
          <p className="line-clamp-1 text-xs">
            {nowPlayingState.currentSong.info?.albumName.toUpperCase()}
          </p>
        </span>
        <button
          type="button"
          className={`rounded-full border-none bg-white p-2`}
          onClick={() => {
            nowPlayingState.isPlaying
              ? dispatch(updateIsPlaying(false))
              : dispatch(updateIsPlaying(true));
          }}
        >
          {nowPlayingState.isPlaying ? (
            <Pause size={14} className="text-black" weight="fill" />
          ) : (
            <Play size={14} className="text-black" weight="fill" />
          )}
        </button>

        <p>{msToTimeFormat(nowPlayingState.currentTime * 1000)}</p>

        <Slider
          defaultValue={[0]}
          max={100}
          step={0.5}
          // onChange={}
          disabled
          value={[
            ((nowPlayingState.currentTime * 1000) /
              nowPlayingState.currentSong.duration) *
              100,
          ]}
        />
        <p>{msToTimeFormat(nowPlayingState.currentSong.duration)}</p>
      </div>
    </div>
  ) : (
    <></>
  );
}
