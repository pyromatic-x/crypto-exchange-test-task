import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-top: 16px;

  @media all and (max-width: 768px) {
    flex-wrap: wrap;

    ${ButtonContainer}, ${ButtonContainer} button {
      width: 100%;
    }
  }
`;
