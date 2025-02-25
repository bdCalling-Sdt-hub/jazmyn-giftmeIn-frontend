import api from '../api/baseApi';

const contactApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: '/contact/send',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateContactMutation } = contactApi;
