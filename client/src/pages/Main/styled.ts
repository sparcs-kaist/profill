import styled from "styled-components";
import { device } from "../../utils/device";

export const Container = styled.div`
  width: 100%;
  display: grid;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }

`;
