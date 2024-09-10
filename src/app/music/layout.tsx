import { Facebook, Instagram, Youtube } from 'iconsax-react';
import HeroSlider from '../component/slider/heroSlider/HeroSlider';
import { Tabs } from '../component/ui/tabs';

const tabs = [
  { title: 'All', url: '/music' },
  { title: 'EP', url: '/music/ep' },
  { title: 'Single', url: '/music/single' },
  { title: 'Album', url: '/music/album' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full overflow-y-scroll">
      <div className="">
        <div className="top-nav bg-black">
          <div className="container mx-auto h-10">
            <div className="flex h-full items-center justify-end gap-5">
              <span className="text-sm">Follow us</span>
              <ul className="flex items-center gap-2">
                <li>
                  <a href="#">
                    <Facebook size="20" color="white" variant="Bold" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Instagram size="20" color="white" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Youtube size="20" color="white" variant="Bold" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="top-nav bg-grayPrimary">
          <div className="container mx-auto h-14"></div>
        </div>
      </div>
      <section className="bg-slate-400">
        <HeroSlider></HeroSlider>
      </section>
      <section>
        <main className="flex min-h-screen flex-col">
          <Tabs
            tabs={tabs}
            // activeTabClassName=""
            // containerClassName=""
            // contentClassName=""
            // tabClassName=""
          />
          {children}
        </main>
      </section>
    </div>
  );
}
