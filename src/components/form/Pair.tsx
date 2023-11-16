import ExchangePairInput from "./Input";
import { ReactComponent as ExchangeIcon } from "../../icons/exchange.svg";
import { useDispatch, useSelector } from "react-redux";
import { Currency, RootState } from "../../types";
import { api } from "../../store/services/changeNow";
import {
  changeChoosedCurrencies,
  setError,
  setFromAmount,
  swapCurrenies,
} from "../../store/reducers/exchangeSlice";
import { useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import { Container } from "./styles/Pair.styled";

export default function ExchangePair() {
  const dispatch = useDispatch();

  const [triggerEstimatedAmount] =
    api.endpoints.getEstimatedExchangeAmount.useLazyQuery();
  const [triggerMinimalAmount] =
    api.endpoints.getMinimalExchangeAmount.useLazyQuery();

  const { from, to, to_amount, from_amount, minimal, error, loading } =
    useSelector((state: RootState) => state.exchange);

  const debouncedValue = useDebounce(from_amount, 300);

  useEffect(() => {
    if (from && to) {
      triggerMinimalAmount({
        from_to: `${from?.ticker}_${to?.ticker}`,
      });
    }
  }, [from, to]);

  useEffect(() => {
    if (debouncedValue) {
      triggerEstimatedAmount({
        send_amount: debouncedValue.toString(),
        from_to: `${from?.ticker}_${to?.ticker}`,
      });
    }
  }, [debouncedValue]);

  function handleFromAmountChange(value: number) {
    if (!from || !to) {
      dispatch(setError("Pick currencies to exchange"));
      return;
    }

    if (!value) return;
    if (value >= minimal && error) dispatch(setError(""));

    dispatch(setFromAmount(value));
  }

  function handleCurrencyChange(side: "from" | "to", currency: Currency) {
    dispatch(
      changeChoosedCurrencies({
        currency,
        side,
      })
    );
  }

  return (
    <Container>
      <ExchangePairInput
        currency={from}
        amount={from_amount}
        minimal={minimal}
        onAmountChange={handleFromAmountChange}
        onCurrencyChange={handleCurrencyChange.bind(null, "from")}
        disabled={!from}
        loading={loading}
      />

      <ExchangeIcon onClick={() => dispatch(swapCurrenies())} />

      <ExchangePairInput
        currency={to}
        amount={to_amount}
        onCurrencyChange={handleCurrencyChange.bind(null, "to")}
        disabled={!to}
        loading={loading}
      />
    </Container>
  );
}
