'use client';
import Image from 'next/image';
import Cover from '../../../../public/image/image 23.png';
import CoverDisk from '../../../../public/image/Mask group.png';
import RecordDisk from '../../../../public/image/record-disk.png';
import { WavePlayer } from '../WavePlayer';
export default function SinglePlayerComponent() {
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
                  src={CoverDisk}
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
            src={Cover}
            alt="album-cover"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full basis-1/2">
        <div className="ms-10 flex h-full flex-col gap-4 font-satoshi">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-medium">Jana Deu</h2>
            <h5 className="text-xl font-medium">Dong</h5>
            <p className="text-paragraph text-base font-normal">
              The album is an amalgamation of contemplations and reflections of
              the artist's musical journey as well as amalgamation of
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
                  className="text-blackPrimary flex h-8 items-center justify-center text-nowrap bg-gray-300 px-4 text-xs font-normal"
                >
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
