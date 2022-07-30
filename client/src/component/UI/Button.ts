import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 25px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: var(--color-border);
    color: #ffffff;
  }
`;

export default Button;
