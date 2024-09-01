import AlbumPlayerComponent from '@/app/component/common/AlbumPlayerComponent';
import MaxWidthWrapper from '@/app/component/common/max-width-wrapper';

export default function AlbumPage() {
  return (
    <MaxWidthWrapper>
      <div className="my-20">
        <div className="flex flex-col gap-32">
          <AlbumPlayerComponent />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
