import { useState } from "react";
import { ReactComponent as ChevronDownIcon } from "../../icons/chevronDown.svg";
import ExchangePairInputSearch from "./Search";
import { Currency } from "../../types";
import {
  Container,
  Divider,
  Input,
  PickedCurrency,
  PickedCurrencyInner,
} from "./styles/Input.styled";

type IProps = {
  currency?: Currency;
  amount: number | string;
  minimal?: number;
  disabled: boolean;
  loading?: boolean;
  onAmountChange?: (value: number) => void;
  onCurrencyChange: (currency: Currency) => void;
};

function ExchangePairInput({
  currency,
  amount,
  minimal,
  disabled,
  loading,
  onAmountChange,
  onCurrencyChange,
}: IProps) {
  const [currencyMenuOpened, setCurrencyMenuOpened] = useState(false);

  return (
    <Container
      $disabled={disabled}
      $loading={loading}
      $menuOpened={currencyMenuOpened}
    >
      <Input
        type="number"
        value={amount}
        placeholder="Enter amount..."
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
        disabled={disabled}
        min={minimal}
        autoFocus
      />
      <Divider />
      <PickedCurrency onClick={() => setCurrencyMenuOpened(true)}>
        <PickedCurrencyInner>
          {currency ? (
            <>
              <img src={currency.image} alt={currency.name + " icon"} />
              <p>{currency.ticker.toUpperCase()}</p>
            </>
          ) : (
            <span>Currency...</span>
          )}
        </PickedCurrencyInner>
        <ChevronDownIcon />
      </PickedCurrency>
      {currencyMenuOpened && (
        <ExchangePairInputSearch
          onOpenedChange={setCurrencyMenuOpened}
          onCurrencyChange={onCurrencyChange}
        />
      )}
    </Container>
  );
}

export default ExchangePairInput;
