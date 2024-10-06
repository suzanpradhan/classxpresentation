import Image from 'next/image';
import HomePageNav from '../component/HomePageNav';
import LoginForm from './component/LoginForm';

export default function page() {
  return (
    <div className="w-dvh h-dvh">
      <Image
        src="/image/login-image.png"
        alt="Login Image"
        sizes=""
        className="-z-10 bg-grayDark"
        fill
        objectFit="cover"
      />
      <div className="absolute z-0 h-full w-full bg-blackPrimary/40"></div>
      <div className="container z-20 mx-auto flex flex-col gap-24 pt-12">
        <HomePageNav />
        <LoginForm />
      </div>

      {/* <div className="from-[162159]/50 via-[010207]/10 to-[010207]/100 z-10 h-full w-full bg-gradient-to-r from-0% via-55% to-100%"></div> */}
    </div>
  );
}
