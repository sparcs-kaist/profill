import { Container, Content, Logo, Logout } from "./styled";
import { Link } from "react-router-dom";
import { logout } from "../../utils/auth";

const Header = () => {
  const handlerLogout = () => {
    logout();
    location.reload();
  }

  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo src="/logo.svg" />
        </Link>
        <Logout
          src="/logout.svg"
          onClick={handlerLogout}
        />
      </Content>
    </Container>
  )
}

export default Header;
