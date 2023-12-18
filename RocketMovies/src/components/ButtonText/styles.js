import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.PINK : theme.COLORS.PINK};

  font-family: Roboto Slab;
  border: none;
  font-size: 16px;


`