import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_MOVIETAGS};

  height: 48px;
  border: 0;
  border-radius: 10px;

  font-weight: 500;
  font-size: 16px;
  font-family: Roboto Slab;
  text-align: center;


`