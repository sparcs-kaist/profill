import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px auto 60px auto;
`;

export const ProfileImage = styled.div<{ src: string }>`
  width: 120px;
  min-width: 120px;
  height: 120px;
  min-height: 120px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-color: #f0f0f0;
  background-position: center;
  border-radius: 90px;
  margin-right: 10px;
  cursor: pointer;
`;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

export const UserName = styled.span`
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
