import React from "react";
import {
  Container,
  Description,
  Name, NameContent, Nickname,
  ProfileImage,
  TextContent
} from "./styled";

interface MemberBoxProps {
  name: string;
  nickname: string;
  description: string;
}

const MemberBox = ({
  name,
  nickname,
  description
}: MemberBoxProps) => {
  return (
    <Container>
      <ProfileImage src="/empty.svg" />
      <TextContent>
        <NameContent>
          <Name>
            {name}
          </Name>
          <Nickname>
            {nickname}
          </Nickname>
        </NameContent>
        <Description>
          {description}
        </Description>
      </TextContent>
    </Container>
  )
}

export default MemberBox;
