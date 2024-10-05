import { GenreResponseType } from "../genre/genreType"

export type TrackResponseType = {
    id: number,
    genres: Array<GenreResponseType>
    title: string,
    slug: string,
    duration: string,
    intro_track: string,
    artist: number,
    release: number
    track_wave: number
}

// {
//     "id": 1,
//     "genres": [
//       {
//         "id": 1,
//         "name": "Rock"
//       }
//     ],
//     "title": "Track title",
//     "slug": null,
//     "duration": "00:03:19",
//     "intro_track": null,
//     "artist": 1,
//     "release": 1,
//     "track_wave": null
//   },