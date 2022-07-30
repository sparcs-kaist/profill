import React from "react";
import { User } from "../../common/types";
import {
  Container,
  Description,
  Name, NameContent, Nickname,
  ProfileImage,
  TextContent
} from "./styled";

interface MemberBoxProps {
  user: User;
}

const MemberBox = ({
  user
}: MemberBoxProps) => {
  return (
    <Container>
      <ProfileImage src="/empty.svg" />
      <TextContent>
        <NameContent>
          <Name>
            {user.name}
          </Name>
          <Nickname>
            {user.nickname}
          </Nickname>
        </NameContent>
        <Description>
          {user.description}
        </Description>
      </TextContent>
    </Container>
  )
}

export default MemberBox;
