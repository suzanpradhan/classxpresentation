import MaxWidthWrapper from '@/app/component/common/MaxWidthWrapper';
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
