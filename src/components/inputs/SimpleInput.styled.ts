import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 50px;
  background-color: ${({ theme }) => theme.form.inputBackground};
  border: 1px solid ${({ theme }) => theme.form.inputBorder};
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
`;
export const Label = styled.label`
  display: inline-block;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
`;
