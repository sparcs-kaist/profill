import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px auto 80px auto;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
`;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const NameContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 5px 5px;
`;

export const Nickname = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin: 5px 5px;
`;

export const Description = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  margin: 5px 5px;
`;

export const DescriptionTextArea = styled.textarea.attrs({
  autoFocus: true,
  rows: 4,
  maxLength: 100
})`
  resize: none;
  font-family: 'Roboto';
  border: 2px solid var(--color-border);
  border-radius: 5px;
  outline: none;
`;

export const EditButton = styled.button`
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
