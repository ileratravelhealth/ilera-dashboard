import { baseApi } from "../BaseUrl";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => {
                return {
                    url: `users?page=${page}`,
                    method: 'GET'
                }
            },
            providesTags: ['users']
        }),
        
    })
})