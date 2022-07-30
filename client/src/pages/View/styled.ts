import styled from "styled-components";
import { device } from "../../utils/device";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageGrid = styled.div`
  display: grid;
  width: 100%;

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
