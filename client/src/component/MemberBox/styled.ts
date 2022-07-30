import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 70px);
  height: 96px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  padding: 15px 30px;
  margin: 5px 5px;
`;

export const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
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
