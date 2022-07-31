import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 70px);
  height: 96px;
  background-color: var(--color-box);
  display: flex;
  align-items: center;
  padding: 15px 30px;
  margin: 5px 5px;
  cursor: pointer;
  transition: 0.2s linear;
  border-radius: 5px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ProfileImage = styled.div<{ src: string }>`
  width: 70px;
  min-width: 70px;
  height: 70px;
  min-height: 70px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-color: #f0f0f0;
  background-position: center;
  border-radius: 90px;
  margin-right: 10px;
`;

export const TextContent = styled.div`
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
