import SimpleInput from "../inputs/SimpleInput";
import ExchangePair from "./Pair";
import PrimaryButton from "../buttons/PrimaryButton";
import Error from "./Error";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import { ButtonContainer, Container } from "./styles/Form.styled";

export default function Form() {
  const { error, loading } = useSelector((state: RootState) => state.exchange);

  return (
    <div>
      <ExchangePair />
      <Container>
        <SimpleInput title="Your Ethereum address" placeholder="0x..." />
        <ButtonContainer>
          <PrimaryButton
            title="EXCHANGE"
            action={() => {}}
            styles={{ width: "205px", height: "50px" }}
            disabled={loading}
          />
          <Error error={error} />
        </ButtonContainer>
      </Container>
    </div>
  );
}
