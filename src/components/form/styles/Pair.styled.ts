import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 24px;
  align-items: center;

  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 2px;

    & svg {
      place-self: end;
      align-self: center;
      transform: rotate(90deg);
    }
  }
`;
