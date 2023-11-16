export const ENDPOINTS = {
  GET_AVAILABLE_CURRENCIES: "currencies?active=true&fixedRate=true",
  GET_MINIMAL_EXCHANGE: "min-amount/:from_to?api_key=:api_key",
  GET_ESTIMATED_EXCHANGE: "exchange-amount/:amount/:from_to/?api_key=:api_key",
};
