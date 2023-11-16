import styled from "styled-components";

export const Button = styled.button<{
  $styles?: { width?: string; height?: string };
}>`
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: ${({ $styles }) => ($styles?.width ? $styles.width : "200px")};
  height: ${({ $styles }) => ($styles?.height ? $styles.height : "100%")};
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.buttons.primary.main};
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.25s ease, background-color 0.25s ease;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.buttons.primary.active};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.buttons.primary.disabled};
  }
`;
