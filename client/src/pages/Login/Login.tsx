import { useState } from "react";
import { Container, Input, InputArea, InputLabel, LoginButton } from "./styled";
import axios from "../../utils/axios";

const Login = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const login = () => {
    axios.post('/auth', {
      username: id,
      password: pw
    })
    .catch(() => {
      throw new Error('Error: login');
    })
    .then(res => {
      console.log(res);
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
