import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://rakib.binarybards.online/api/v1/',
    // baseUrl: 'https://rakib5001.binarybards.online/api/v1/',
    baseUrl: 'http://139.59.0.25:6008/api/v1/',

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
