import api from '../api/baseApi';

const eventApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (data) => {
        console.log('in redux', data);
        return {
          url: '/event/create',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['event'],
    }),

    getEvents: builder.query({
      query: () => ({
        url: '/event/user',
        method: 'GET',
      }),
      providesTags: ['event'],
    }),

    updateEvent: builder.mutation({
      query: (data) => {
        console.log('in redux', data);
        return {
          url: `/event/${data.id}`,
          method: 'PATCH',
          body: data,
        };
      },
      invalidatesTags: ['event'],
    }),

    getEventCategories: builder.query({
      query: () => ({
        url: '/event-category',
        method: 'GET',
      }),
      providesTags: ['event'],
    }),
  }),
});

export const { useCreateEventMutation, useGetEventsQuery, useGetEventCategoriesQuery, useUpdateEventMutation } =
  eventApi;
