import styled from "styled-components";

import { screens, sizes } from "../../../styles/variables";

export const ActionDiv = styled.div`
  width: ${sizes.desktop};
  margin: 3rem auto 0;
  @media ${screens.mobile} {
    width: 28rem;
  }
  div {
    width: 7%;
    padding: 0.5rem 2.5rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.elements};
    box-shadow: ${(props) => props.theme.boxShadow};
    cursor: pointer;
    @media ${screens.mobile} {
      width: 35%;
    }
  }
`;

export const SearchFilterDiv = styled.div`
  width: ${sizes.desktop};
  margin: 3rem auto 0;
  display: flex;
  justify-content: space-between;
  @media ${screens.mobile} {
    width: ${sizes.mobileRes};
    margin-top: 3rem;
    flex-direction: column;
  }
  div:nth-of-type(1) {
    width: 35%;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.elements};
    box-shadow: ${(props) => props.theme.boxShadow};
    display: flex;
    justify-content: space-between;
    @media ${screens.mobile} {
      width: 100%;
    }
    input {
      width: 95%;
      padding-left: 1.5rem;
    }
  }
  div:nth-of-type(2) {
    width: 12%;
    padding: 1rem;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.elements};
    box-shadow: ${(props) => props.theme.boxShadow};
    display: flex;
    justify-content: space-between;
    @media ${screens.mobile} {
      margin-top: 3rem;
      width: 60%;
    }
    input {
      width: 100%;
    }
  }
`;
