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

    // categories
    getCategories: builder.query({
      query: () => ({
        url: '/category',
        method: 'GET',
      }),
      providesTags: ['category'],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetCategoriesQuery } = authApi;
