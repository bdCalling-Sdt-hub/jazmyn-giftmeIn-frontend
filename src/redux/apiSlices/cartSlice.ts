import api from '../api/baseApi';

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        url: '/cart/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['cart'],
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

    deleteFromCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),

    //checkout

    createOrder: builder.mutation({
      query: (data) => ({
        url: '/package/checkout',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['order'],
    }),

    //wishlist
    getWishlist: builder.query({
      query: () => ({
        url: '/wishlist',
        method: 'GET',
      }),
      providesTags: ['wishlist'],
    }),
    createWishList: builder.mutation({
      query: (data) => ({
        url: '/wishlist/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['wishlist'],
    }),

    //subscription
    createSubscription: builder.mutation({
      query: (data) => ({
        url: '/package/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['order'],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useUpdateCartQuantityMutation,
  useCreateOrderMutation,
  useGetWishlistQuery,
  useDeleteFromCartMutation,
  useCreateWishListMutation,
  useCreateSubscriptionMutation,
} = cartApi;
