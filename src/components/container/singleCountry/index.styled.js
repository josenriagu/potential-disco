import styled from "styled-components";

import { screens, sizes } from "../../../styles/variables";

export const SingleCountryDiv = styled.div`
  width: ${sizes.desktop};
  margin: 5rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${screens.mobile} {
    width: 28rem;
    flex-direction: column;
  }
  div:nth-of-type(1) {
    width: 45%;
    @media ${screens.mobile} {
      width: 100%;
      margin-bottom: 4rem;
    }
    img {
      max-width: 100%;
    }
  }
  div:nth-of-type(2) {
    width: 45%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media ${screens.mobile} {
      flex-direction: column;
      width: 100%;
    }
    h5 {
      width: 100%;
      margin-bottom: 3rem;
    }
    p {
      width: 50%;
      font-size: 1.6rem;
      margin-top: 0;
      @media ${screens.mobile} {
        width: 100%;
      }
    }
    .d {
      @media ${screens.mobile} {
        display: none;
      }
    }
    .m {
      display: none;
      @media ${screens.mobile} {
        display: initial;;
      }
    }
    .tl {
      margin-top: 5rem;
    }
    #subr {
      width: 100%;
    }
    #border {
      width: 100%;
      margin-top: 5rem;
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      strong {
        margin-right: 0.5rem;
      }
      span {
        margin-right: 0.5rem;
        margin-top: 0.5rem;
        font-size: 1.6rem;
        padding: 0 1rem;
        border-radius: 0.2rem;
        background: ${(props) => props.theme.elements};
        box-shadow: ${(props) => props.theme.boxShadow};
        cursor: pointer;
      }
    }
  }
`;
