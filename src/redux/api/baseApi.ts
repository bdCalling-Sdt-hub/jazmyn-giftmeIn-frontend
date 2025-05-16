import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://10.0.70.188:5004/api/v1/',
    baseUrl: 'http://174.138.48.210:5004/api/v1/',

    prepareHeaders: (headers) => {
      const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    'category',
    'product',
    'event',
    'order',
    'userProfile',
    'cart',
    'wishlist',
    'subscription',
    'surveyQuestions',
  ],
});

export const { reducer } = api;
export default api;
