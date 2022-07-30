import { FormEvent, useState } from "react";
import { Container, Input, InputArea, InputLabel, LoginButton } from "./styled";
import axios from "axios";
import qs from 'qs';
import { saveToken } from '../../utils/auth';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = (e: FormEvent) => {
    e.preventDefault();
    setError(false);

    const data = {
      username: id,
      password: pw
    };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url: 'http://localhost:8000/api/auth/',
    };
    axios(options)
    .catch(() => {
      setError(true);
      setId("");
      setPw("");
      throw new Error('login Error');
    })
    .then(res => {
      if (res.status === 200) {
        saveToken(res.data.access_token);
        navigate('/');
      }
      else {
        setError(true);
        setId("");
        setPw("");
      }
    });
  }

  return (
    <Container>
      <form
        style={{
          width: "100%",
          height: "100%"
        }}
        onSubmit={login}
      >
        <InputArea>
          <InputLabel>
            아이디
          </InputLabel>
          <Input
            type="text"
            placeholder="username"
            onChange={e => setId(e.target.value)}
          />
        </InputArea>
        <InputArea>
          <InputLabel>
            비밀번호
          </InputLabel>
          <Input
            type="password"
            placeholder="password"
            onChange={e => setPw(e.target.value)}
          />
        </InputArea>
        {error && <p style={{ color: 'red' }}>아이디 또는 비밀번호가 올바르지 않습니다.</p>}
        <LoginButton
          type="submit"
        >
          로그인
        </LoginButton>
      </form>
    </Container>
  )
}

export default Login;
