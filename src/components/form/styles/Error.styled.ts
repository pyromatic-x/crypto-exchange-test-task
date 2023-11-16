import styled from "styled-components";

export const ErrorContainer = styled.div`
  color: ${({ theme }) => theme.palette.error};
  font-weight: 400;
  font-size: 13px;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: -20px;
  right: 0;
`;
