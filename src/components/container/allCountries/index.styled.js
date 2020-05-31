import styled from "styled-components";

import { screens, sizes } from "../../../styles/variables";

export const AllCountriesDiv = styled.div`
  width: ${sizes.desktop};
  margin: 3rem auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${screens.mobile} {
    width: 28rem;
    flex-direction: column;
  }
`;
