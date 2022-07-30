import styled from "styled-components";
import { device } from "../../utils/device";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GalleryGrid = styled.div`
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

export const InputImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 97%;
  background-color: #e0e0e0;
  margin: 5px;
  cursor: pointer;

  &:after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;

export const CameraIcon = styled.img`
  width: 35%;
`;
