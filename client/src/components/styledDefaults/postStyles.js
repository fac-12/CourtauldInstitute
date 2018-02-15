import styled from "styled-components";

export const StyledDiv = styled.div`
  margin: 10px 20px 20px 20px;
  @media screen and (min-width: 600px) {
    max-width: 500px;
    margin: 10px auto;
  }
`;

export const StyledTitle = styled.h2`
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #333333;
  margin: 0.5rem 0;
`;

export const StyledContent = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  color: #333333;
  line-height: 1.375rem;
  margin: 0.5rem 0;
`;

export const StyledInfoDiv = styled.div`
  margin: 10px 0;
`;

export const StyledInfo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-size: 0.8125rem;
  color: #7f8c8d;
  margin: 5px 0;
`;

export const StyledImg = styled.img`
  width: 100%;
`;
