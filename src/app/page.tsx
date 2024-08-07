"use client";

import Image from "next/image";
import Cover from "../../public/image/cover.png";
import { WavePlayer } from "./component/WavePlayer";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-grayDark relative overflow-hidden my-10">
        <div className="absolute w-56 h-56 rounded-full bg-white/20 -right-24 top-10 max-md:top-96 -z-0 blur-3xl"></div>
        <div className="relative flex px-3 z-10 max-md:flex-col">
          <div className="basis-1/2 grow py-3"><Image src={Cover} alt="album-cover" /></div>
          <div className="basis-1/2 grow pt-3 max-md:pt-0">
            <div className="flex flex-col ps-5 max-md:ps-0 mb-2">
              <h3 className="text-white text-2xl font-bold">Sampana</h3>
              <span className="text-white text-base font-light mb-1">VEK</span>
              <p className="text-gray-300 text-xs font-base">{"The album showcases VEK's charismatic authenticity and versatility, blending various genres and styles."}</p>
              <div className="my-4">
                <WavePlayer
                  // onPlay={handlePlayPauseAllComments}
                  audioItem={{
                    url: "/audio/intro.mp3",
                    duration:
                      35.018125 * 1000
                    ,
                  }}
                  theme="dark"
                  size="large"
                />
              </div>
              <p className="text-white text-lg font-normal">Rs. 1000.00</p>
            </div>
            <div className="flex max-[350px]:flex-col gap-1 ps-5 max-md:ps-0 mb-2">
              <div className="flex items-stretch border border-slate-400">
                <div className="self-center flex max-[350px]:h-8 items-center justify-between text-white px-2">
                  <span className="cursor-pointer hover:bg-gray-500/15 w-5 h-5 flex items-center justify-center">-</span>
                  <span className="cursor-pointer hover:bg-gray-500/15 w-5 h-5 flex items-center justify-center">1</span>
                  <span className="cursor-pointer hover:bg-gray-500/15 w-5 h-5 flex items-center justify-center">+</span>
                </div>
                <div className="border-r border-slate-400"></div>
                <a href="#" className="px-5 text-xs font-normal text-white flex items-center justify-center text-nowrap">ADD TO CART</a>
              </div>
              <div>
                <a href="#" className="px-4 h-8 text-xs font-normal bg-gray-300 flex items-center justify-center text-nowrap">BUY NOW</a>
              </div>
            </div>
            <div className="playlist ps-5 max-md:ps-0">
              <h3 className="text-white text-sm font-normal mb-1">Songs(16)</h3>
              <div className="flex flex-col h-[133px] pr-1 custom-scrollbar overflow-y-scroll">
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Vekscuse</div>
                  <div>3:13</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Nepali Funk</div>
                  <div>2:15</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Late Night</div>
                  <div>3:09</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>You Stupid Bish</div>
                  <div>3:13</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Khi Chaidaina</div>
                  <div>2:15</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Bujhaideuna</div>
                  <div>3:09</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Timi Nai Timi</div>
                  <div>3:13</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Voodoo</div>
                  <div>2:15</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Keep Kissing - Remix</div>
                  <div>3:09</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Burning Heart</div>
                  <div>3:13</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>{"Can't Get Enough"}</div>
                  <div>2:15</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Mayale</div>
                  <div>3:09</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Jhari</div>
                  <div>3:13</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Sakina</div>
                  <div>2:15</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Bachau Malai</div>
                  <div>3:09</div>
                </div>
                <div className="flex items-center justify-between text-gray-300 text-sm font-normal last-of-type:border-b-0 border-b border-white/15 py-2">
                  <div>Sakchu</div>
                  <div>3:09</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // <WavePlayer
          // onPlay={handlePlayPauseAllComments}
      //           audioItem={{
      //             url: "/audio/intro.mp3",
      //             duration: 
      //             35.018125 * 1000
      //             ,
      //             // info: {
      //             //   title: nowPlayingItem?.audio
      //             //     ? nowPlayingItem?.audio?.title || nowPlayingItem?.title
      //             //     : nowPlayingItem?.title,
      //             //   description: nowPlayingItem.owner ?? '',
      //             // },
      //           }}
      //           theme="dark"
      //           // audioWaveData={
      //           //   nowPlayingItem.audio?.wave_data != undefined
      //           //     ? nowPlayingItem.audio.wave_data
      //           //     : JSON.stringify(defaultWaveData)
      //           // }
      //           size="large"
      //         /> */}
    </div>
  );
}
