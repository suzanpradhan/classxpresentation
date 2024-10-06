'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { X } from 'phosphor-react';

export default function LoginForm() {
  return (
    <div className="mx-auto flex max-w-3xl border border-white/20 bg-black/75 p-4 backdrop-blur-lg">
      {/* <div className="h-auto w-full bg-black/0"></div> */}
      <div className="flex flex-col items-start justify-between font-satoshi">
        <p>Login into your account</p>
        <div className="font-scratchy -rotate-12 pb-4 pl-4 text-start text-8xl text-transparent text-yellow-400">
          Never Abandon <br /> Imagination
        </div>
      </div>
      <div className="flex flex-col items-end gap-4">
        <X size={32} className="text-grayText/50" />
        <div className="min-w-96">
          <Button
            variant="default"
            className="flex w-full justify-between gap-4"
            size={'lg'}
          >
            <div className="relative h-6 w-6">
              <Image
                src="/image/google-icon.png"
                alt="Login Image"
                sizes="(max-width: 768px) 100vw, 33vw"
                fill
                objectFit="cover"
              />
            </div>
            <p className="font-satosh flex-1 text-base">Continue with Google</p>
          </Button>
        </div>
        <div className="flex w-full items-center gap-2">
          <span className="flex-1 border-t border-border"></span>
          <span className="text-grayText text-base">OR LOGIN WITH EMAIL</span>
          <span className="flex-1 border-t border-border"></span>
        </div>
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <Button variant="link" className="text-grayText h-6 !py-0 !pr-0">
          Forgot Password?
        </Button>
        <Button variant="default" className="flex w-full gap-4" size={'lg'}>
          Login
        </Button>
        <div className="flex w-full items-start justify-center">
          <span className="text-grayText">{`Don't have an account?`}</span>
          <Button variant="link" className="h-6 !py-0 !pl-2 !pr-0 text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
