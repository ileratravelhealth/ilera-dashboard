import { baseApi } from "../BaseUrl";

const doctorApis = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        // get all doctor
        getAllDoctor: builder.query({
            query: (params) => ({
                url: `doctors?page=${params.page || 1}`,
                method: 'GET',
            }),
            providesTags: ['doctor']
        }),
        // approve block doctor
        approveDoctor: builder.mutation({
            query: ({ id, field }) => ({
                url: `doctors/block/${id}`,
                method: 'PATCH',
                body: { field }
            }),
            invalidatesTags: ['doctor']
        }),
        // delete doctor
        deleteDoctor: builder.mutation({
            query: (id) => ({
                url: `doctors/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['doctor']
        }),
    })
})
export const {
    // get all doctor
    useGetAllDoctorQuery,
    // approve block doctor
    useApproveDoctorMutation,
    // delete doctor
    useDeleteDoctorMutation
} = doctorApis