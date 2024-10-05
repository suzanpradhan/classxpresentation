'use client';

import AlbumPlayerComponent from '@/app/component/common/AlbumPlayerComponent';
import MaxWidthWrapper from '@/app/component/common/MaxWidthWrapper';
import SinglePlayerComponent from '@/app/component/common/SinglePlayerComponent';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import { PaginatedResponseType } from '@/core/types/responseTypes';
import releaseApi from '@/modules/release/releaseApi';
import { ReleaseResponseType } from '@/modules/release/releaseType';
import { useEffect, useState } from 'react';

export default function AllPages() {
  const dispatch = useAppDispatch();
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    dispatch(releaseApi.endpoints.getAllReleases.initiate(pageIndex));
  }, [dispatch, pageIndex]);

  const releasesData = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[`getAllReleases${pageIndex}`]
        ?.data as PaginatedResponseType<ReleaseResponseType>
  );

  return (
    <MaxWidthWrapper>
      <div className="mb-10 mt-16 flex flex-col gap-8">
        {releasesData?.results.map((item, index) => {
          switch (item.release_type) {
            case 'ALB':
              return <AlbumPlayerComponent key={index} release={item} />;
            case 'EP':
              return <AlbumPlayerComponent key={index} release={item} />;
            case 'SNG':
              return <SinglePlayerComponent key={index} release={item} />;
            default:
              return <></>;
          }
        })}
      </div>
    </MaxWidthWrapper>
  );
}
