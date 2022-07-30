import styled from "styled-components";

const ImageBox = styled.img`
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

export default ImageBox;
