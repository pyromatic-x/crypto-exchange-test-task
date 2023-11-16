import { useState } from "react";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { Currency, RootState } from "../../types";
import { useSelector } from "react-redux";
import ClickAwayListener from "../ClickAwayListener";
import {
  Button,
  Container,
  Input,
  List,
  ListItem,
  SearchField,
} from "./styles/Search.styled";

function ExchangePairInputSearch({
  onOpenedChange,
  onCurrencyChange,
}: {
  onOpenedChange: (state: boolean) => void;
  onCurrencyChange: (currency: Currency) => void;
}) {
  console.log("rerender pairs search");

  const { currencies } = useSelector((state: RootState) => state.exchange);

  const [value, setValue] = useState("");
  const [searched, setSearched] = useState(currencies.slice(0, 3));

  function handleOnChange(value: string) {
    setValue(value);

    if (!value) {
      setSearched(currencies.slice(0, 3));
    } else {
      const escaped = value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      const regex = new RegExp(`${escaped}`, "gi");

      const searched = currencies
        .filter((t) => regex.test(t.ticker) || regex.test(t.name))
        .slice(0, 3);

      setSearched(searched);
    }
  }

  function handleCurrencyChange(currency: Currency) {
    onOpenedChange(false);
    onCurrencyChange(currency);
  }

  function handleClickAway() {
    onOpenedChange(false);
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container>
        <SearchField>
          <Input
            type="text"
            value={value}
            placeholder="Search"
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <Button onClick={() => onOpenedChange(false)}>
            <CloseIcon />
          </Button>
        </SearchField>
        <List>
          {searched.length ? (
            searched.map((currency) => (
              <ListItem
                key={currency.ticker}
                onClick={() => handleCurrencyChange(currency)}
              >
                <img src={currency.image} alt={currency.name + " icon"} />
                <span>{currency.ticker.toUpperCase()}</span>
                <span>{currency.name}</span>
              </ListItem>
            ))
          ) : (
            <ListItem>
              <span>No matching results</span>
            </ListItem>
          )}
        </List>
      </Container>
    </ClickAwayListener>
  );
}

export default ExchangePairInputSearch;
