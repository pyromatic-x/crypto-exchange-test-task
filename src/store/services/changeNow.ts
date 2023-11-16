import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "../../constants";
import replaceEndpointParams from "../../helpers/replaceEndpointParams";
import { Currency, EstimatedAmountResponse } from "../../types";

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: REACT_APP_API_URL,
    method: "GET",
  }),
  endpoints: (builder) => ({
    getAvailableCurrencies: builder.query<Currency[], void>({
      query: () => ENDPOINTS.GET_AVAILABLE_CURRENCIES,
    }),
    getMinimalExchangeAmount: builder.query<
      { minAmount: number },
      { from_to: string }
    >({
      query: ({ from_to }) => {
        const params = [
          { key: "from_to", value: from_to },
          { key: "api_key", value: REACT_APP_API_KEY },
        ];

        return replaceEndpointParams(ENDPOINTS.GET_MINIMAL_EXCHANGE, params);
      },
    }),
    getEstimatedExchangeAmount: builder.query<
      EstimatedAmountResponse,
      { send_amount: string; from_to: string }
    >({
      query: ({ send_amount, from_to }) => {
        const params = [
          { key: "from_to", value: from_to },
          { key: "amount", value: send_amount },
          { key: "api_key", value: REACT_APP_API_KEY },
        ];

        return replaceEndpointParams(ENDPOINTS.GET_ESTIMATED_EXCHANGE, params);
      },
    }),
  }),
});

export const {
  useGetAvailableCurrenciesQuery,
  useGetMinimalExchangeAmountQuery,
  useGetEstimatedExchangeAmountQuery,
} = api;
