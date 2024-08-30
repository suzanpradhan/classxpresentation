import MaxWidthWrapper from '@/app/component/common/max-width-wrapper';
import SinglePlayerComponent from '@/app/component/common/SinglePlayerComponent';

export default function SinglePage() {
  return (
    <MaxWidthWrapper>
      <div className="my-20">
        <div className="flex flex-col gap-32">
          <SinglePlayerComponent />
          <SinglePlayerComponent />
          <SinglePlayerComponent />
          <SinglePlayerComponent />
          <SinglePlayerComponent />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
