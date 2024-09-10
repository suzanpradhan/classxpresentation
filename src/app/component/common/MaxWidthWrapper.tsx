import { ReactNode } from 'react';

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-blackPrimary h mx-auto w-full max-w-5xl px-2.5 lg:px-20">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
