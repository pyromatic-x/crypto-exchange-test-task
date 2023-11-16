import { ErrorContainer } from "./styles/Error.styled";

export default function Error({ error }: { error: string }) {
  return error ? <ErrorContainer>{error}</ErrorContainer> : <></>;
}
