'use client';
import { useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import { ReleaseResponseType } from '@/modules/release/releaseType';
import { TrackResponseType } from '@/modules/tracks/tracksType';
import { WavePlayer } from '../WavePlayer';

export default function SongInfoComponent({
  release,
  currenttrack,
}: {
  release: ReleaseResponseType;
  currenttrack: TrackResponseType;
}) {
  const nowPlayingState = useAppSelector(
    (state: RootState) => state.nowPlaying
  );
  return (
    <div className="w-full">
      <div className="ms-10 flex h-full flex-col justify-evenly gap-4 font-satoshi">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-medium">{release.title}</h2>
          <h5 className="text-xl font-medium">{release.artist.name}</h5>
          <p className="text-base font-normal text-paragraph">
            {release.description}
          </p>
        </div>
        <div>
          {/* {release.id ? (
            nowPlayingState.currentSong?.info?.playlistId ===
              release.id.toString() && nowPlayingState.currentSong.url ? (
              <WavePlayer />
            ) : (
              <></>
            )
          ) : (
            <WavePlayer />
          )} */}

          <WavePlayer currentSong={currenttrack} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-medium">Rs. 1000.00</p>
          <div className="flex items-stretch gap-2">
            <div className="flex items-stretch justify-between">
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center border border-slate-400 hover:bg-gray-500/15">
                -
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center">
                1
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center border border-slate-400 hover:bg-gray-500/15">
                +
              </div>
            </div>

            <div className="flex items-center">
              <a
                href="#"
                className="flex h-8 items-center justify-center text-nowrap border border-gray-300 px-5 text-xs font-normal text-white"
              >
                ADD TO CART
              </a>
              <a
                href="#"
                className="flex h-8 items-center justify-center text-nowrap bg-gray-300 px-4 text-xs font-normal text-blackPrimary"
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
