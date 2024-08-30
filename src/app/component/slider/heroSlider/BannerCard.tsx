import CoverImage from '../../../../../public/image/banner/banner-img-1.png';
import { Meteors } from '../../ui/meteors';
export default function BannerCard({ cardData }: { cardData: number }) {
  return (
    <div
      className={`relative h-[70vh] bg-slate-600 bg-cover bg-center`}
      style={{ backgroundImage: `url(${CoverImage.src})` }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/55 to-transparent"></div>
      <div className="container relative mx-auto h-full">
        <div className="flex h-full w-1/2 flex-col items-start justify-center gap-4 font-iosevka">
          <h3 className="bg-gradient-to-r from-white via-transparent to-white bg-clip-text text-7xl font-semibold uppercase text-transparent">
            Angalney chu
          </h3>
          <div>
            <p className="text-lg font-light uppercase">
              Get the prereleased version on
            </p>
            <p className="text-4xl font-normal uppercase">August 24</p>
          </div>
          <button className="rounded-sm bg-white px-5 py-3 font-satoshi text-xs font-light text-black">
            BUY NOW
          </button>
        </div>
      </div>
      <Meteors number={20} />
    </div>
  );
}
