import { useEffect, useState, useRef, MutableRefObject } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { Comment, Gallery, User } from "../../common/types";
import CommentsBox from "../../component/CommentsBox/CommentsBox";
import MyBox from "../../component/MyBox.tsx/MyBox";
import ImageBox from "../../component/UI/ImageBox";
import axios from '../../utils/axios';
import { CameraIcon, Container, GalleryGrid, InputImage } from "./styled";

const View = () => {
  const [valid, setValid] = useState<boolean>(true);
  const [user, setUser] = useState<User>({
    id: "-1", name: "", username: "", description: "", profile_image: ""
  })
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
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

  useEffect(() => {
    axios.get(`/images/${params.username}/gallery`)
    .then(res => {
      const newGallery: Gallery[] = res.data;
      setGallery(newGallery);
    })
    .catch(() => {
      setValid(false);
    })
  }, [])

  useEffect(() => {
    axios.get(`/${params.username}/comments`)
    .then(res => {
      const newComments: Comment[] = res.data;
      setComments(newComments.reverse());
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
      const newGallery = res.data;
      setGallery([newGallery, ...gallery]);
    })
  }

  return valid ? (
    <Container>
      <MyBox
        user={user}
        setUser={setUser}
      />
      <CommentsBox
        user={user}
        comments={comments}
        setComments={setComments}
      />
      <GalleryGrid>
        <InputImage
          onClick={() => selectFile.current.click()}
        >
          <CameraIcon src="/camera.svg" />
        </InputImage>
        {gallery && gallery.map((image, idx) => {
          return <ImageBox src={image.url} key={idx} />
        })}
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
