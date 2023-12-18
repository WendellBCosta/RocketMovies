import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUTS};
  border-radius: 10px;

  > input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.MAIN_TEXT};
    padding: 19px 24px;

    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.INPUT_SPANS};
    }

    > svg {
    margin-left: 16px;
    }
  }

`