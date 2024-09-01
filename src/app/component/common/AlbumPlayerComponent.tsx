import Image from 'next/image';
import Cover from '../../../../public/image/image 23.png';
import { WavePlayer } from '../WavePlayer';

export default function AlbumPlayerComponent() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-stretch">
        <div className="w-full basis-2/6">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={Cover}
              alt="album-cover"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full basis-4/6">
          <div className="ms-10 flex h-full flex-col justify-evenly gap-4 font-satoshi">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-medium">Jana Deu</h2>
              <h5 className="text-xl font-medium">Dong</h5>
              <p className="text-base font-normal text-paragraph">
                The album is an amalgamation of contemplations and reflections
                of the artists musical journey as well as amalgamation of
                contemplations .
              </p>
            </div>
            <div>
              <WavePlayer
                audioItem={{
                  url: '/audio/intro.mp3',
                  duration: 35.018125 * 1000,
                }}
                theme="dark"
                size="large"
              />
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
      </div>
      <div className="rounded-md border border-white/15">
        <div className="font-satoshi">
          <h5 className="my-3 px-4 text-lg font-normal">Songs (13)</h5>
          <div className="custom-scrollbar h-60 overflow-y-scroll">
            <div className="flex items-center border-b border-white/15 px-4 last-of-type:border-b-0">
              <p className="flex-1 py-3 text-base font-light text-paragraph">
                Vekscuse
              </p>
              <p className="py-3 text-base font-light text-paragraph">3:13</p>
            </div>
            <div className="flex items-center border-b border-white/15 px-4 last-of-type:border-b-0">
              <p className="flex-1 py-3 text-base font-light text-paragraph">
                Nepali Funk
              </p>
              <p className="py-3 text-base font-light text-paragraph">3:15</p>
            </div>
            <div className="flex items-center border-b border-white/15 px-4 last-of-type:border-b-0">
              <p className="flex-1 py-3 text-base font-light text-paragraph">
                Late Night
              </p>
              <p className="py-3 text-base font-light text-paragraph">2:09</p>
            </div>
            <div className="flex items-center border-b border-white/15 px-4 last-of-type:border-b-0">
              <p className="flex-1 py-3 text-base font-light text-paragraph">
                You Stupid Bicth
              </p>
              <p className="py-3 text-base font-light text-paragraph">3:17</p>
            </div>
            <div className="flex items-center border-b border-white/15 px-4 last-of-type:border-b-0">
              <p className="flex-1 py-3 text-base font-light text-paragraph">
                Kei Chaidaina
              </p>
              <p className="py-3 text-base font-light text-paragraph">3:22</p>
            </div>
            <div className="flex items-center border-b border-white/15 px-4 last-of-type:border-b-0">
              <p className="flex-1 py-3 text-base font-light text-paragraph">
                Vekscuse
              </p>
              <p className="py-3 text-base font-light text-paragraph">3:13</p>
            </div>
            <div className="flex items-center border-b border-white/15 px-4 last-of-type:border-b-0">
              <p className="flex-1 py-3 text-base font-light text-paragraph">
                Nepali Funk
              </p>
              <p className="py-3 text-base font-light text-paragraph">3:15</p>
            </div>
            <div className="flex items-center border-b border-white/15 px-4 last-of-type:border-b-0">
              <p className="flex-1 py-3 text-base font-light text-paragraph">
                Late Night
              </p>
              <p className="py-3 text-base font-light text-paragraph">2:09</p>
            </div>
            <div className="flex items-center border-b border-white/15 px-4 last-of-type:border-b-0">
              <p className="flex-1 py-3 text-base font-light text-paragraph">
                You Stupid Bicth
              </p>
              <p className="py-3 text-base font-light text-paragraph">3:17</p>
            </div>
            <div className="flex items-center border-b border-white/15 px-4 last-of-type:border-b-0">
              <p className="flex-1 py-3 text-base font-light text-paragraph">
                Kei Chaidaina
              </p>
              <p className="py-3 text-base font-light text-paragraph">3:22</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
