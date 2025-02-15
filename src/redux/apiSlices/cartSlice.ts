import api from '../api/baseApi';

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        url: '/cart/create',
        method: 'POST',
        body: data,
      }),
    }),

    getCart: builder.query({
      query: () => ({
        url: '/cart',
        method: 'GET',
      }),
      providesTags: ['cart'],
    }),

    updateCartQuantity: builder.mutation({
      query: ({ data, id }) => ({
        url: `/cart/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['cart'],
    }),

    //wishlist
    getWishlist: builder.query({
      query: () => ({
        url: '/wishlist',
        method: 'GET',
      }),
      providesTags: ['wishlist'],
    }),
  }),
});

export const { useAddToCartMutation, useGetCartQuery, useUpdateCartQuantityMutation, useGetWishlistQuery } = cartApi;
