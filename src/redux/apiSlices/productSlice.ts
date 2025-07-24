import api from '../api/baseApi';

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({
        categoryId,
        minPrice,
        maxPrice,
        availability,
      }: {
        categoryId: string[];
        minPrice?: number;
        maxPrice?: number;
        availability?: string;
      }) => {
        const params = new URLSearchParams();

        categoryId.forEach((id) => params.append('categoryId', id));
        if (availability !== undefined) params.append('availability', availability);
        if (minPrice !== undefined) params.append('minPrice', minPrice.toString());
        if (maxPrice !== undefined) params.append('maxPrice', maxPrice.toString());

        return {
          url: `/product?${params.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['product'],
    }),

    getShopifyProducts: builder.query({
      query: () => ({
        url: `/product/search`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),

    getSingleShopifyProduct: builder.query({
      query: (id) => ({
        url: `/product/shopify/${id}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),

    // categories
    getCategories: builder.query({
      query: () => ({
        url: '/category',
        method: 'GET',
      }),
      providesTags: ['category'],
    }),

    //gift history
    getGiftHistory: builder.query({
      query: () => ({
        url: '/gift-collection/user-history',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetShopifyProductsQuery,
  useGetSingleShopifyProductQuery,
  useGetSingleProductQuery,
  useGetCategoriesQuery,
  useGetGiftHistoryQuery,
} = authApi;
