import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/changeNow";
import { Currency, State } from "../../types";

const {
  getAvailableCurrencies,
  getEstimatedExchangeAmount,
  getMinimalExchangeAmount,
} = api.endpoints;

const initialState: State = {
  currencies: [],
  from_amount: "", // use "" so input[type=number] is gonna be empty, not with 0 value
  to_amount: "",
  minimal: 0,
  from: undefined,
  to: undefined,
  loading: true,
  error: "",
  api_error: false,
};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    toggleLoading(state) {
      return {
        ...state,
        loading: !state.loading,
      };
    },
    setError(state, action: PayloadAction<string>) {
      return {
        ...state,
        error: action.payload,
      };
    },
    changeChoosedCurrencies(
      state,
      action: PayloadAction<{
        currency: Currency;
        side: "from" | "to";
      }>
    ) {
      const { currency, side } = action.payload;

      const oppositeSide = side === "from" ? "to" : "from";

      const isSame = state[side]?.ticker === currency.ticker;
      const isSwap = state[oppositeSide]?.ticker === currency.ticker;

      if (isSame) return state;
      if (isSwap) {
        return {
          ...state,
          [side]: currency,
          [oppositeSide]: state[side],
        };
      }

      return {
        ...state,
        error: "",
        [side]: currency,
      };
    },
    setFromAmount(state, action: PayloadAction<number>) {
      return {
        ...state,
        from_amount: action.payload,
      };
    },
    setToAmount(state, action: PayloadAction<number>) {
      return {
        ...state,
        to_amount: action.payload,
      };
    },
    swapCurrenies(state) {
      const temp = state.from;

      return {
        ...state,
        from: state.to,
        to: temp,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(getAvailableCurrencies.matchPending, (state) => {
      return { ...state, loading: true };
    });
    builder.addMatcher(
      getAvailableCurrencies.matchFulfilled,
      (state, action) => {
        const currencies = action.payload;
        return {
          ...state,
          loading: false,
          currencies,
        };
      }
    );
    builder.addMatcher(getAvailableCurrencies.matchRejected, () => {
      return {
        ...initialState,
        loading: false,
        api_error: true,
      };
    });

    builder.addMatcher(
      getMinimalExchangeAmount.matchFulfilled,
      (state, action) => {
        const { minAmount } = action.payload;
        return {
          ...state,
          from_amount: minAmount,
          minimal: minAmount,
        };
      }
    );
    builder.addMatcher(getMinimalExchangeAmount.matchRejected, (state) => {
      return {
        ...state,
        from_amount: "",
        to_amount: "",
        error: "this pair is disabled now",
      };
    });

    builder.addMatcher(getEstimatedExchangeAmount.matchPending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addMatcher(
      getEstimatedExchangeAmount.matchFulfilled,
      (state, action) => {
        const { estimatedAmount } = action.payload;
        return {
          ...state,
          loading: false,
          to_amount: estimatedAmount,
        };
      }
    );
    builder.addMatcher(
      getEstimatedExchangeAmount.matchRejected,
      (state, action: PayloadAction<any>) => {
        return {
          ...state,
          loading: false,
          to_amount: "",
          error: action.payload.data.message || "Something went wrong",
        };
      }
    );
  },
});

export const {
  toggleLoading,
  setError,
  setFromAmount,
  setToAmount,
  changeChoosedCurrencies,
  swapCurrenies,
} = exchangeSlice.actions;
export default exchangeSlice.reducer;
