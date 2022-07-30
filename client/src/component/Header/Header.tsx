import React from "react";
import { Container, Content, Logo } from "./styled";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo src="/logo.svg" />
        </Link>
      </Content>
    </Container>
  )
}

export default Header;
