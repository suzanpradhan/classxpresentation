import { GenreResponseType } from "../genre/genreType"

export type TrackResponseType = {
    id: number,
    genres: Array<GenreResponseType>
    title: string,
    duration: string,
    file: string,
    artist: number,
    release: number
}