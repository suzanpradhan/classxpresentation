'use client';

import Image from 'next/image';
import {
  List,
  MagnifyingGlass,
  ShoppingCartSimple,
  User,
} from 'phosphor-react';

export default function HomePageNav() {
  return (
    <div className="z-20 flex w-full items-start justify-between">
      <div className="relative h-12 w-36">
        <Image
          src="/image/logo.png"
          alt="Login Image"
          sizes="(max-width: 768px) 100vw, 33vw"
          fill
          objectFit="cover"
        />
      </div>

      <div className="font-scratchy ml-36 mt-8 flex-1 text-center text-6xl">
        Never Abandon Imagination
      </div>

      <div className="flex items-center gap-6">
        <MagnifyingGlass size={36} />
        <User size={36} />
        <span className="flex items-center gap-2 border-l border-white pl-6">
          <ShoppingCartSimple size={36} />
          <span className="text-2xl">My cart</span>
        </span>
        <List size={36} />
      </div>
    </div>
  );
}
