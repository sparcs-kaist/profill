import { FormEvent, useEffect, useState } from "react";
import { Container, Input, InputArea, InputLabel, LoginButton } from "./styled";
import axios from "../../utils/axios";
import qs from 'qs';
import { saveToken } from '../../utils/auth';
import { Navigate, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../component/config";

const Login = () => {
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/users/me')
    .then(res => {
      if (res.status === 200) {
        setIsLogined(true);
      }
    })
    .catch(() => {})
  }, [])

  const login = (e: FormEvent) => {
    e.preventDefault();
    setError(false);

    const data = {
      username: id,
      password: pw
    };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded', withCredentials: true  },
      data: qs.stringify(data),
      url: `${BASE_URL}/api/auth/`,
    };
    axios(options)
    .then(res => {
      if (res.status === 200) {
        saveToken(res.data.access_token);
        navigate('/');
      }
      else {
        setError(true);
        setPw("");
      }
    })
    .catch(() => { 
      setError(true);
      setPw("");
    });
  }

  return !isLogined ? (
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
            value={id}
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
            value={pw}
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
  ) : (
    <Navigate replace to="/" />
  )
}

export default Login;
