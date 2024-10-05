'use client';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';

import { RootState } from '@/core/redux/store';
import {
  playSong,
  updateIsPlaying,
} from '@/modules/nowPlaying/nowPlayingReducer';
import { TrackResponseType } from '@/modules/tracks/tracksType';
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'sz-wavesurfer';

interface WavePlayerV2Props {
  activeSong: TrackResponseType;
  releaseId: string;
}

const WavePlayerV2: React.FC<WavePlayerV2Props> = ({
  activeSong,
  releaseId,
}) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isReady, setIsReady] = useState(false);
  const dispatch = useAppDispatch();
  const { isPlaying, currentSong } = useAppSelector(
    (state: RootState) => state.nowPlaying
  );

  useEffect(() => {
    if (waveformRef.current && !wavesurfer.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: 'violet',
        progressColor: 'purple',
        cursorColor: 'navy',
        barWidth: 3,
        barRadius: 3,
        // responsive: true,
        height: 150,
        normalize: true,
        // partialRender: true,
      });

      wavesurfer.current.on('ready', () => {
        setIsReady(true);
      });

      wavesurfer.current.on('finish', () => {
        dispatch(updateIsPlaying(false));
      });
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (wavesurfer.current && activeSong.intro_track) {
      wavesurfer.current.load(activeSong.intro_track);
      dispatch(playSong({ ...activeSong, release: parseInt(releaseId) }));
    }
  }, [activeSong, releaseId]);

  useEffect(() => {
    if (wavesurfer.current) {
      if (isPlaying && currentSong?.id.toString() === releaseId) {
        wavesurfer.current.play();
      } else {
        wavesurfer.current.pause();
      }
    }
  }, [isPlaying, currentSong, releaseId]);

  const handlePlayPause = () => {
    if (wavesurfer.current) {
      if (isPlaying) {
        wavesurfer.current.pause();
      } else {
        wavesurfer.current.play();
      }
      dispatch(updateIsPlaying(!isPlaying));
    }
  };

  return (
    <div>
      <div ref={waveformRef} />
      {isReady && (
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      )}
    </div>
  );
};

export default WavePlayerV2;
