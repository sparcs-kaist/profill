import { useEffect, useState, useRef, MutableRefObject } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { User } from "../../common/types";
import MyBox from "../../component/MyBox.tsx/MyBox";
import axios from '../../utils/axios';
import { CameraIcon, Container, GalleryGrid, InputImage } from "./styled";

const View = () => {
  const [valid, setValid] = useState<boolean>(true);
  const [user, setUser] = useState<User>({
    id: "-1", name: "", username: "", description: "", profile_image: ""
  })
  const params = useParams();
  const selectFile = useRef<HTMLInputElement>(null) as MutableRefObject<HTMLInputElement>;

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

  const handlerGalleryImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null)
      return;
    let data = new FormData();
    data.append("gallery_image", e.target.files[0]);

    axios.post(`/images/${params.username}/gallery`,
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

  return valid ? (
    <Container>
      <MyBox
        user={user}
        setUser={setUser}
      />
      <GalleryGrid>
        <InputImage
          onClick={() => selectFile.current.click()}
        >
          <CameraIcon src="/camera.svg" />
        </InputImage>
        {}
      </GalleryGrid>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        style={{
          display: "none"
        }}
        ref={selectFile}
        onChange={handlerGalleryImage}
      />
    </Container>
  ) : (
    <Navigate replace to="/login" />
  )
}

export default View;
