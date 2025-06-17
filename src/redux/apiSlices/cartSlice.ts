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
      query: ({ data, id }) => {
        console.log('in redux => ', data, id);
        return {
          url: `/cart/${id}`,
          method: 'PUT',
          body: data,
        };
      },
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

    createOrderWithGiftBalance: builder.mutation({
      query: (data) => ({
        url: '/product-history',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['order', 'cart'],
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
    getSubscriptionsPackage: builder.query({
      query: () => ({
        url: '/package',
        method: 'GET',
      }),
      providesTags: ['subscription'],
    }),

    getCurrentSubscription: builder.query({
      query: () => ({
        url: '/payment',
        method: 'GET',
      }),
      providesTags: ['subscription'],
    }),

    //order history
    getOrders: builder.query({
      query: () => ({
        url: '/product-history',
        method: 'GET',
      }),
      providesTags: ['order'],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useUpdateCartQuantityMutation,
  useCreateOrderMutation,
  useCreateOrderWithGiftBalanceMutation,
  useGetWishlistQuery,
  useDeleteFromCartMutation,
  useCreateWishListMutation,
  useGetSubscriptionsPackageQuery,
  useGetCurrentSubscriptionQuery,
  useGetOrdersQuery,
} = cartApi;
