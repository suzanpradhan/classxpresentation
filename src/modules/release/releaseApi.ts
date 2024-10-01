import { apiPaths } from "@/core/api/apiConstants";
import { baseApi } from "@/core/api/apiQuery";
import { PaginatedResponseType } from "@/core/types/responseTypes";
import { ReleaseResponseType } from "./releaseType";


const releaseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Get All
        getAllReleases: builder.query<
            PaginatedResponseType<ReleaseResponseType>,
            number
        >({
            query: (pageNumber) => `${apiPaths.releaseUrl}?page=${pageNumber}`,
            providesTags: (response) =>
                response?.results
                    ? [
                        ...response.results.map(
                            ({ id }) => ({ type: 'Release', id }) as const
                        ),
                        { type: 'Release', id: 'LIST' },
                    ]
                    : [{ type: 'Release', id: 'LIST' }],
            serializeQueryArgs: ({ endpointName, queryArgs }) => {
                return endpointName + queryArgs;
            },
            async onQueryStarted(payload, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (err) {
                    console.log(err);
                }
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
        getEachRelease: builder.query<ReleaseResponseType, string>({
            query: (releaseId) => `${apiPaths.releaseUrl}${releaseId}/`,
            providesTags: (result, error, id) => {
                return [{ type: 'Release', id }];
            },
            serializeQueryArgs: ({ queryArgs, endpointName }) => {
                return `${endpointName}-${queryArgs}`;
            },
            async onQueryStarted(payload, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (err) {
                    console.log(err);
                    // toast.error(JSON.stringify(err));
                }
            },
            // transformResponse: (response: any) => {
            //   return response;
            // },
        }),

    }),

    overrideExisting: true,
});

export default releaseApi;
