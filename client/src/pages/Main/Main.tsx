import React, { useState } from "react";
import { User } from "../../common/types";
import MemberBox from "../../component/MemberBox/MemberBox";
import MyBox from "../../component/MyBox.tsx/MyBox";
import { Container, UsersGrid } from "./styled";

const Main = () => {
  const [myInfo, setMyInfo] = useState<User>(
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요" }
  )
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
    { id: "1", name: "류치곤", nickname: "gony", description: "안녕하세요!" },
  ]);
  return (
    <Container>
      <MyBox
        user={myInfo}
        setMyInfo={setMyInfo}
      />
      <UsersGrid>
        {users.map((user, idx) => {
          return (
            <MemberBox
              user={user}
              key={idx}
            />
          )
        })}
      </UsersGrid>
    </Container>
  )
}

export default Main;
