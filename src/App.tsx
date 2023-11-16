import { StyledContainer } from "./App.styled";
import Form from "./components/form/Form";
import Heading from "./components/Heading";
import { useGetAvailableCurrenciesQuery } from "./store/services/changeNow";

export default function App() {
  useGetAvailableCurrenciesQuery();

  return (
    <StyledContainer>
      <Heading />
      <Form />
    </StyledContainer>
  );
}
