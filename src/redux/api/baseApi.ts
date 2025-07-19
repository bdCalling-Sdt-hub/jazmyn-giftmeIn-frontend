import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://64.23.193.89:5000/api/v1/',
    baseUrl: 'https://api.giftmein.com/api/v1/',
    // baseUrl: 'http://10.10.7.46:5000/api/v1/',

    prepareHeaders: (headers) => {
      const token = Cookies.get('accessToken');
      // console.log(token, 'sdfdsf');
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
