import React, { Dispatch, SetStateAction, useState } from "react";
import { User } from "../../common/types";
import {
  Container,
  Description,
  DescriptionTextArea,
  EditButton,
  Name,
  NameContent,
  Nickname,
  ProfileImage,
  TextContent
} from "./styled";

interface MyBoxProps {
  user: User;
  setMyInfo: Dispatch<SetStateAction<User>>;
}

const MyBox = ({
  user,
  setMyInfo
}: MyBoxProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);
  const [des, setDes] = useState<string>(user.description);
  const buttonName = editMode ? "완료" : "프로필 수정";

  const handlerEditButton = () => {
    setWarning(false);
    if (editMode) {
      const numOfEnters = des.split('\n').length - 1;
      if (numOfEnters > 2) {
        setWarning(true);
        return;
      }
      setMyInfo({...user, description: des});
      setEditMode(false);
    }
    else
      setEditMode(true);
  }

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
        {editMode ? (
          <DescriptionTextArea
            value={des}
            onChange={e => setDes(e.target.value)}
          />
        ) : (
          <Description>
            {user.description.split('\n').map((line, i) => {
              return (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              );
            })}
          </Description>
        )}
        {warning && (
          <p style={{ fontSize: '0.8rem', color: 'red', margin: 0 }}>
            줄바꿈은 2번까지만 가능합니다.
          </p>
        )}
        <EditButton onClick={handlerEditButton}>
          {buttonName}
        </EditButton>
      </TextContent>
    </Container>
  )
}

export default MyBox;
