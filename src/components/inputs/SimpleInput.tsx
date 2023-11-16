import { Container, Input, Label, Wrapper } from "./SimpleInput.styled";

export default function SimpleInput({
  title,
  placeholder = "",
}: {
  title: string;
  placeholder?: string;
}) {
  return (
    <Wrapper>
      <Label>{title}</Label>
      <Container>
        <Input type="text" placeholder={placeholder} />
      </Container>
    </Wrapper>
  );
}
