import api from '../api/baseApi';

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),

    // googleLogin: builder.mutation({
    //   query: () => ({
    //     url: '/auth/google',
    //     method: 'GET',
    //   }),
    // }), // Add this mutation for Google log in

    signUp: builder.mutation({
      query: (data) => ({
        url: '/user/register',
        method: 'POST',
        body: data,
      }),
    }),

    otpVerify: builder.mutation({
      query: (data) => ({
        url: '/auth/verify-email',
        method: 'POST',
        body: data,
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: '/auth/change-password',
        method: 'POST',
        body: data,
      }),
    }),

    getUserProfile: builder.query({
      query: () => ({
        url: '/user/profile',
        method: 'GET',
      }),
      providesTags: ['userProfile'],
    }),

    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: '/user/profile',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['userProfile'],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useChangePasswordMutation,
  useGetUserProfileQuery,
  // useGoogleLoginMutation,
  useUpdateUserProfileMutation,
  useOtpVerifyMutation,
} = authApi;
