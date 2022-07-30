import styled from "styled-components";

const ImageBox = styled.div<{ src: string }>`
  position: relative;
  width: 97%;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
  background-position: center;

  margin: 5px;
  cursor: pointer;

  &:after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;

export default ImageBox;
