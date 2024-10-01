import { ReleaseResponseType } from '@/modules/release/releaseType';
import Image from 'next/image';
import RecordDisk from '../../../../public/image/record-disk.png';

export default function SinglePlayerComponent({
  release,
}: {
  release: ReleaseResponseType;
}) {
  return (
    <div className="flex">
      <div className="relative w-full basis-1/2">
        <div className="absolute -right-5 top-0 h-full w-2/3">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={RecordDisk}
              alt="album-cover-disk"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              className="object-contain"
            />
            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
              <div className="relative aspect-square w-full">
                <Image
                  src={release.cover_small}
                  alt="album-cover-disk"
                  fill
                  sizes="(min-width: 808px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-0 aspect-square w-2/3 overflow-hidden">
          <Image
            src={release.cover}
            alt="album-cover"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      {/* <SongInfoComponent release={release} /> */}
    </div>
  );
}
