import React, { useState } from "react";
import { User } from "../../common/types";
import MemberBox from "../../component/MemberBox/MemberBox";
import { Container } from "./styled";

const Main = () => {
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
      {users.map((user, idx) => {
        return (
          <MemberBox
            name={user.name}
            nickname={user.nickname}
            description={user.description}
            key={idx}
          />
        )
      })}
    </Container>
  )
}

export default Main;
