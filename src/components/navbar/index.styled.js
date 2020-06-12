import styled from "styled-components";

import { screens, sizes } from "../../styles/variables";

export const NavbarDiv = styled.div`
  width: 100%;
  background: ${(props) => props.theme.navbar};
  box-shadow: ${(props) => props.theme.boxShadow};
  position: fixed;
  top: 0;
  left: 0;
  div {
    width: ${sizes.desktop};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      cursor: pointer;
    }
    @media ${screens.mobile} {
      width: ${sizes.mobileRes};
      padding: 1.5rem 0;
    }
  }
`;
