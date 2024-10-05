import { defaultWaveData } from "@/app/component/WavePlayer";
import { TrackResponseType } from "@/modules/tracks/tracksType";
import { MutableRefObject } from "react";
import WaveSurfer from "sz-wavesurfer";

export const createWavePlayer = (audioContainer: MutableRefObject<null>, waveRef: MutableRefObject<WaveSurfer | undefined>, activeSong: TrackResponseType) => {
    if (!audioContainer.current) return;

    waveRef.current = WaveSurfer.create({
        container: audioContainer.current,
        waveColor: 'gray',
        progressColor: 'white',
        cursorColor: 'transprant',
        barWidth: 1,
        barGap: 1,
        barRadius: 1,
        duration: activeSong?.duration ? parseInt(activeSong.duration) : 0,
        peaks: [defaultWaveData],
        height: 30,
    });

    return () => {
        waveRef.current?.destroy();
    };
}

export const cleanUpAudio = (animationRef: MutableRefObject<number | undefined>, waveRef: MutableRefObject<WaveSurfer | undefined>) => {
    if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current == undefined;
    }
    if (waveRef.current) {
        waveRef.current.destroy();
        waveRef.current = undefined;
    }
};



