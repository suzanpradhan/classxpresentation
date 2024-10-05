export function msToTimeFormat(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);


    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();

    return `${formattedMinutes}:${formattedSeconds}`;
}

export function stringTimeToMs(stringTime: string): number {
    const [hours, minutes, seconds] = stringTime.split(':').map(Number);
    const milliseconds = ((hours * 60 * 60) + (minutes * 60) + seconds) * 1000;
    return milliseconds
} 