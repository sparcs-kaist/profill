import React, { useEffect, useState } from "react";
import { Comment, User } from "../../common/types";
import { CommentContainer, CommentInfo, CommentItem, Container, DateText, Enter, Input, InputContainer, InternalContainer, Writer } from "./styled";
import axios from "../../utils/axios";
import qs from 'qs';
import { BASE_URL } from "../config";

interface CommentsProps {
  user: User;
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>
}

const CommentsBox = ({
  user,
  comments,
  setComments
}: CommentsProps) => {
  const [content, setContent] = useState<string>("");
  const [warning, setWarning] = useState<boolean>(false);


  const handlerEnter = () => {
    setWarning(false);
    const numOfEnters = content.split('\n').length - 1;
    if (numOfEnters > 2) {
      setWarning(true);
      return;
    }

    const data = {
      content: content
    };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json', withCredentials: true },
      data: data,
      url: `${BASE_URL}/api/${user.username}/comments`,
    };
    axios(options)
    .then(res => {
      const newComment = res.data;
      setComments([newComment, ...comments]);
      setContent("");
    })
  }
  // const 

  return (
    <Container>
      <InternalContainer>
        {comments && comments.map((comment, idx) => {
          return (
            <CommentContainer key={idx}>
              <CommentItem>
                {comment.content}
              </CommentItem>
              <CommentInfo>
                <Writer>
                  {comment.creator && comment.creator.username}
                </Writer>
                {/* <DateText>
                  {(Date(comment.created_at))}
                </DateText> */}
              </CommentInfo>
            </CommentContainer>
          )
        })}
      </InternalContainer>
      {warning && (
        <p style={{ fontSize: '0.8rem', color: 'red', margin: 0 }}>
          줄바꿈은 2번까지만 가능합니다.
        </p>
      )}
      <InputContainer>
        <Input required value={content} onChange={e => setContent(e.target.value)} />
        <Enter onClick={handlerEnter}>
          등록
        </Enter>
      </InputContainer>
    </Container>
  )
}

export default CommentsBox;
