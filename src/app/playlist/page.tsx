import { PlaylistType } from '../component/common/AlbumPlayerComponent';
import PlaylistComponent from '../component/common/PlaylistComponent';
import SongInfoComponent from '../component/common/SongInfoComponent';

export default function Playlist() {
  const playlist: PlaylistType = {
    playListId: 2,
    albumName: 'Khatra Album',

    songs: [
      {
        id: 1,
        audioUrl: '/audio/intro.mp3',
        name: 'Intro',
        duration: 35000,
        description: ' Intro Song',
      },
      {
        id: 2,
        audioUrl: '/audio/ram.mp3',
        name: 'Bhajan',
        duration: 162000,
        description: ' Bhajan of ram',
      },
      {
        id: 3,
        audioUrl: '/audio/audioFile.mp3',
        name: 'Audiofile',
        duration: 42000,
        description: ' Audio File song',
      },
      {
        id: 4,
        audioUrl: '/audio/baansghari.mp3',
        name: 'BaanshGhari',
        duration: 312000,
        description: 'Biul chetri baansh ghari',
      },
      {
        id: 5,
        audioUrl: '/audio/ramsailee.mp3',
        name: 'Ram Sailee',
        duration: 199000,
        description: ' Ram sailee bipul dai',
      },
      {
        id: 6,
        audioUrl: '/audio/syndicate.mp3',
        name: 'Syndicate',
        duration: 288000,
        description: ' Syndicate by bipul dai',
      },
    ],
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <SongInfoComponent playlistId={playlist.playListId} />
      <PlaylistComponent playlist={playlist} />
    </div>
  );
}
