import React, { Dispatch, MutableRefObject, SetStateAction, useRef, useState } from "react";
import { User } from "../../common/types";
import {
  Container,
  Description,
  DescriptionTextArea,
  Name,
  NameContent,
  UserName,
  ProfileImage,
  TextContent
} from "./styled";
import EditButton from "../UI/Button";
import axios from '../../utils/axios';

interface MyBoxProps {
  user: User;
  setUser: Dispatch<React.SetStateAction<User>>;
  isMe?: boolean;
  editDescription?: (edited: string) => void;
}

const MyBox = ({
  user,
  setUser,
  isMe,
  editDescription
}: MyBoxProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);
  const [des, setDes] = useState<string>(user.description);
  const selectFile = useRef<HTMLInputElement>(null) as MutableRefObject<HTMLInputElement>;
  const buttonName = editMode ? "완료" : "프로필 수정";

  const handlerEditButton = () => {
    if (!isMe || editDescription === undefined)
      return;

    setWarning(false);
    if (editMode) {
      const numOfEnters = des.split('\n').length - 1;
      if (numOfEnters > 2) {
        setWarning(true);
        return;
      }
      editDescription(des);
      setEditMode(false);
    }
    else {
      setDes(user.description);
      setEditMode(true);
    }
  }

  const handlerProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null)
      return;
    let data = new FormData();
    data.append("profile_image", e.target.files[0]);

    axios.post('/images/profile',
    data,
    {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      const user = res.data;
      setUser(user);
    })
  }

  return (
    <Container>
      <ProfileImage
        src={user.profile_image || "/empty.svg"}
        onClick={() => selectFile.current.click()}
      />
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        style={{
          display: "none"
        }}
        ref={selectFile}
        onChange={handlerProfileImage}
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
        {isMe && (
          <EditButton onClick={handlerEditButton}>
            {buttonName}
          </EditButton>
        )}
      </TextContent>
    </Container>
  )
}

export default MyBox;
