import styled from "styled-components";
import Button from '../../component/UI/Button';

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto;
`;

export const InputArea = styled.div`
  width: 100%;
  margin: 30px 0px;
`;

export const InputLabel = styled.p`
  font-size: 1.0rem;
  font-weight: 500;
  margin: 5px;
`;

export const Input = styled.input.attrs({
  required: true,
  maxLength: 20
})`
  width: calc(100% - 40px);
  height: 40px;
  background-color: var(--color-box);
  padding: 0 20px;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const LoginButton = styled(Button)`
  height: 50px;
  font-size: 1rem;
`;