export type RootState = {
  exchange: State;
};

export type State = {
  currencies: Currency[] | [];
  from_amount: number | string;
  to_amount: number | string;
  minimal: number;
  from: Currency | undefined;
  to: Currency | undefined;
  loading: boolean;
  error: string;
  api_error: boolean;
};

export type Currency = {
  featured: boolean;
  hasExternalId: boolean;
  image: string;
  isFiat: boolean;
  isStable: boolean;
  name: string;
  supportsFixedRate: boolean;
  ticker: string;
};

export type EstimatedAmountResponse = {
  estimatedAmount: number;
  transactionSpeedForecast: string;
  warningMessage: null | string;
};
