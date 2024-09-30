import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  children,
  width = 'min',
}: {
  children: ReactNode;
  width?: string;
}) => {
  return (
    <div
      className={cn(
        'h mx-auto w-full bg-blackPrimary px-2.5 lg:px-20',
        width === 'max' ? 'max-w-7xl' : 'max-w-5xl'
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
