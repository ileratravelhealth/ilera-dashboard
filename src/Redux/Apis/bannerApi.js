import { baseApi } from "../BaseUrl";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // add Banner
        addBanner: builder.mutation({
            query: (data) => {
                return {
                    url: 'category/create-category',
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: ['category']
        }),
        // update Banner
        updateBanner: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `category/update-category/${id}`,
                    method: 'PATCH',
                    body: data,
                }
            },
            invalidatesTags: ['category']
        }),
        // get Banner
        getBanner: builder.query({
            query: (page) => {
                return {
                    url: `category?page=${page || 1}`,
                    method: 'GET',
                }
            },
            providesTags: ['category']
        }),

        // delete Banner
        deleteBanner: builder.mutation({
            query: (id) => {
                return {
                    url: `category/delete-category/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['category']
        }),

    })
})
export const {
    // add Banner
    useAddBannerMutation,
    // update category
    useUpdateBannerMutation,
    // get Banner
    useGetBannerQuery,
    // delete Banner 
    useDeleteBannerMutation
} = categoryApi