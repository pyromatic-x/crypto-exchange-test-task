import styled, { css } from "styled-components";

export const Container = styled.div<{
  $disabled?: boolean;
  $loading?: boolean;
  $menuOpened: boolean;
}>`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 50px;
  background-color: ${({ theme }) => theme.form.inputBackground};
  border: 1px solid ${({ theme }) => theme.form.inputBorder};
  opacity: ${({ $loading }) => ($loading ? "0.65" : "1")};
  transition: 0.25s ease;
  cursor: ${({ $loading }) => ($loading ? "progress" : "auto")};
  pointer-events: ${({ $loading }) => ($loading ? "none" : "all")};

  ${({ $disabled, $menuOpened }) =>
    $disabled &&
    !$menuOpened &&
    css`
      &:hover::after {
        content: "Select a currency";
        position: absolute;
        right: 0;
        top: -36px;
        padding: 6px 16px;
        font-size: 13px;
        font-weight: 700;
        color: #fff;
        border-radius: ${({ theme }) => theme.borderRadius};
        background-color: ${({ theme }) => theme.palette.primary};
      }

      &:hover::before {
        content: "";
        position: absolute;
        right: calc(67px - 6px);
        top: -9px;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid ${({ theme }) => theme.palette.primary};
      }
    `}
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 0;
  padding: 0 16px;
  background: transparent;
  font-weight: 400;
  font-size: 16px;

  &[disabled] {
    cursor: not-allowed;
  }
`;
export const Divider = styled.div`
  height: 60%;
  width: 2px;
  background-color: ${({ theme }) => theme.form.inputBorder};
`;
export const PickedCurrency = styled.div`
  max-width: 140px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 11px 0 3px;
  cursor: pointer;
`;
export const PickedCurrencyInner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  width: 100%;

  & p {
    margin: 0;
    max-width: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & span {
    color: ${({ theme }) => theme.text.secondary};
  }
`;
