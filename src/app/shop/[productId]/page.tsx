import { PlaylistType } from '@/app/component/common/AlbumPlayerComponent';
import MaxWidthWrapper from '@/app/component/common/MaxWidthWrapper';
import PlaylistComponent from '@/app/component/common/PlaylistComponent';
import SongInfoComponent from '@/app/component/common/SongInfoComponent';
import Image from 'next/image';
export default function MusicDetailPage() {
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
    <MaxWidthWrapper width="max">
      <div className="relative">
        <div className="absolute left-40 top-40 -z-0 h-64 w-64 rounded-full bg-white/20 blur-3xl lg:left-0 lg:top-64"></div>
        <div className="my-20 flex flex-col items-center lg:flex-row lg:items-start">
          <section className="relative aspect-square h-full w-96 basis-[40%]">
            <Image
              alt="album cover"
              src="/image/banner/banner-img-1.png"
              fill
              objectFit="cover"
              sizes=""
            />
          </section>
          <div className="flex basis-[60%] flex-col gap-6">
            <SongInfoComponent />

            <div className="pl-10">
              <PlaylistComponent playlist={playlist} />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
