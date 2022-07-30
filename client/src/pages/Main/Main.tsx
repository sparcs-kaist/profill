import { useEffect, useState } from "react";
import { User } from "../../common/types";
import MemberBox from "../../component/MemberBox/MemberBox";
import MyBox from "../../component/MyBox.tsx/MyBox";
import { Container, UsersGrid } from "./styled";
import axios from "../../utils/axios";
import { Link, Navigate } from "react-router-dom";

const Main = () => {
  const testMyInfo = { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요" };
  const testUsers: User[] = [
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
    { id: "1", name: "류치곤", username: "gony", description: "안녕하세요!", profile_image: "" },
  ];
  const [valid, setValid] = useState<boolean>(true);
  const [myInfo, setMyInfo] = useState<User>({
    id: "-1", name: "", username: "", description: "", profile_image: ""
  });
  const [users, setUsers] = useState<User[]>(testUsers);

  useEffect(() => {
    // axios.get('/users/')
    // .then(res => {
    //   const users = res.data;
    //   setUsers(users);
    // })
    // .catch(() => {
    //   setValid(false);
    // })

    axios.get('/users/me')
    .then(res => {
      const user = res.data;
      setMyInfo(user);
    })
    .catch(() => {
      setValid(false);
    })
  }, []);

  return valid ? (
    <Container>
      <MyBox
        user={myInfo}
        setMyInfo={setMyInfo}
      />
      <UsersGrid>
        {users && users.map((user, idx) => {
          return (
            <Link to={`/view/${user.username}`}>
              <MemberBox
                user={user}
                key={idx}
              />
            </Link>
          )
        })}
      </UsersGrid>
    </Container>
  ) : (
    <Navigate replace to="/login" />
  )
}

export default Main;
