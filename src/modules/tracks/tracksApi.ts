import { apiPaths } from "@/core/api/apiConstants";
import { baseApi } from "@/core/api/apiQuery";
import { PaginatedResponseType } from "@/core/types/responseTypes";
import { TrackResponseType } from "./tracksType";


const tracksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get All
        getTracks: builder.query<
            PaginatedResponseType<TrackResponseType>,
            { pageNumber: number, releaseId?: string }
        >({
            query: ({ pageNumber, releaseId }) => `${apiPaths.trackUrl}?page=${pageNumber}${releaseId ? `&release_id=${releaseId}` : ''}`,
            providesTags: (response) =>
                response?.results
                    ? [
                        ...response.results.map(
                            ({ id }) => ({ type: 'Tracks', id }) as const
                        ),
                        { type: 'Tracks', id: 'LIST' },
                    ]
                    : [{ type: 'Tracks', id: 'LIST' }],
            serializeQueryArgs: ({ endpointName, queryArgs }) => {
                return endpointName + queryArgs.pageNumber + queryArgs.releaseId;
            },
            async onQueryStarted(payload, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (err) {
                    console.log(err);
                }
            },

            forceRefetch({ currentArg, previousArg }) {
                return currentArg?.pageNumber !== previousArg?.pageNumber;
            },
        }),

    }),

    overrideExisting: true,
});

export default tracksApi;
