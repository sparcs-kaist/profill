import React from "react";
import { User } from "../../common/types";
import {
  Container,
  Description,
  Name, NameContent, UserName,
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
      <ProfileImage 
        src={user.profile_image || "/empty.svg"}
      />
      <TextContent>
        <NameContent>
          <Name>
            {user.name}
          </Name>
          <UserName>
            {user.username}
          </UserName>
        </NameContent>
        <Description>
          {user.description}
        </Description>
      </TextContent>
    </Container>
  )
}

export default MemberBox;
