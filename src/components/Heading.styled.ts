import styled from "styled-components";

export const Title = styled.h4`
  font-size: 50px;
  font-weight: 300;
  margin-bottom: 12px;
`;
export const SubTitle = styled.p`
  font-size: 20px;
`;

export const Container = styled.div`
  margin-bottom: 50px;

  @media all and (max-width: 768px) {
    ${Title} {
      font-size: 40px;
    }
    ${SubTitle} {
      font-size: 18px;
    }
  }
`;
