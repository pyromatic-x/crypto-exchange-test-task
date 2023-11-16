import styled from "styled-components";

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 220px;

  @media all and (max-width: 992px) {
    padding: 120px 16px 0 16px;
  }

  @media all and (max-width: 768px) {
    padding: 64px 16px 0 16px;

    & svg {
      place-self: end;
      align-self: center;
      transform: rotate(90deg);
    }
  }
`;
