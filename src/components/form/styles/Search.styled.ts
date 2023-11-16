import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  height: 100%;
  width: 40px;
`;

export const Container = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.form.inputBackground};
  border: 1px solid ${({ theme }) => theme.form.inputBorderActive};
  z-index: 10;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 0;
  padding-right: 16px;
  background: transparent;
  font-weight: 400;
  font-size: 16px;
`;
export const SearchField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 0 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.form.inputBorder};
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  gap: 16px;
  cursor: pointer;

  & span:last-child {
    color: ${({ theme }) => theme.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & img {
    min-width: 20px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.form.selectItemActive};
  }
`;
