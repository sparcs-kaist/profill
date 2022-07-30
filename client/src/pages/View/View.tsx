import { useEffect, useState } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { User } from "../../common/types";
import MyBox from "../../component/MyBox.tsx/MyBox";
import axios from '../../utils/axios';
import { Container, ImageGrid } from "./styled";

const View = () => {
  const [valid, setValid] = useState<boolean>(true);
  const [user, setUser] = useState<User>({
    id: "-1", name: "", username: "", description: "", profile_image: ""
  })
  const params = useParams();

  useEffect(() => {
    if (!params.username) {
      setValid(false);
      return;
    }
    axios.get(`/users/${params.username}`)
    .then(res => {
      const user: User = res.data;
      setUser(user);
    })
    .catch(() => {
      setValid(false);
    })
  }, [])

  return valid ? (
    <Container>
      <MyBox
        user={user}
        setUser={setUser}
      />
      <ImageGrid>
        {}
      </ImageGrid>
    </Container>
  ) : (
    <Navigate replace to="/login" />
  )
}

export default View;
