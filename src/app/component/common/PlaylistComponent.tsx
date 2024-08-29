'use client';

import Image from 'next/image';
import Cover from '../../../../public/image/cover.png';

import { WavePlayer } from '../WavePlayer';

export default function PlaylistComponent() {
  return (
    <div className="relative my-10 w-full max-w-3xl overflow-hidden bg-grayDark">
      <div className="absolute -right-24 top-10 -z-0 h-56 w-56 rounded-full bg-white/20 blur-3xl max-md:top-96"></div>
      <div className="relative z-10 flex px-3 max-md:flex-col">
        <div className="grow basis-1/2 py-3">
          <Image src={Cover} alt="album-cover" />
        </div>
        <div className="grow basis-1/2 pt-3 max-md:pt-0">
          <div className="mb-2 flex flex-col ps-5 max-md:ps-0">
            <h3 className="text-2xl font-bold text-white">Sampana</h3>
            <span className="mb-1 text-base font-light text-white">VEK</span>
            <p className="font-base text-xs text-gray-300">
              {
                "The album showcases VEK's charismatic authenticity and versatility, blending various genres and styles."
              }
            </p>
            <div className="my-4">
              <WavePlayer
                // onPlay={handlePlayPauseAllComments}
                audioItem={{
                  url: '/audio/intro.mp3',
                  duration: 35.018125 * 1000,
                }}
                theme="dark"
                size="large"
              />
            </div>
            <p className="text-lg font-normal text-white">Rs. 1000.00</p>
          </div>
          <div className="mb-2 flex gap-1 ps-5 max-md:ps-0 max-[350px]:flex-col">
            <div className="flex items-stretch border border-slate-400">
              <div className="flex items-center justify-between self-center px-2 text-white max-[350px]:h-8">
                <span className="flex h-5 w-5 cursor-pointer items-center justify-center hover:bg-gray-500/15">
                  -
                </span>
                <span className="flex h-5 w-5 cursor-pointer items-center justify-center hover:bg-gray-500/15">
                  1
                </span>
                <span className="flex h-5 w-5 cursor-pointer items-center justify-center hover:bg-gray-500/15">
                  +
                </span>
              </div>
              <div className="border-r border-slate-400"></div>
              <a
                href="#"
                className="flex items-center justify-center text-nowrap px-5 text-xs font-normal text-white"
              >
                ADD TO CART
              </a>
            </div>
            <div>
              <a
                href="#"
                className="flex h-8 items-center justify-center text-nowrap bg-gray-300 px-4 text-xs font-normal"
              >
                BUY NOW
              </a>
            </div>
          </div>
          <div className="playlist ps-5 max-md:ps-0">
            <h3 className="mb-1 text-sm font-normal text-white">Songs(16)</h3>
            <div className="custom-scrollbar flex h-[133px] flex-col overflow-y-scroll pr-1">
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Vekscuse</div>
                <div>3:13</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Nepali Funk</div>
                <div>2:15</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Late Night</div>
                <div>3:09</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>You Stupid Bish</div>
                <div>3:13</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Khi Chaidaina</div>
                <div>2:15</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Bujhaideuna</div>
                <div>3:09</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Timi Nai Timi</div>
                <div>3:13</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Voodoo</div>
                <div>2:15</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Keep Kissing - Remix</div>
                <div>3:09</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Burning Heart</div>
                <div>3:13</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>{"Can't Get Enough"}</div>
                <div>2:15</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Mayale</div>
                <div>3:09</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Jhari</div>
                <div>3:13</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Sakina</div>
                <div>2:15</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Bachau Malai</div>
                <div>3:09</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/15 py-2 text-sm font-normal text-gray-300 last-of-type:border-b-0">
                <div>Sakchu</div>
                <div>3:09</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
