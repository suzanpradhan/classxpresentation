import { ArtistResponseType } from "../artist/artistType"

export type ReleaseResponseType = {
    id: number,
    artist: ArtistResponseType,
    genres: Array<ReleaseResponseType>,
    title: string,
    description: string,
    release_type: string,
    release_date: string,
    cover: string,
    cover_small: string
}