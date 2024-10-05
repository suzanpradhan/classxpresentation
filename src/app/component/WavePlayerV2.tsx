import { stringTimeToMs } from '@/core/helper/timeFormat';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import {
  playSong,
  updateCurrentTime,
  updateIsPlaying,
} from '@/modules/nowPlaying/nowPlayingReducer';
import { TrackResponseType } from '@/modules/tracks/tracksType';
import { Pause, Play } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'sz-wavesurfer';
import { defaultWaveData } from './WavePlayer';

interface WavePlayerV2Props {
  controls?: boolean;
  activeSong: TrackResponseType;
}

export default function WavePlayerV2({
  controls = true,
  activeSong,
}: WavePlayerV2Props) {
  const audioContainer = useRef(null);
  const waveRef = useRef<WaveSurfer | undefined>(undefined);
  const audioRef = useRef<HTMLAudioElement | undefined>(undefined);
  const animationRef = useRef<number | undefined>();
  const [currentTime, setCurrentTime] = useState<number>(0);

  const nowPlayingState = useAppSelector(
    (state: RootState) => state.nowPlaying
  );
  const dispatch = useAppDispatch();

  const cleanUpAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = undefined;
    }
    if (waveRef.current) {
      waveRef.current.destroy();
      waveRef.current = undefined;
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
  };

  useEffect(() => {
    if (!waveRef.current) {
      return;
    }

    if (currentTime != 0 && activeSong.duration != undefined) {
      waveRef.current?.manualRenderProgress(
        currentTime / stringTimeToMs(activeSong.duration)
      );
    }
  }, [currentTime, activeSong]);

  useEffect(() => {
    const create = async () => {
      cleanUpAudio();
      if (!audioContainer.current) return;
      waveRef.current = WaveSurfer.create({
        container: audioContainer.current,
        waveColor: 'gray',
        progressColor: 'white',
        cursorColor: 'transprant',
        barWidth: 1,
        barGap: 2,
        barRadius: 1,
        //   duration: nowPlayingState.currentSong?.duration,
        peaks: [defaultWaveData],
        height: 30,
      });
      if (nowPlayingState.currentSong === activeSong) {
        let tempAudio = new Audio(nowPlayingState.currentSong?.intro_track);

        audioRef.current = tempAudio;
      }
    };
    create();
    if (audioRef.current != undefined) {
      audioRef.current?.addEventListener('ended', () => {
        if (animationRef?.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = undefined;
        }
        dispatch(updateIsPlaying(false));
      });

      audioRef.current?.addEventListener('pause', () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = undefined;
        }
      });

      const getCurrentTime = () => {
        setCurrentTime(audioRef.current!.currentTime * 1000);
        dispatch(updateCurrentTime(audioRef.current!.currentTime));
        animationRef.current = requestAnimationFrame(getCurrentTime);
      };

      audioRef.current?.addEventListener('play', () => {
        getCurrentTime();
      });

      // getCurrentTime();
    }
    return () => {
      audioRef.current?.removeEventListener('ended', () => {});
      audioRef.current?.removeEventListener('pause', () => {});
      audioRef.current?.removeEventListener('play', () => {});
    };
  }, [nowPlayingState.currentSong]);

  useEffect(() => {
    if (audioRef.current && nowPlayingState.currentSong === activeSong) {
      nowPlayingState.isPlaying
        ? audioRef.current?.play()
        : audioRef.current?.pause();
    }
  }, [nowPlayingState.isPlaying, nowPlayingState.currentSong]);

  const handlePlayPause = async (e: any) => {
    e?.stopPropagation();

    if (
      !nowPlayingState.currentSong ||
      nowPlayingState.currentSong != activeSong
    ) {
      dispatch(playSong(activeSong));
      return;
    }

    if (nowPlayingState.isPlaying) {
      dispatch(updateIsPlaying(false));
    } else {
      dispatch(updateIsPlaying(true));
    }
    console.log('audioRef.current', nowPlayingState.isPlaying);
  };

  return (
    <div className="relative flex w-full items-center gap-1">
      {controls ? (
        <button
          type="button"
          className={`rounded-full border-none bg-white p-2`}
          onClick={handlePlayPause}
        >
          {nowPlayingState.isPlaying &&
          nowPlayingState.currentSong === activeSong ? (
            <Pause size={14} className="text-black" weight="fill" />
          ) : (
            <Play size={14} className="text-black" weight="fill" />
          )}
        </button>
      ) : (
        <></>
      )}

      <div
        ref={audioContainer}
        className={`audio-wrapper ml-1 w-full grow`}
        onClick={(e) => {
          e?.stopPropagation();
        }}
      ></div>
    </div>
  );
}
