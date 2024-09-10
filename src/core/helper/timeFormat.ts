export function msToTimeFormat(ms: number): string {
    // Convert milliseconds to total seconds
    const totalSeconds = Math.floor(ms / 1000);


    // Calculate minutes and seconds
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Add leading zero to minutes and seconds if less than 10
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();

    return `${formattedMinutes}:${formattedSeconds}`;
}