import styled from "styled-components";

export const Container = styled.header`
  height: 116px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_APP};

  display: flex;
  align-items: center;
  gap: 64px;

  padding: 24px 100px;

  > a {
    font-family: Roboto Slab;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 198px;
  height: 68px;

  > img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 9;

     span {
      text-decoration: none;
      font-size: 14px;
      font-family: Roboto Slab;
      color: ${({ theme }) => theme.COLORS.MAIN_TITLE};
      
    }
  
     a {
      font-family: Roboto Slab;
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.INPUTS_SPANS};
    }
  }

`