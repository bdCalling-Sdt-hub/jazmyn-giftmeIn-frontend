import api from '../api/baseApi';

const surveyQuestionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createSurvey: builder.mutation({
      query: (data) => ({
        url: '/survey/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['surveyQuestions'],
    }),

    getSurveyQuestions: builder.query({
      query: () => ({
        url: '/survey/questions',
        method: 'GET',
      }),
      providesTags: ['surveyQuestions'],
    }),
  }),
});

export const { useCreateSurveyMutation, useGetSurveyQuestionsQuery } = surveyQuestionsApi;
