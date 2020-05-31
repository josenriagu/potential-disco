import styled from "styled-components";

import { screens } from "../../../styles/variables";

export const CardDiv = styled.div`
  width: 23%;
  margin-bottom: 4rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.elements};
  box-shadow: ${(props) => props.theme.boxShadow};
  @media ${screens.mobile} {
    width: 100%;
  }
  :hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  article {
    width: 100%;
    padding: 2rem;
  }
`;
